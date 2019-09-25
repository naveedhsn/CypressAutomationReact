import React, {Dispatch, SetStateAction, useContext} from 'react';
import styled from 'styled-components';
import {AuthContext} from '../../contexts/auth';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', Courier, monospace;
    background-color:  rgba(247, 247,247, 0.4);
    width: 40%;
    height: 85%;
`;

const Input = styled.input`
    width: 90%;
    height: 8%;
    text-align: center;
    border-radius: 15px;
    font-family: 'Courier New', Courier, monospace;
    border: solid 2px #048ABF;
    padding: 15px;
    margin-bottom: 20px;
    transition: border-color 0.2s ease-in;
    :focus {
        outline: none;
        border-color: #F54458;
    }
`;

const Button = styled.button`
    background-color: #048ABF;
    border: none;
    margin-top: 5px;
    margin-bottom: 20px
    border-radius: 15px;
    width: 50%;
    height: 7%;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5em;
    font-weight: light;
    color: white;
    transition: background-color 0.1s ease-in;
    outline:none;
    :active {
        outline: none;
        background-color: #F54458;
    }

`;

type LoginProps = {
    setLoggedInUser: Dispatch<SetStateAction<string | null>>,
}


export default () => {

    const [username, setUsername] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);
    const {login} = useContext(AuthContext);

    return(
    <LoginContainer>
        <Input placeholder="Enter Username" onChange={(e: any) => {setUsername(e.target.value)}}/>
        <Input placeholder="password" onChange={(e: any) => {setPassword(e.target.value)}}/>
        <Button onClick={() => login(username, password)}>LOGIN</Button>
        <div>If you do not have an account, contact an admin</div>
    </LoginContainer>)
}
