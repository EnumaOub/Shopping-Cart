
import { useNavigate } from "react-router-dom";
import styled , { keyframes } from 'styled-components';
import ReviewList from "../components/ReviewList";
import background from '../assets/image/entry-shop.jpeg'

const reviews = [
    { id: 1, author: "Zorian Kazinski", content: "A fine selection of mystical items. Highly recommend the potions!", rating: 5 },
    { id: 2, author: "Frodo Baggins", content: "The enchanted rings here are truly one of a kind.", rating: 4 },
    { id: 3, author: "Daenerys Targaryen", content: "The dragon eggs are exquisite. Would buy again!", rating: 5 },
    { id: 4, author: "Hermione Granger", content: "The spell books are well organized and very informative.", rating: 4 },
    { id: 5, author: "Yerin Arelius", content: "Weapons are of excellent quality, perfect for any swordwoman.", rating: 5 }
  ];


export default function Home() {
    let push = useNavigate();

    return (
        <HomeWrapper>
            <HomeContainer>
                <ContentWrapper>
                    <Title>Welcome to Mystic Emporium</Title>
                    <Subtitle>Your one-stop shop for all magical needs</Subtitle>
                    <ShopButton id="enter-shop"
                        onClick={() => push("/shop")}
                    >
                        Enter the Shop
                    </ShopButton>
                </ContentWrapper>

                <div id="best-seller">

                </div>

                <ReviewsSection>
                    <SectionTitle>What Our Customers Say</SectionTitle>
                    {reviews.map((review) => (
                    <ReviewCard key={review.id}>
                        <ReviewContent>{review.content}</ReviewContent>
                        <ReviewAuthor>— {review.author}</ReviewAuthor>
                        <ReviewRating>Rating: {review.rating}/5</ReviewRating>
                    </ReviewCard>
                    ))}
                </ReviewsSection>
            </HomeContainer>
          </HomeWrapper>

    );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 100px; 
  padding-bottom: 60px; 
  justify-content: center; 
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const HomeContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  text-align: center;
`;


const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'MedievalSharp', cursive;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #f39c12;
  margin-bottom: 40px;
  font-family: 'Cinzel', serif;
`;


const ShopButton = styled.button`
  padding: 15px 30px;
  background-color: #f39c12;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #e67e22;
    transform: translateY(-5px);
  }
`;

const ReviewsSection = styled.div`
  margin-top: 40px;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 15px;
  animation: ${fadeIn} 1.5s ease-in-out;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Cinzel', serif;
  color: #333;
`;

const ReviewCard = styled.div`
  background-color: #f8f4ea;
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ReviewContent = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
`;

const ReviewRating = styled.p`
  font-size: 1rem;
  color: #f39c12;
`;

const FloatingImage1 = styled.img`
  position: absolute;
  width: 150px;
  border-radius: 50%;
  top: 10%;
  left: 10%;
  animation: ${fadeIn} 2s ease-in-out;
`;

const FloatingImage2 = styled.img`
  position: absolute;
  width: 150px;
  border-radius: 50%;
  bottom: 15%;
  right: 15%;
  animation: ${fadeIn} 2s ease-in-out;
`;
