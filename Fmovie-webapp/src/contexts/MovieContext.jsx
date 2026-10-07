import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites,setFavorites] = useState([]) 
     const [isLoaded, setIsLoaded] = useState(false);
      // Load favorites from localStorage
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if(storedFavs) setFavorites(JSON.parse(storedFavs))
            setIsLoaded(true)
    },[])
// Save favorites to localStorage
    useEffect(() => {
        if(isLoaded) localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites,isLoaded])
    const addToFavorites = (movie) => {
        
        setFavorites(prev => [...prev,movie])
    } ;
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    const isFavorite = (movieId) =>{
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite 
   }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}