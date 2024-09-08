import styled from 'styled-components';

export function ErrorPageProd() {
    return (
        <StyledNoProductsError>
            <h1>No Products Available</h1>
            <p>We're sorry, but there are currently no products in this category.</p>
        </StyledNoProductsError>
    );
};

const StyledNoProductsError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  text-align: center;
  background-color: #f8f4ea;
  color: #333;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }
`;
