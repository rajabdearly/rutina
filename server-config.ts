const isDev = process.env.NODE_ENV !== 'production';

export const baseUrl = isDev ? 'http://localhost:3000' : 'https://rutina.dev';
