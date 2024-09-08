import styled from 'styled-components';

export function Privacy() {
    return (
        <StyledPrivacy>
            <h1>Privacy Policy</h1>
            <p>
                Welcome to Mystic Emporium's privacy policy page. This page outlines how we handle
                your personal information when you visit or make a purchase from our website.
            </p>
            <SectionTitle>1. Information We Collect</SectionTitle>
            <p>
                When you visit our site, we collect no information about your device.
            </p>

            <p>
                If you have any questions or concerns, please contact us.
            </p>
        </StyledPrivacy>
    );
};


const StyledPrivacy = styled.div`
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    text-align: left;
    background-color: #f8f4ea;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        font-family: 'MedievalSharp', cursive;
        color: #333;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 15px;
        line-height: 1.6;
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-top: 20px;
`;