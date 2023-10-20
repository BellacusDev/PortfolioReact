import React from 'react';
import styled from 'styled-components';

/* material ui */
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const LinkContact = styled.a`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  font-size: 2rem;
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;

const FacebookIconStyled = styled(FacebookIcon)`
  color: white;
  font-size: 30px;
  margin-right: 2px;
  margin-top: -3px;
`;

const GitHubIconStyled = styled(GitHubIcon)`
  color: white;
  font-size: 30px;
  margin-right: 2px;
  margin-top: -3px;
  padding-left: 20px;
`;


const SocialMediaComponents = () => {
  return (
    <DivStyled>
        <FacebookIconStyled sx={{ fontSize: 50 }}/>
        <LinkContact href='https://www.facebook.com/BellacusDev'>Facebook</LinkContact>
        <GitHubIconStyled sx={{ fontSize: 50 }}/>
        <LinkContact href='https://github.com/BellacusDev'>GitHub</LinkContact>
    </DivStyled>
  );
}

export default SocialMediaComponents;
