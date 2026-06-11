import type { APIRoute } from "astro";

export const prerender = false;
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const GET: APIRoute = async () => {
  try {
    console.log("ENV vars:", {
      account: import.meta.env.R2_ACCOUNT_ID,
      accessKey: import.meta.env.R2_ACCESS_KEY_ID ? "***" : "undefined",
      secretKey: import.meta.env.R2_SECRET_ACCESS_KEY ? "***" : "undefined",
      bucket: import.meta.env.R2_BUCKET_NAME,
    });

    const s3 = new S3Client({
      region: "auto",
      endpoint: `https://${import.meta.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: import.meta.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: import.meta.env.R2_SECRET_ACCESS_KEY!,
      },
    });

    const command = new GetObjectCommand({
      Bucket: import.meta.env.R2_BUCKET_NAME!,
      Key: "professional resources/Zak_Resume_June.pdf",
      ResponseContentDisposition: 'attachment; filename="Zak_ElSeht_Resume.pdf"',
    });

    // URL expires in 60 seconds — enough for the download to start
    const url = await getSignedUrl(s3, command, { expiresIn: 60 });

    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("R2 presign error:", err);
    return new Response(JSON.stringify({ error: "Failed to generate download link" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
