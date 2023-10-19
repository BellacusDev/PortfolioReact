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
`;

const HeaderImage = styled.img`
  width: 80px;
  margin-right: 80px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-left: auto;
  margin-right: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
  }
`;

const NavItem = styled.li`
  margin-right: 30px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    
  }
  
`;

const NavLink = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderImage src={'yo.jpg'} alt="Mi Imagen" />
        <NavList>
          <NavItem>
            <NavLink href='#wellcome'>Bienvenida</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact'>Contacto</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Mi Trabajo</NavLink>
          </NavItem>
        </NavList>
    </HeaderWrapper>
  );
};

export default Header;
