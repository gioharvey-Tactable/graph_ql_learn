import React from "react"

const StudentInput = ():JSX.Element => {
    return (
        <>
            <form>
                <label htmlFor="fname">First Name</label>
                <input id="fname" type="text"/>

                <label htmlFor="lname">Last Name</label>
                <input id="lname" type="text"/>

                <label htmlFor="colg">College</label>
                <select id="colg">
                    <option value="col-101">AMU</option>
                    <option value="col-102">CUSAT</option>
                </select>
                <br/>

                <label htmlFor="email">Email</label>
                <input id="email" type="email"/>

                <label htmlFor="pass">Password</label>
                <input id="pass" type="password"/>
            </form>
        </>
    )
}

export default StudentInput