import styled from 'styled-components';

const reviews = [
    { id: 1, author: "Gandalf the Grey", content: "A fine selection of mystical items. Highly recommend the potions!", rating: 5 },
    { id: 2, author: "Frodo Baggins", content: "The enchanted rings here are truly one of a kind.", rating: 4 },
    { id: 3, author: "Daenerys Targaryen", content: "The dragon eggs are exquisite. Would buy again!", rating: 5 },
    { id: 4, author: "Hermione Granger", content: "The spell books are well organized and very informative.", rating: 4 },
    { id: 5, author: "Aragorn", content: "Weapons are of excellent quality, perfect for any ranger.", rating: 5 }
  ];

export default function ReviewList() {
    return (
        <ReviewsContainer id='review'>
          {reviews.map((review) => (
            <ReviewItem key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
              <p>Rating: {review.rating}/5</p>
            </ReviewItem>
          ))}
        </ReviewsContainer>
      );
};

const ReviewsContainer = styled.div`
  margin: 40px 0;
  padding: 20px;
  background-color: #f8f4ea;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

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
