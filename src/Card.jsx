import React from 'react'

const Card = (props) => {
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignContent:'space-evenly', borderRadius:'5px', width:'150px', height:'auto',backgroundColor:'white', boxShadow:'2px 2px 0px #eee' }}>
        <h3>{props.title}</h3>
        <p>{props.value}</p>
    </div>
  )
}

export default Card