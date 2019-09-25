import styled, { createGlobalStyle } from 'styled-components';
import React, {useState, useContext} from 'react';
import Header from '../header';
import Account from '../account';
import Login from '../login';
import { AuthContext } from '../../contexts/auth';
import backgroundImage from '../../assets/bg1.jpg'
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column
    align-items: center;
    margin-top: 1%;
    height: 90vh;
    width: 100vw;
`;

const GlobalBackground = createGlobalStyle`
    body,html {
        padding: 0px;
        margin: 0px;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-image: url(${backgroundImage});
        background-position: center;
        background-size: cover;
        opacity: 0.45;
        z-index: -1;
    }
`;

export default () => {
    const {user} = useContext(AuthContext)
    if(user) {
        return(
            <StyledDiv>
                <GlobalBackground/>
                <Header/>
                <Account/>
            </StyledDiv>
        )
    } else {
        return(
            <StyledDiv>
                <GlobalBackground/>
                <Header/>
                <Login/>
            </StyledDiv>
        )
    }
}
