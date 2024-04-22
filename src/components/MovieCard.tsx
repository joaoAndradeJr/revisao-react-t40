import React from 'react'

export default function MovieCard({ movie, full }) {
  return (
    <section>
      <h1>{ movie.title }</h1>
      <img src={ movie.image } alt={ movie.title } />
      { full && (
        <>
          <p>{ movie.storyline }</p>
          <h5>{ movie.rating }</h5>
          <p>{ movie.bookmarked ? '⭐️' : '☆' }</p>
        </>
       ) }

      { movie.genre.map((e, index) => <p key={ index }>{ e }</p>)
        }
    </section>
  )
}
