import { NavBar } from "../components/NavBar";

export default function Header({ name, tagline }) {
    return (
        <header>
            <h1 className="title">
                {name}
            </h1>
            <h3 className="tagline">
                {tagline}
            </h3>
            <NavBar></NavBar>
        </header>
    )
}