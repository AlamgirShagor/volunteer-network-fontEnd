import React, { useEffect, useState } from 'react';
import './Admin.css';
import logo from '../../logos/Group 1329.png';

const Admin = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://radiant-anchorage-36268.herokuapp.com/userData')
          .then(res => res.json())
          .then(data => setUserData(data));
    }, [])
    console.log(userData);
    return (
        <div className="container">
           <div className="row">
                <div className="col-3">
                <img className="logo mt-3 mb-5" src={logo} alt=""/>
                
                <button  className="text-primary btn ">Volunteer register list</button>
                <br/>
                <button className=" btn ">add Event</button>
                </div> 
                <div className="col-9">
                    <h4 className="mt-4">Volunteer register list</h4>
                    <div>
                    <table class="table table-sm table-light border">
                    <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email import</th>
                            <th scope="col">Registaion date</th>
                            <th scope="col">Volunteer list</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                    userData.map( help =>
                        <tr className="my-1 bg-light">
                        <th>{help.name}</th>
                        <td>{help.email}</td>
                        <td>{help.date }</td>
                        <td>{help.titel}</td>
                        </tr>
                    )
                }
                    </tbody>
                    </table>
                    </div>
                 </div>  
            </div> 
        </div>
    );
};

export default Admin;