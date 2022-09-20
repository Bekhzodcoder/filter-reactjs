import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from './Filter/Movie';
import Filter from './Filter/Filter';
import {motion} from 'framer-motion';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(()=>{
    fetchPopular();
  }, [])

  const fetchPopular = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=afb0098b093cbea349f3829a1c4307ca&language=en-US&page=1')
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
    
  }
  return (
    <div className="App">
      <Filter popular={popular} layout setFiltered = {setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
     <motion.div animate={{y:100}} className='popular-movies'>
        {filtered.map(movie=>{
          return <Movie key={movie.id} movie={movie} />;
        })}
     </motion.div>
    </div>
  );
}

export default App;
