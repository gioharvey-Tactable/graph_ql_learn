// For one Student

import React, { useState } from "react"
import Card from "./card"

const StudentComponent = (props:any):JSX.Element => {
    return (
        <Card {...props}/>
    )
}

export default StudentComponent