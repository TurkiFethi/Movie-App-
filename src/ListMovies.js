import React from 'react'
import '../src/ListMovies.css'
import RatingStars from './RatingStars'

export default function ListMovies({tabListMovies,searchName,filterRating}) {
    return (
        <div className="top-container">
         {tabListMovies.filter(e=>(e.movieName.toLowerCase().includes(searchName.toLowerCase()) && e.rating>=filterRating) ).map(el=>(
             <div className="container-movie">
                 <span><RatingStars  rate={el.rating}/></span>
                 <img src={el.movieImage}/>
                 <span>{el.movieName}</span>
                 <span>{el.movieDuration}</span>
                 <span>{el.movieType}</span>
             </div>
         ))}
        </div>
    )
}
