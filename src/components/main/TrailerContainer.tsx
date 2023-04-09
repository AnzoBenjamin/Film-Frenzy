import React from 'react'

const TrailerContainer = ({trailer, title}) => {
  return (
    <figure className='trailer-container'>
            <iframe
                src={`${trailer}`}
                frameBorder="0"
                allowFullScreen
                className="trailer-container__video"
              ></iframe>
              <figcaption className="trailer-details">
                <p className="trailer-details__title">{title}</p>
              </figcaption>
    </figure>
  )
}
export default TrailerContainer