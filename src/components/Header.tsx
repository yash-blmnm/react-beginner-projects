import React from 'react';
import styled from 'styled-components';

type HeaderProps = {
    projectName: string
};

const Heading = styled.h1`
    flex-grow: 0.9;
    text-align: center;
`

const Header:React.FC<HeaderProps> = ({ projectName }) => {
    
    return <header>
    <div className='flex-row items-center content-center'>
      <Heading>{projectName}</Heading>
      <a href='/'>Home</a>
    </div>
  </header>
}
export default Header;