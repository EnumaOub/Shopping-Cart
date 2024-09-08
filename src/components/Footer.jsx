import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Footer() {
    return (
        <StyledFooter>
            <FooterContent>
                <p>&copy; 2024 Mystic Emporium. All rights reserved.</p>
                <p>
                    Check out our code on
                    <FooterLink href="https://github.com/your-github-account" target="_blank"> GitHub</FooterLink>
                </p>
                <p>
                    <StyledLink to="/about">About Us</StyledLink> |
                    <StyledLink to="/privacy">Privacy Policy</StyledLink>
                </p>
            </FooterContent>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #333;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1rem;
`;

const FooterLink = styled.a`
  color: #f39c12;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  color: #f39c12;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
