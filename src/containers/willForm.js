import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { v4 as uuidv4 } from 'uuid';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { createWill } from '../actions';
//import { Link } from "react-router-dom"


const Willform = (props) => {

const dispatch = useDispatch()
const navigate = useNavigate()

  const [state, setState] = useState({
    firstname:'',
    lastname:'',
    beneficiary1:'',
    beneficiary2:'',
    beneficiary3:'',
    beneficiary4:'',
    possessions:''
  });
const will = {
      state,
      complete: false,
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/will', {state: {firstname:'',
    lastname:'',
    beneficiary1:'',
    beneficiary2:'',
    beneficiary3:'',
    beneficiary4:'',
    possessions:''}})
    dispatch(createWill(will));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='mt-5'>
      <h3 className='text-center'>Generate your will</h3>
    <Form className='px-3' onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          name="firstname"
          placeholder="First name"
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          name="lastname"
          placeholder="Last name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First Beneficiary"
          name="beneficiary1"
          placeholder="First Beneficiary"
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Second Beneficiary"
          name="beneficiary2"
          placeholder="Second Beneficiary"
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Third Beneficiary"
          name="beneficiary3"
          placeholder="Third Beneficiary"
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-fourth-beneficiary"
          control={Input}
          label="Fourth Beneficiary"
          name="beneficiary4"
          placeholder="Fourth Beneficiary"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Your Possessions"
        name="possessions"
        placeholder="Your Possessions"
        onChange={handleChange}
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
        className='w-100'
      />
      <Link to="/">
      <Button className='bg-danger w-100 text-white px-5 py-3 rounded p-2'>Return</Button></Link>
    </Form>
    </div>
  );
};

export default Willform;
