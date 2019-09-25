import React, {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import styled from 'styled-components';

const HeaderContainer: React.FC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    color: #048ABF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2em;
    height: 10%;
    width: 40%;
`;

interface HeaderProps {
    loggedInUser: string;
}

export default () => {

    const [siteName, _] = useState("qa.code-quiz.dev");
    const {user} = useContext(AuthContext);

    return(
        <HeaderContainer>
            <div>
            {
                user?
                    `Hello ${user.name}`
                    :
                    `${siteName}`
            }
            </div>
        </HeaderContainer>
    )
}
