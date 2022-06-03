import type { GetServerSideProps, NextPage } from 'next';
import { baseUrl } from 'server-config';

import PostCard from '@components/PostCard';

import styles from '../styles/Home.module.css';
import { Post } from './api/posts';

interface Props {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(`${baseUrl}/api/posts`);
  const posts = (await res.json()) as Post[];

  return {
    props: { posts },
  };
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
      <div className={styles.posts}>
        {posts.map((post) => {
          return (
            <div key={post.id} className="mb-4">
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                slug={post.slug}
                picUrl={post.pic_url}
              />
            </div>
          );
        })}
      </div>
  );
};

export default Home;
