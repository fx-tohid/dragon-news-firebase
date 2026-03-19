import React, { use, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
 const fetchDatas = fetch('/news.json').then(res => res.json())


const LatestNews = () => {

    const datas = use(fetchDatas);

    const [breakingNews, setBreakingNews] = useState([])
    useEffect(() => {
        const breakingNews = datas.filter(data => data.others.is_trending)
        setBreakingNews(breakingNews)
    }, [datas])

    return (
        <div className=' my-3 flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                {
                    breakingNews.map(news => <p className='font-bold mx-2'>{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;