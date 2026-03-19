import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    const { id } = useParams() // string
    // console.log(data);
    
    
    useEffect(() => {
        const categoryId = parseInt(id)
        if (id === '0') {
            setCategoryNews(data);
            // return;
        } else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick === true)
            setCategoryNews(filteredNews);
            // return
        } else {
            const filteredNews1 = data.filter(news => news.category_id === categoryId)
            // console.log(filteredNews);
            setCategoryNews(filteredNews1);
            // return
        }
        // console.log(id, categoryId)

    }, [data, id])




    // console.log(categoryNews)
    return (
        <div>
            <h2 className='font-bold mb-5'>
                Total <span className='text-secondary'>{categoryNews.length}</span> news found
            </h2>
            {/* {
                !categoryNews && <h2>No news found</h2>
            } */}
            <div className="grid grid-cols-1 gap-5 ">
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} />)
                }
            </div>
        </div>
    );
};

export default CategoryNews;