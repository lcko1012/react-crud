import React, {useReducer} from 'react'
import axios from "axios"
import PersonsContext from './PersonsContext'
import PersonsReducer from './PersonsReducer'

const PersonsState = (props) => {
    const initialState = {
        persons: null,
        person: null
    }

    const [state, dispatch] = useReducer(PersonsReducer, initialState)

    const getPersons = async () => {
        try
        {
            const res = await axios.get('http://localhost:3001/persons')

            dispatch({
                type: 'get_persons',
                payload: res.data
            })
        }catch(err){
            console.log(err)
        }
    }

    const deletePerson = async (id) => {
        try
        {
            await axios.get('http://localhost:3001/persons/delete/' + id)
            dispatch({type: 'delete_person', payload: id})
        }catch(err){

        }
    }

    const addPerson = async (person) => {
        try {
            const res = await axios.post('http://localhost:3001/persons/add', person)
            dispatch({type:'add_person', payload: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    const editPerson = async (id) => {
        try
        {
            const res = await axios.get('http://localhost:3001/persons/edit/'+ id)
            dispatch({type: 'edit_person', payload: res.data})
        }catch(err) {
        }
    }

    const updatePerson = async (person) => {
        try
        {
            const res = await axios.put('http://localhost:3001/persons/update/' + person._id, person)
            dispatch({type: 'update_person', payload: person})
        }catch(err){

        }
    }

    return(
        <PersonsContext.Provider
        value={{
            persons: state.persons,
            person: state.person,
            getPersons,
            deletePerson, 
            addPerson,
            editPerson,
            updatePerson
        }}>
            {props.children}
        </PersonsContext.Provider>
    )
}

export default PersonsState


