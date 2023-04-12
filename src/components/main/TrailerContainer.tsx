import React from 'react'

interface Props{
  trailer: any,
  title: string
}
const TrailerContainer: React.FC<Props> = ({trailer, title}) => {
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