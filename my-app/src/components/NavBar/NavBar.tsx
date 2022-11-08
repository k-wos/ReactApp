import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
    margin: 0 auto;
    background-color: #343e43;
    position: relative;
    text-align: center;
    width:100%;
    
    
`;
const NavLink = styled(Link)`
    color: #808080;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    &:hover{
        color:red;
    }

`;
 
const NavBar = () => {
    return(
        <Menu>
            <NavLink to="posts"> Posts </NavLink>
            <NavLink to="profile"> Profile </NavLink>
            <NavLink to="photos">Photos</NavLink>
            <NavLink to="comments">Comments</NavLink>
            <NavLink to="/"> Home </NavLink>
        </Menu>
    );
};

export default NavBar;