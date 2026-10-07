import type { APIRoute } from "astro";

export const prerender = false;

const USER_ID = "197747787";
const LIMIT = 3;

type Book = {
  title: string;
  author: string;
  cover: string;
  link: string;
  status: "reading" | "read";
};

function field(item: string, tag: string): string {
  const match = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  if (cdata) return cdata[1].trim();
  return raw
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

async function fetchShelf(shelf: string, sort: string, status: Book["status"]): Promise<Book[]> {
  const url = `https://www.goodreads.com/review/list_rss/${USER_ID}?shelf=${shelf}&sort=${sort}&order=d&per_page=${LIMIT}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Goodreads ${shelf} feed returned ${res.status}`);
  const xml = await res.text();

  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, LIMIT).map(([, item]) => ({
    title: field(item, "title"),
    author: field(item, "author_name").replace(/\s+/g, " "),
    // Strip Goodreads' size suffix (e.g. "._SY475_") to get the full-resolution cover.
    cover: field(item, "book_large_image_url").replace(/\._S[XY]\d+_(?=\.\w+$)/, ""),
    link: field(item, "link"),
    status,
  }));
}

export const GET: APIRoute = async () => {
  try {
    // Currently-reading takes priority; most recently finished books fill the rest.
    const [reading, read] = await Promise.all([
      fetchShelf("currently-reading", "date_added", "reading"),
      fetchShelf("read", "date_read", "read"),
    ]);
    const books = [...reading, ...read].slice(0, LIMIT);

    return new Response(JSON.stringify({ books }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache at Vercel's edge for an hour, serve stale while refreshing.
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("Goodreads fetch error:", err);
    return new Response(JSON.stringify({ error: "Failed to load books" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};
