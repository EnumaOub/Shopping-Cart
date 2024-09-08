import styled from 'styled-components';

export default function About() {
    return (
        <StyledAbout>
            <h1>About Mystic Emporium</h1>
            <p>
                Welcome to Mystic Emporium, a one-stop shop for all your magical needs.
                We offer enchanted weapons, potions, and mystical artifacts for adventurers
                and wizards alike. Whether you're on a quest or simply looking for a rare
                magical item, our shop is here to provide.
            </p>
            <p>
                For more information or to explore our projects, check out our
                <GitHubLink href="https://github.com/EnumaOub" target="_blank"> GitHub</GitHubLink>.
            </p>
        </StyledAbout>
    );
};

// Styled components
const StyledAbout = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
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
  }
`;

const GitHubLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;