import React from 'react';
import { useLocation } from 'react-router-dom';
//import PropTypes from 'prop-types';
//import './styles/progress.css'
//import { Progress } from './Progress';
//import { Session } from './Session';
//import { useSelector } from 'react-redux';

const Will = () => {
  const location = useLocation()
  return (
    <div>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {location.state.firstname}
        </div>
        <div>
          <strong>Email:</strong> {location.state.lastname}
        </div>
        <div>
          <strong>City:</strong> {location.state.beneficiary1}
        </div>
        <div>
          <strong>Phone:</strong> {location.state.beneficiary2}
        </div>
        <div>
          <strong>Phone:</strong> {location.state.beneficiary3}
        </div>
        <div>
          <strong>Phone:</strong> {location.state.beneficiary4}
        </div>
        <div>
          <strong>Phone:</strong> {location.state.possessions}
        </div>
      </div>
    </div>
  );
};



export default Will;
