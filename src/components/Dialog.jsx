import styled from 'styled-components';

export function Dialog({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    text-align: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    width: 5rem;
`;