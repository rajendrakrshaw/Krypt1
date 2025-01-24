import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");
    
    const fetchGifs = async () => {
        try {
            // Adjust the URL format for the API request
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const data = await response.json();
            
            // Check if the data is returned correctly
            if (data.data.length > 0) {
                // Set the URL of the first GIF
                setGifUrl(data.data[0]?.images?.downsized_medium?.url);
            } else {
                // No GIF found, fallback to default
                setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');
            }
        } catch (error) {
            console.error("Error fetching GIFs:", error);
            // If there is an error in fetching, set the fallback GIF URL
            setGifUrl('https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');
        }
    };

    useEffect(() => {
        if (keyword) {
            fetchGifs();
        }
    }, [keyword]);

    return gifUrl;
};

export default useFetch;
