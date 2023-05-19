import PocketBase from 'pocketbase';

export const dbCtx = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);