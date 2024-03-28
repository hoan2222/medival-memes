

const Source = async () => {

    const contents = await getData();

    return(
        <div className="px-28 pt-16 pb-10" id="sources">
            <h1 className="text-center text-4xl font-bold pb-6">Bildquellen</h1>
            <div className="flex ">
            <ul className="text-2xl font-semibold">
                {contents.map(content => (
                    <li key={content.id}><p>{content.title.rendered}</p></li>
                ))}
            </ul>
            <ul className="text-2xl pl-6">
                {contents.map(content => (
                    <li
                    key={content.id}
                    >
                        
                        <p>{content.acf.source}</p>
                    </li>
                ))}
            </ul>
            </div>
            
        </div>

    )
}

export default Source;



async function getData(){

    const req = await fetch('http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf', { next: { revalidate: 3600 } })
    const data = await req.json()

    return data;
}