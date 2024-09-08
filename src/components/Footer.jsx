import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { Dialog } from './Dialog';
import { About } from './About';
import { Privacy } from './Privacy';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };
    
    return (
        <>
      <StyledFooter>
        <FooterContent>
          <p>&copy; 2024 Mystic Emporium. All rights reserved.</p>
          <p>
            <FooterLink href="https://github.com/EnumaOub" target="_blank">GitHub</FooterLink>
          </p>
          <p>
            <ModalButton as="button" onClick={() => openModal(<About />)}>About Us</ModalButton> | 
            <ModalButton as="button" onClick={() => openModal(<Privacy />)}>Privacy Policy</ModalButton>
          </p>
        </FooterContent>
      </StyledFooter>

      <Dialog isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Dialog>
    </>
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

const ModalButton = styled.button`
  background: none;
  border: none;
  color: #f39c12;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &:focus {
    outline: 2px solid #f39c12;
    outline-offset: 4px;
  }

  &:active {
    transform: scale(0.98); /* Slightly reduce size when clicked for a tactile effect */
  }
`;

const StyledLink = styled(Link)`
  color: #f39c12;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
