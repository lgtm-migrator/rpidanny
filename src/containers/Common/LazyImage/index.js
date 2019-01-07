import React from 'react'
import LazyLoad from 'react-lazyload'

import './styles.css'

const style = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative'
}

const imgStyle = {
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
}

const LazyImage = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left
}) => {
  if (direction === 'column') {
    style.position = 'absolute'
    style.left = left
    style.top = top
  }
  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...style }}
      className='lazy-image'
    >
      <LazyLoad>
        <img
          style={
            { ...imgStyle }
          }
          {...photo}
          onClick={e => onClick(e, { index, photo })}
          alt={photo.alt}
        />
      </LazyLoad>
    </div>
  )
}

export default LazyImage
