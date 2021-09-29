// For all the Students
import React, { useState, useEffect } from "react"
import axios from 'axios'
// import { query } from "express"
import Student from "./student"

const StudentsComponent = ():JSX.Element => {
    const endpoint:string = "http://localhost:9000/graphql"
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

    const [students, setStudents] = useState([])
    
    const deleteStudent = async (id:string) => {
        const delete_query:any = { query: `mutation doDelete($Id: String!){
            deleteStudentById(id: $Id)
          }`,
          variables:{
            "Id":id
          }
        } //For the post to work in mutation you need to add the extra data
        const response:any = (await axios.post(endpoint, delete_query)).data
        const retrive_data:any = (await axios.post(endpoint, query)).data
        const filter_null = retrive_data.data['students'].filter((x:any) => x != null )
        setStudents(filter_null)
        return response['data']['deleteStudentById']
    }

    const getStudents = async():Promise<void> => {
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
                    return <Student key={student.id} delete_stud={deleteStudent} {...student}/>
                })
            }
        </div>
    )
}

export default StudentsComponent