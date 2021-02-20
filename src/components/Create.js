import React, {useContext, useState} from 'react'
import axios from 'axios'
import PersonsContext from '../context/persons/PersonsContext'

function Create() {

    const {addPerson } = useContext(PersonsContext)

    const [profile, setProfile] = useState({
        name: '',
        company: '',
        age: ''
    })

    const [status, setStatus] = useState(0)

    function onChangeName(e) {
        setProfile(
        {
            ...profile,
            name: e.target.value
        })
    }


    const onChangeCompany = (e) => {
        setProfile(
            {
                ...profile,
                company: e.target.value
            }
        )
    }

    const onChangeAge = (e) => {
        setProfile(
            {
                ...profile,
                age: e.target.value
            }
        )
        console.log(profile)
    } 

    const onSubmit = (e) => {
        e.preventDefault()
        if(profile.name.trim() == "" || profile.company.trim() == ""|| profile.age.trim() == "")
        {
            alert("Please complete the information.")
            return
        }

        const person = {
            name: profile.name,
            company: profile.company,
            age: profile.age
        }
        

        // if(addPerson(person)){
        //     setStatus(1)
        // }
        addPerson(person)

        setProfile({
            name: '',
            company: '',
            age: ''
        })
        
    }
    return (
        <div className="create-table">
            <h3>ADD New Business</h3>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label>Add Person Name: </label>
                    <input value={profile.name} type="text" className="form-control" onChange={onChangeName}/>
                </div>
                <div class="form-group">
                    <label>Add Company Name: </label>
                    <input value={profile.company} type="text" className="form-control" onChange={onChangeCompany}/>
                </div>
                <div class="form-group">
                    <label>Add Age</label>
                    <input value={profile.age} type="text" className="form-control" onChange={onChangeAge}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
            {status === 1 ? 
            <p style={{color: 'blue', backgroundColor: '#FFF', borderLeftWidth: 1}}>Successfully Adding !!</p>
            :
            ""}
        </div>
    )
}

export default Create
