import Link from 'next/link';
import styles from './PostCard.module.css';
interface PostCardProps {
    title: string;
    description: string;
    picUrl: string;
    slug: string;
}

const PostCard = ({title, description, picUrl, slug}: PostCardProps) => {
    
    return (
        <Link href={encodeURI(picUrl)}>
                <div className={styles.title}>{title}</div>
        <div className={styles.picture}>{picUrl}</div>
        <div className={styles.description}>{description}</div>
        </Link>

    )
    
};

export default PostCard;