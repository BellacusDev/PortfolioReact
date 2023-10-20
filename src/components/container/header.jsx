import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: rgb(190,49,68);
  color: #fff;
  padding: 20px;
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
    width: 120px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
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

const NavLink = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
  padding: 45px 30px;
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
        <HeaderImage src={'yo.jpg'} alt="Mi Imagen" />
        <NavList>
          {links.map((link) => (
              <NavItem key={link.id}>
                <NavLink href={link.url}>{link.text}</NavLink>
              </NavItem>
          ))}    
        </NavList>
    </HeaderWrapper>
  );
};

export default Header;
