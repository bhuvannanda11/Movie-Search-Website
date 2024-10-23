import React, {useContext ,createContext, useEffect, useState} from 'react'

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
//const API_URL = "";
const AppContext = createContext();

//we need to creat a provider fun
const AppProvider = ({children}) =>{
    const [isLoading, setLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError, setError] = useState({show:"false",msg:""});
    const [query,setQuery] = useState("");

    const getMovies = async (URL)=>{
        
        try{
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);
            if(data.Response==="True"){
                setLoading(false);
                setMovie(data.Search);
                setError({
                    show:false,
                    msg:"",
                });
            }
            else{
                setError({
                    show:true,
                    msg:data.Error,
                });
            }
        }catch(error){
            console.log(error);
        }
        
    }
    
    useEffect(()=>{
        const timmerOut = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },800)
        return ()=> clearTimeout(timmerOut);
    },[query]);

    return <AppContext.Provider value={{isLoading,movie,isError,query,setQuery}}>
                {children}
            </AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext,API_URL};
