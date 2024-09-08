import {
    Outlet,
    NavLink,
    useLoaderData,
} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Root() {
    return (
        <div id="root">
            <Header 
            name = "Mystic Emporium"
            tagline = "Your Gateway to Enchanted Artifacts"
            >
            </Header>
            <div id="main-info">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}