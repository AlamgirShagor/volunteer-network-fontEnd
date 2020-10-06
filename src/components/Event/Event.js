import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import img from '../../logos/extraVolunteer.png'
import './Event.css'

const Event = () => {
    const [loggedInUser] = useContext(UserContext);
    const [resData, setResData] = useState([]);
    useEffect(() => {
    fetch('https://radiant-anchorage-36268.herokuapp.com/resItems?email='+loggedInUser.email)
          .then(res => res.json())
          .then(data => setResData(data));
        }, [])  
        // const deleteItem = (id) =>{
        //     fetch('http://localhost:5000/delete/'+{id},{
        //         method: 'DELETE'
        //     })
        //     .then(res => res.json())
        //     .then(result =>{
        //         console.lg('deleted')
        //     })
        // }
    return (
        <div className="container">
            <Header></Header>
            <div className="row ">
                {
                    resData.map( res => <div className="col-6">
                        <div className="m-3 ">
                            <div className="row bg-light p-3">
                                <div className="col-4">
                                   <img src={img} alt="" srcset=""/>
                                </div>
                                <div className="col-8 text-left">
                                    <h6>{res.titel}</h6>
                                    <h6>{res.date}</h6>
                                    <button className="btn btn-light">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
     );
};

export default Event;