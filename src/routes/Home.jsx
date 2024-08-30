
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewList from "../components/ReviewList";

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
        <div id="home">
            <Header 
            name = "Mystic Emporium"
            tagline = "Your Gateway to Enchanted Artifacts"
            >
            </Header>

            

            <div id="enter">
                <button id="enter-shop"
                onClick={() => push("/shop")}
                >
                    Enter the Shop
                </button>
            </div>

            <div id="best-seller">

            </div>
            <ReviewsContainer id='review'>
                {reviews.map((review) => (
                <ReviewList key={review.id}
                    author={review.author}
                    content={review.content}
                    rating={review.rating}
                >
                </ReviewList>
                ))}
          </ReviewsContainer>

            <Footer />
        </div>

    );
}

const ReviewsContainer = styled.div`
  margin: 40px 0;
  padding: 20px;
  background-color: #f8f4ea;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
