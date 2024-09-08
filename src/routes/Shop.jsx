import { CardProduct } from "../components/CardProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";
import initItems from '../assets/initItems.json';
import {
    Outlet,
    Link,
    NavLink,
    useLoaderData,
} from "react-router-dom";

export function loader() {
    const products = initItems;
    return { products };
}


export function Shop() {
    const { products } = useLoaderData();
    return (
        <div id="shop">
            <Header 
            name = "Welcome to SHOP"
            >
            </Header>

            <nav>
                {products.length ? (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <NavLink
                                    to={`shop/product/${product.id}`}
                                    className={({ isActive, isPending }) =>
                                                isActive
                                                ? "active"
                                                : isPending
                                                ? "pending"
                                                : ""        
                                    }
                                >
                                    {product.name ? (
                                        <>
                                            {product.name}
                                        </>
                                    ) : (
                                        <i>No Name</i>
                                    )}{" "}
                                    {product.rating / 5}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        <i>No products</i>
                    </p>
                )}
            </nav>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}