export const nanoid = () => Math.random().toString(36).slice(2, 10);
export const fmt = (iso) => new Date(iso).toLocaleString();
