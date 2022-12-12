import React, { useState } from "react";
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

//사용자가 이름과 나이를 입력할 수 있게 하는 창과 그 모든것을 확인하는 버튼
const AddUser = (props) => {
  
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title : 'Invalid input',
            message : "Please enter a valid name and age (non-emprt values)."
        })
        return;
    }
    if(+enteredAge < 1) {
        setError({
            title : 'Invalid age',
            message : "Please enter a valid age(>0)."
        })
        return;
    }

    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
       {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} /> } 
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"  value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
            </form>
        </Card>
    </div>

  );
};

export default AddUser;
