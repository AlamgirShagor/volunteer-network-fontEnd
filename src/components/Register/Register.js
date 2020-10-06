import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css'
import logo from '../../logos/Group 1329.png'
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
const Register = () => {
    const { titel } = useParams();
    let history = useHistory();
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        
          fetch('https://radiant-anchorage-36268.herokuapp.com/addRegister', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
            history.push('/event')
          })
    
        };
    return (
        <div className="container">
            <div className="row  bg-light py-4">
                <img className="logo mx-auto" src={logo} alt=""/>
            </div>
            <div className="row ">
                <div className="col-5 mx-auto reg-form p-5">
                    <h5 className="pb-3">Register as a Volunteer</h5>
                    <form className="ship-form" action="http://localhost:3000/event" method= 'POST' onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control mb-2" name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        
                        <input className="form-control mb-2" name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
                        
                        <input className="form-control mb-2" type="date" ref={register({ required: true })} name="date" />
                        <input className="form-control mb-2" name="Desicription" ref={register({ required: true })}  placeholder="Desicription"/>
                        <input className="form-control mb-2" name="titel" defaultValue={titel} ref={register({ required: true })}   placeholder="Organize books at the libray"/>
                    
                        <input type="submit" className="btn btn-block btn-primary" value="Registration" />
                        </form>
                </div></div>
            </div>
    );
};

export default Register;