import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const prerender = false;
const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${"your_cloudflare_account_id"}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: "your_r2_access_key_id",
    secretAccessKey: "your_r2_secret_access_key"
  }
});
const GET = async () => {
  try {
    const command = new GetObjectCommand({
      Bucket: "your_bucket_name",
      Key: "professional resources/Zak_Resume_June.pdf",
      ResponseContentDisposition: 'attachment; filename="Zak_ElSeht_Resume.pdf"'
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 60 });
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("R2 presign error:", err);
    return new Response(JSON.stringify({ error: "Failed to generate download link" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
