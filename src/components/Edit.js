import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import PersonsContext from '../context/persons/PersonsContext'
function Edit(props) {
    const {editPerson, person, updatePerson} = useContext(PersonsContext)
    const [profile, setProfile] = useState({
        name: '',
        company: '',
        age: ''
    })
    React.useEffect(() => {
        console.log("zo useeffect")
        async function loadPerson (){
            await editPerson(props.match.params.id)
        }
        loadPerson()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log("profile", profile)
    React.useEffect(() => {
        if(person){
            setProfile(person)
        }
        console.log("thay doi person miet")
    }, [person])

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
        const obj = {
            _id: props.match.params.id,
            name: profile.name,
            company: profile.company,
            age: profile.age
        }
        
        // axios.post('http://localhost:3001/persons/update/' + props.match.params.id, obj)
        // .then(res => {        })
        // .catch(err => {
        //     alert(err)
        // })
        updatePerson(obj)
        props.history.push('/index')
    }
    
    return (
        <div>
            <h3>ADD New Business</h3>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label>Add Person Name: </label>
                    <input  value = {profile.name} type="text" className="form-control" onChange={onChangeName}/>
                </div>
                <div class="form-group">
                    <label>Add Company Name: </label>
                    <input value = {profile.company} type="text" className="form-control" onChange={onChangeCompany}/>
                </div>
                <div class="form-group">
                    <label>Add Age</label>
                    <input value={profile.age}  type="text" className="form-control" onChange={onChangeAge}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Person" className="btn btn-primary"/>
                </div>
            </form>
        </div>

    )}



export default Edit
