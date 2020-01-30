import React, {useState} from "react";
import styled from "styled-components";

const Header = styled.form`
    width: 100%;
    border: 1px solid black;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;

const Child = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;

const Button = styled.button`
    border-radius: 20px;
    &:hover{
        background: lightgrey;
        border-radius: 20px;
        border: 1px solid grey;
    }
`;

const Form = (props) => {
    // console.log(`This is props from the Form.js`, props);
    const [input, setInput] = useState({
        name: "",
        email: "",
        role: "",
        id: null
    });
    
    const inputHandler = event => {
        console.log("target name", event.target.name);
        console.log("value", event.target.value);
        setInput({...input, [event.target.name]: event.target.value });
    };

    const submitHandler = event => {
        event.preventDefault();
        props.add({...input, id: Date.now() })
        setInput({ name: "", email: "", role: "" });
    }
    console.log("props", props);
    console.log("member", input);

    return (
        <Header onSubmit={submitHandler}>
            <h1>My Team</h1>
            <Child>
                <label htmlFor="name">Name: {""}
                    <input 
                        id= "name"
                        type= "text"
                        name= "name"
                        onChange= {inputHandler}
                        value={input.name}
                    />
                </label>
                <label htmlFor="email">Email: {""}
                    <input 
                        id= "email"
                        type= "email"
                        name= "email"
                        onChange= {inputHandler}
                        value={input.email}
                    />
                </label>
                <label htmlFor="role">Role: {""}
                    <input 
                        id= "role"
                        type= "text"
                        name= "role"
                        onChange= {inputHandler}
                        value={input.role}
                    />
                </label>
                <Button type="submit">Add a team member</Button>
            </Child>
        </Header>
    );
}


export default Form;