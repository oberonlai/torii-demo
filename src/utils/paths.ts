const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return path === '/' ? `${base}/` : `${base}${path}`;
}
