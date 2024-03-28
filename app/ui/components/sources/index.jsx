
const reqUrl = 'http://medieval-memes.local/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf'

const Source = async () => {

    const req = await fetch(reqUrl, {cache: "no-store"});
    const contents = await req.json(); 


    return(
        <div className="px-28 pt-16 pb-10" id="sources">
            <h1 className="text-center text-4xl font-bold pb-6">Bildquellen</h1>
            <div className="flex ">
            <ul className="text-2xl">
                {contents.map(content => (
                <li 
                key={content.id}
                >
                    <h1  className="font-bold pr-4">{content.title.rendered}</h1>
                </li>
                ))}
            </ul>
            <ul className="text-2xl">
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