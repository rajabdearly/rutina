import type { NextApiRequest, NextApiResponse } from 'next';
import POSTS_DATA from '@lib/data/posts.json';

export type Post = {
  id: number;
  title: string;
  pic_url: string;
  description: string;
  slug: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  if (req.method !== 'GET') {
    res.status(405).end();
  }
  const posts = (POSTS_DATA as Post[]).slice(0, 9).map((post) => ({
    ...post,
    slug: buildSlug(post.slug),
  }));
  res.status(200).json(posts);
}

function buildSlug(slug: string) {
  return slug.replace(/\s+/g, '-');
}