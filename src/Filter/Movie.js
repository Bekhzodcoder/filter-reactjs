import {motion} from 'framer-motion';

function Movie({movie}){
    return(
       <motion.div layout>
           <h2>{movie.title}</h2>
           <img src={"https://image.tmdb.org/t/p/w500/"+movie.backdrop_path} />
       </motion.div> 
    )
}

export default Movie;