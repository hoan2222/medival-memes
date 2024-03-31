import {NextResponse} from "next/server"




  const fetcher = async () => {

    const res = await fetch('http://kjflaksjdfhkjsdf.medianewsonline.com/wp-json/wp/v2/titles?&acf_format=standard&_fields=id,title,acf');
    const data = await res.json();

    return data;
  }

  export default fetcher;