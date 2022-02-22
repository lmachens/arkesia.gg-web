import { createClient } from "@supabase/supabase-js";
import { unstable_createFileUploadHandler } from "remix";
import sharp from "sharp";
import type { NodeOnDiskFile } from "@remix-run/node";

export const supabase = createClient(
  process.env.SUPABASE_URL || "https://URL.supabase.co",
  process.env.SUPABASE_KEY || "SUPABASE_KEY"
);

export const imageToWebp = async (input: NodeOnDiskFile) => {
  const arrayBuffer = (await input.arrayBuffer()) as Buffer;

  return sharp(arrayBuffer).webp().toBuffer();
};

export const uploadNodeScreenshot = async (
  filename: string,
  buffer: Buffer
) => {
  const bucket = supabase.storage.from("nodes");
  const { data, error } = await bucket.upload(filename, buffer);

  if (error || !data?.Key) {
    throw error;
  }
  return bucket.getPublicUrl(filename).publicURL;
};

export const deleteNodeScreenshot = async (publicUrl: string) => {
  const bucket = supabase.storage.from("nodes");
  const path = publicUrl.split("nodes/").at(-1);
  if (!path) {
    console.warn(`Could not delete ${publicUrl}`);
    return;
  }
  return bucket.remove([path]);
};

export const uploadHandler = unstable_createFileUploadHandler({
  maxFileSize: 60000000,
  file: ({ filename }) => filename,
});
