import axios from "axios";



export const PracticeApi = async () => {
    try {
        const response = await axios.get(
            "https://dummyjson.com/products",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response || [];

    } catch (e) {
        console.error("Error fetching weather data", e);
        return null;

    }
}