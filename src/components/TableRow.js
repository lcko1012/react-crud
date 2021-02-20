import axios from 'axios';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import PersonsContext from '../context/persons/PersonsContext'


function TableRow(props) {
    const {deletePerson} = useContext(PersonsContext)
    const deleteId = () => {
        if(window.confirm("are you really wanna delete it"))
        {
            // boundActions.deletePerson(props.obj._id)
            deletePerson(props.obj._id)
        }
        
    }
    return (
        <tr>
            {/* <th scope="row"></th> */}
            <td>{props.obj.name}</td>
            <td>{props.obj.company}</td>
            <td>{props.obj.age}</td>
            <td>
                <Link to={"/edit/"+props.obj._id}>
                    <button className="btn btn-primary">Edit</button>
                </Link>
                <button onClick={deleteId} className=" ml-2 btn btn-danger">Delete</button>
            </td>
        </tr>

    )
}

export default TableRow
