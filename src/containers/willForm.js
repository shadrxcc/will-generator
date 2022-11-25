import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createWill } from '../actions';
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const Willform = () => {

  const dispatch = useDispatch();
  
  const [firstname, firstnameInput] = useState('');
  const [lastname, lastnameInput] = useState('');
  const [beneficiary1, firstbenInput] = useState('');
  const [beneficiary2, secondbenInput] = useState('');
  const [beneficiary3, thirdbenInput] = useState('');
  const [beneficiary4, fourthbenInput] = useState('');
  const [possessions, possessionsInput] = useState('');
  const handleChange = (e) => firstnameInput(e.target.value);
  const lasthandleChange = (e) => lastnameInput(e.target.value);
  const firstbenhandleChange = (e) => firstbenInput(e.target.value);
  const secbenhandleChange = (e) => secondbenInput(e.target.value);
  const thirdbenhandleChange = (e) => thirdbenInput(e.target.value);
  const fourthbenhandleChange = (e) => fourthbenInput(e.target.value);
  const posshandleChange = (e) => possessionsInput(e.target.value);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const will = {
      id: uuidv4(),
      firstname,
      lastname,
      beneficiary1,
      beneficiary2,
      beneficiary3,
      beneficiary4,
      possessions,
      complete: false,
    };
    dispatch(createWill(will));
    firstnameInput('');
    lastnameInput('');
    firstbenInput('');
    secondbenInput('');
    thirdbenInput('');
    fourthbenInput('');
    possessionsInput('');
  };

  return (
    <Form className='px-5' onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First name"
          value={firstname}
          placeholder="First name"
          onChange={handleChange}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last name"
          value={lastname}
          placeholder="Last name"
          onChange={lasthandleChange}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First Beneficiary"
          value={beneficiary1}
          placeholder="First Beneficiary"
          onChange={firstbenhandleChange}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Second Beneficiary"
          value={beneficiary2}
          placeholder="Second Beneficiary"
          onChange={secbenhandleChange}
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Third Beneficiary"
          value={beneficiary3}
          placeholder="Third Beneficiary"
          onChange={thirdbenhandleChange}
        />
        <Form.Field
          id="form-input-control-fourth-beneficiary"
          control={Input}
          label="Fourth Beneficiary"
          value={beneficiary4}
          placeholder="Fourth Beneficiary"
          onChange={fourthbenhandleChange}
        />
      </Form.Group>
      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Your Possessions"
        value={possessions}
        placeholder="Your Possessions"
        onChange={posshandleChange}
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
        className='w-100'
      />
    </Form>
  );
};

export default Willform;
