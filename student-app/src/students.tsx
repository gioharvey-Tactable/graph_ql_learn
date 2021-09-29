// For all the Students
import React, { useState, useEffect } from "react"
import axios from 'axios'
import { query } from "express"
import Student from "./student"

const StudentsComponent = ():JSX.Element => {
    const endpoint:string = "http://localhost:9000/graphql"

    const [students, setStudents] = useState([])
    
    
    const getStudents = async():Promise<void> => {
        const query = {query: `query GQL {
                    students {
                        id
                        firstName
                        lastName
                        email
                        password
                        collegeId
                        collegeId
                        fullName
                    }
                }`
            }
        
        const retrive_data:any = (await axios.post(endpoint, query)).data
        const filter_null = retrive_data.data['students'].filter((x:any) => x != null )
        setStudents(filter_null)
    }

    useEffect(() => {
        getStudents()
    }, [])
    
    return (
        <div className="cardContainer">
            {
                students.map((student:any) => {
                    return <Student key={student.id} {...student}/>
                })
            }
        </div>
    )
}

export default StudentsComponent