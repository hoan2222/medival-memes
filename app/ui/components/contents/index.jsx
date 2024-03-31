import useSWR from 'swr';

import fetcher from '@/app/api/route';

import Card from "./card";


const Content =  async () => {

    const { data, error, isLoading} = useSWR('/api/route', fetcher)

    if (error) return <div>failed to load...</div>
    if (isLoading) return <div>loading...</div>
    return(
        <section className="flex justify-between overflow-x-hidden w-full no-scrollbar" id="generator">
                 <div className="flex w-full overflow-auto [&>div]:flex-shrink-0 px-10 no-scrollbar">
                    {data?.map((content) => (
                        <Card 
                        key={content.id}
                        title={data.title.rendered}
                        summary={content.acf.summary}
                        image={content.acf.thumbnail}
                        />

                    ))}
                </div>
        </section>
       
    )
}

export default Content;





