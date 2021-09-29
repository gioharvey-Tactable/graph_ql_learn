import React from "react"
import "./card.css"

const imageStyle = {
    width:"100%",
}

const CardComponent = ({id, fullName, email, college}:any):JSX.Element => {
    return (
            <div className ="card">
                <img src ="https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png" alt={id} style={imageStyle}/>
                <div className="container">
                    <h4><b>{fullName}</b></h4>
                    <p>{college}</p>
                    <p>{email}</p>
                    <div className="center_elements">
                        <button>More Info</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default CardComponent