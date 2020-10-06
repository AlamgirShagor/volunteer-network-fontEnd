import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpItem.css'
const HelpItem = () => {
    const [helpData, setHelpData] = useState([]);
    useEffect(() => {
            fetch('https://radiant-anchorage-36268.herokuapp.com/helpItem')
          .then(res => res.json())
          .then(data => setHelpData(data));
    }, [])
    return (
        
        
        <div className="container">
            <div className="row">
                {
                    helpData.map( help => <div className="col-3">
                            <Link to={"/register/" + help.titel}>
                                        <div>
                                            <div className="card m-3">
                                                <img src={help.image} className="card-img-top" alt=""></img>
                                                <div class="card-body d-flex align-items-center justify-content-center">
                                                    <h6>{help.titel}</h6>
                                                </div>
                                            </div>
                                        </div>
                             </Link>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default HelpItem;
