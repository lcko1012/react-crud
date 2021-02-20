import React, {useState, useContext} from 'react'
import TableRow from './TableRow'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {Context} from '../context/PersonContext'
import PersonsContext from '../context/persons/PersonsContext'
function Index() {
    // const {persons, boundActions} = useContext(Context)
    
    const {persons, getPersons, } = useContext(PersonsContext)
    // const [persons, setPersons] = useState([])

    React.useLayoutEffect(() => {
        getPersons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const tabRow = () => {
        console.log(persons)
        if(!persons){
            return []
        }
        return persons.map((object, i) => {
            return <TableRow obj={object} key={i}></TableRow>
        })
    }

    return (
        <div style={{marginTop: 20}}>
            <h3 align="center"> Persons List</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow()}
                </tbody>
            </table>
            <div className="container-button">
                <Link to={'/create'} >
                    <button  className="button-add">Them Nhan Vien</button>
                </Link>
            </div>
        </div>
    )
}

export default Index
