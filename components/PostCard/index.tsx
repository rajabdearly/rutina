/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './index.module.css';
interface PostCardProps {
  title: string;
  description: string;
  picUrl: string;
  slug: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  picUrl,
  slug,
}) => {
  console.log(slug);

  return (
    
      <div className={styles.postCard}>
        <div className='md:flex'>
        <div className="md:shrink-0">
        <Link href={encodeURI(`/posts/${slug}`)}>
          <img
            src={picUrl}
            className={styles.picture}
            alt={title.split(' ')[0]}
            width="150"
            height="150"
          />
          </Link>
        </div>
        <div className='p-8'>
        <Link href={encodeURI(`/posts/${slug}`)}><div className={styles.title}>{title}</div></Link>
          <div className={styles.description}>{description}</div>
        </div>
        </div>
      </div>

  );
};

export default PostCard;
