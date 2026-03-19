import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const [news, setNews] = useState({})
    const data = useLoaderData();
    const { id } = useParams();

    const categoryId = parseInt(id)


    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id === categoryId)
        setNews(newsDetails)
    }, [data, id, news, categoryId])

    // console.log(news)

    return (
        <div>
            <header className='py-3'>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>NewsDetails</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;