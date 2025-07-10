/* eslint-disable @typescript-eslint/no-unused-vars */
export function extractPathFromUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return null;
  }
}
