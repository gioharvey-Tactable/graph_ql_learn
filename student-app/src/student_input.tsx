import React, {useState, useEffect} from "react"
import axios from 'axios'

const StudentInput = ():JSX.Element => {
    const default_data:any = {"firstName":"", "lastName":"", "collegeId":"", "email":"", "password":""}
    const endpoint:string = "http://localhost:9000/graphql"

    const [input, setInput] = useState(default_data)
    
    const formSubmit = async():Promise<void> => {
        //Note need to include the proper types
        const update_query:{} = {query: `mutation AddStudent($signUpNewStud: SignUpStudent!) {
            signUp(new_stud: $signUpNewStud)
            }`,
            variables:{
                "signUpNewStud":input,
            }
        }
        const response = await axios.post(endpoint, update_query)
        if (response.status === 200){
            setInput(default_data)
        }
        else{
            throw new Error("Failed Add")
        }

    }
    
    const formChange = (e:any):void => {
        const target_id:string = e.target.id
        const target_val:string = e.target.value
        const updateInput:any = {...input}
        updateInput[target_id] = target_val
        setInput(updateInput)
    }

    useEffect(() => {
        console.log("Submitted Value: ", input)
    }, [input])


    return (
        <>
            <form onChange={formChange}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" value={input['firstName']}/>

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" value={input['lastName']}/>

                <label htmlFor="collegeId">College</label>
                <select id="collegeId">
                    <option value="col-101">AMU</option>
                    <option value="col-102">CUSAT</option>
                </select>
                <br/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={input['email']}/>

                <label htmlFor="pass">Password</label>
                <input id="password" type="password" value={input['password']}/>

                <button type="button" onClick={formSubmit}>Add Student</button>
            </form>
        </>
    )
}

export default StudentInput