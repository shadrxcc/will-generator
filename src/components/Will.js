import React from 'react';
import { useSelector } from 'react-redux';
//import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";
//import { createWill } from '../actions';
//import PropTypes from 'prop-types';
//import './styles/progress.css'
//import { Progress } from './Progress';
//import { Session } from './Session';
//import { useSelector } from 'react-redux';

const Will = (state) => {
  const [ formstate ] = useSelector((state) => state.willReducer)
  console.log(formstate) 
  const { state: will } = formstate
  return (
    <div className="mt-5">
      <div className="form-details px-3">
        <h2 className="text-center font-bold fs-1">Your Will</h2>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>First Name:</strong> {will.firstname}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Last Name:</strong> {will.lastname}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Beneficiary 1:</strong> {will.beneficiary1}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Beneficiary 2:</strong> {will.beneficiary2}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Beneficiary 3:</strong> {will.beneficiary3}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Beneficiary 4:</strong> {will.beneficiary4}
          </h4>
        </div>
        <div className="bg-light py-4 my-4">
          <h4 className="px-2">
            <strong>Possessions:</strong> {will.possessions}
          </h4>
        </div>
        <Link to="/">
          <Button className="bg-danger w-100 text-white px-5 py-3 rounded p-2">
            Return
          </Button>
        </Link>
      </div>
    </div>
  );
};



export default Will;
