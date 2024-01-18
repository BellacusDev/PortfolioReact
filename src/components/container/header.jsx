import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import yoImagen from '../../media/yo.jpg'

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: rgb(50,50,50);
  color: #fff;
  padding: 0px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const HeaderImage = styled.img`
  width: 100px;
  margin-right: 80px;
  @media (max-width: 972px) {
    width: 180px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 20px;
  padding: 0;
  display: flex;
  margin-left: auto;
  margin-right: 100px;

  @media (max-width: 972px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;
`;

const NavItem = styled.li` 
  
  @media (max-width: 972px) {
    margin-bottom: 5px;
  }
  
`;

const NavLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  padding: 30px 30px;
  &:hover {
      background: #45567d;
    } 

  @media (max-width: 972px) {
      margin-right: 0px;
      padding: 8px;
  }
`;

const Header = ({ links }) => {
  return (
    <HeaderWrapper>
        <HeaderImage src={yoImagen} alt="Mi Imagen" />
        <NavList>
          {links.map((link) => (
              <NavItem key={link.id}>
                <NavLink to={link.url}>{link.text}</NavLink>
              </NavItem>
          ))}    
        </NavList>
    </HeaderWrapper>
  );
};

export default Header;
