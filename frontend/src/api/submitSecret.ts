const API_URL = process.env.REACT_APP_API_URL;

export async function submitSecret(secret: string) {
  const res = await fetch(`${API_URL}/api/secrets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret })
  });
  const data = await res.json();
  return { ok: res.ok, data };
}

export async function fetchSecret(id: string) {
  const res = await fetch(`${API_URL}/api/secrets/${id}`);
  const data = await res.json();
  return { ok: res.ok, data };
} 