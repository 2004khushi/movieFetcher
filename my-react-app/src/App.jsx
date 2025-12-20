import Search from './components/Search'
import Spinner from './components/Spinner'
import {useState, useEffect} from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    Method: 'GET', //since we're going to get the data
    headers:{
        accept: 'application/json', //this is the format in which we want their app's data
        Authorization: 'Bearer ' + API_KEY,     //this helps in telling the the other side that who's trying to make access (so to tell it's us we send our token key
    }
}

const App = () => {

    const[searchTerm, setSearchTerm] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try{
            const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS); //we getting endpoint by fetch() in react while passing basic api details for authentication+authorization

            if(!response.ok){
                throw new Error('Could not find movies from API');
            }

            const data = await response.json();
            console.log(data)

            if(data.Response === 'False'){
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
            
        }catch(e){
            console.log(`Error: ${e}`);
            setErrorMessage('Error fetching movies. Please try again later... ');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    },[])


    return (
        <main>
            <div className="pattern" />

            <div className="wrapper">
                <header>
                    <img src="./hero.png" alt="Hero-Banner" />
                    <h1>
                        Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
                    </h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className='all-movies'>
                    <h2 className = 'mt-[40px]'> All Movies</h2>

                    {isLoading ? <Spinner /> : errorMessage? (<p className='text-red-900'>{errorMessage}</p>) : <ul>
                        {movieList.map((movie) => (
                            <p key={movie.id} className='text-white'>{movie.title}</p>
                        ))}
                    </ul>}
                </section>

            </div>
        </main>
    )
}

export default App
