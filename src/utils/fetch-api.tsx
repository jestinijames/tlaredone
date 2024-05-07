export async function fetchData(
  playlistId: string | undefined,
  maxResults = 6,
  pageToken?: string,
  order = ''
) {
  try {
    const API_KEY = process.env.YOUTUBE_API_TOKEN;

    const requestUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}
    ${pageToken ? `&pageToken=${pageToken}` : ''}
    ${order ? `&order=${order}` : ''}
    `;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Unable to fetch data.`);
  }
}
