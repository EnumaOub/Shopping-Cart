import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Home() {
    let push = useNavigate();

    return (
        <div id="home">
            <Header 
            name ="Welcome to Shop"
            >
            </Header>

            <NavBar>

            </NavBar>

            <div id="enter">
                <button id="enter-shop"
                onClick={() => push("/shop")}
                >
                    Enter the Shop
                </button>
            </div>

            <div id="best-seller">

            </div>

            <div id="reviews"></div>

            <Footer></Footer>
        </div>

    );
}