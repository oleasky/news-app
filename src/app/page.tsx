// src/app/page.tsx

import NewsCard from '@/app/components/NewsCard';
import clientPromise from '../lib/mongodb';
import styles from '@/app/styles/NewsCard.module.scss';

interface NewsData {
  _id: string;
  imageUrl: string;
  dateCategory: string;
  title: string;
  description: string;
  readMoreLink: string;
}

async function fetchNewsData(): Promise<NewsData[]> {
  const client = await clientPromise;
  const db = client.db('news-app');
  const news = await db.collection('articles').find({}).toArray();
  return JSON.parse(JSON.stringify(news));
}

export default async function Home() {
  const newsData = await fetchNewsData();

  return (
    <div className='page'>
      <h1>My News App</h1>
      <div className={styles.newsList}>
        {newsData.map((news) => (
          <NewsCard
            key={news._id}
            imageUrl={news.imageUrl}
            dateCategory={news.dateCategory}
            title={news.title}
            description={news.description}
            readMoreLink={news.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
}
