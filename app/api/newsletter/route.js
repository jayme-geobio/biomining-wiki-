export async function POST(request) {
  const body = await request.json();

  const response = await fetch('https://api.homeworld.bio/api/forms/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.text();

  return new Response(data, {
    status: response.status,
    headers: { 'Content-Type': response.headers.get('Content-Type') || 'application/json' },
  });
}
