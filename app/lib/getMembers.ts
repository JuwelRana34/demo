export async function getMembers() {
  const api = process.env.api;

  if (!api) {
    throw new Error("API URL is not configured");
  }

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}