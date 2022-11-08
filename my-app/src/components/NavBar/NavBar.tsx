import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
    margin: 0 auto;
    background-color: #13d6d6;
    //box-shadow: 0px 2px 10px rgba(0,0,0,0.15);
    position: sticky;
    text-align: center;
    width:100%;
    top:0;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
    
    
`;
const NavLink = styled(Link)`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;800;900&family=Rubik:wght@800&display=swap');
    text-decoration:none;
    font-weight:bold;
    font-size:1rem;
    color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
    padding: 1rem 2rem;
    transition: all .2s ease;
    font-family: 'Nunito', sans-serif;

    
    &:hover{
        color: #e30657;
        transform: translateY(-2rem);
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