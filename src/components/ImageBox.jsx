import React from 'react'
import images from '../assets/utils/images'

const ImageBox = ({image}) => {
  

  return (
    <article className='card__image'>
        <img src={image.url} alt={image.name}></img>
    </article>
  )
}

export default ImageBox