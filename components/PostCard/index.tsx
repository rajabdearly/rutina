/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './PostCard.module.css';
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
  return (
    <Link href={encodeURI(`/posts/${slug}`)}>
      <div className={styles.postCard}>
        <img
          src={picUrl}
          className={styles.picture}
          alt={title.split(' ')[0]}
          width="150"
          height="150"
        ></img>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  );
};

export default PostCard;
