import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let push = useNavigate();

    return (
        <div id="home">
            <header>

            </header>

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

            <footer>

            </footer>
        </div>

    );
}