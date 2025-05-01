import { useEffect, useState, createContext} from "react";
import Practice2 from './Practice2'
import { PracticeApi } from "../../Services/Practice";


export const UserContext = createContext();

const Practice1 = () => {

    const [data,setData] = useState({})
    const DataApi = async () => {
        const response = await PracticeApi();
        console.log("Ddddd", response?.data?.products);
        setData(response?.data?.products);
        
    }
    useEffect(() => {
        DataApi(); 
      }, []);
    return (
        <UserContext.Provider value={data}>
        <h1>{`Hello ${data[0]?.brand}!`}</h1>
        <Practice2 />
      </UserContext.Provider>
  
    )
}

export default Practice1
