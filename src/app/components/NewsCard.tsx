import React from 'react';
import styles from '../styles/NewsCard.module.scss';

interface NewsCardProps {
    imageUrl: string;
    dateCategory: string;
    title: string;
    description: string;
    readMoreLink: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, dateCategory, title, description, readMoreLink }) => {
    return (
        <div className={styles.newsCard}>
            <img src={imageUrl} alt="News Image" />
            <div className={styles.dateCategory}>{dateCategory}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                {description}
            </div>
            <a href={readMoreLink} className={styles.readMore}>Read more</a>
        </div>
    );
};

export default NewsCard;
