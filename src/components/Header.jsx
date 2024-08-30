import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavBar } from "../components/NavBar";

export default function Header({ name, tagline='' }) {
    return (
        <StyledHeader>
            <LogoContainer>
                <Logo>{name}</Logo>
                {tagline && <Tagline>{tagline}</Tagline>}
            </LogoContainer>
            <NavBar /> 
        </StyledHeader>
      );
};

Header.propTypes = {
    name: PropTypes.string,  
    tagline: PropTypes.string,    
};
  
    
const StyledHeader = styled.header`
      background-color: #333;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
`;
    
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  font-family: 'MedievalSharp', cursive;
  font-size: 2rem;
  color: #f39c12;
`;

const Tagline = styled.p`
  font-family: 'MedievalSharp', cursive;
  font-size: 1rem;
  color: #ccc;
  margin-top: 4px;
`;