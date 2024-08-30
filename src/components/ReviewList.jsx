import styled from 'styled-components';
import PropTypes from 'prop-types'; 


export default function ReviewList({ author, content, rating }) {
    return (
          <ReviewItem>
              <h3>{author}</h3>
              <p>{content}</p>
              <p>Rating: {rating}/5</p>
            </ReviewItem>
      );
};

ReviewList.propTypes = {
    author: PropTypes.string.isRequired,          
    content: PropTypes.string.isRequired,      
    rating: PropTypes.number.isRequired,
};

const ReviewItem = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 5px 0;
  }

  p:last-child {
    font-weight: bold;
    color: #f39c12;
  }
`;
