import { useEffect,useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({keyword}) =>{
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () =>{
        try{
            // const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            
            const {data} = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url)
            
        }catch(error){
            setGifUrl('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWNrbDFqNHVoaXBlODV5cjU4ZDFzMG5jN2swZTJ5anA5eHVkeGtxeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MFabj1E9mgUsqwVWHu/giphy-downsized-large.gif');
        }
    }
    useEffect(() => {
        if(keyword)fetchGifs();
    }, [keyword]);

    return gifUrl;
}
export default useFetch;