import React from 'react'

const Musicians = (props) => {
  const musicians = props.fields
  const title = props.primary.title
  return (
    <>
      <h2>{title}</h2>
      {musicians.map(m => (
        <>
          <img src={m.musician_image.url} alt={m.musician_image.alt} />
          <h3>{m.musician_name}</h3>
          <p>{m.musician_function}</p>
        </>
      ))}
    </>
  )
}

export default Musicians
