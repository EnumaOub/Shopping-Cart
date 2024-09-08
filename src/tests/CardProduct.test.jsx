import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CardProduct } from "../components/CardProduct";
import { useContext, useEffect } from "react";

import { CartProvider, CartContext } from "../components/CartProvider";

beforeEach(() => {
    vi.clearAllMocks();
  });

describe('CardProduct', () => {
  const product = {
    name: 'Enchanted Sword',
    imageUrl: 'https://example.com/sword.jpg',
    price: 50,
    description: 'A magical sword with enchanted powers.',
    rating: 4.5,
    isAvailable: true,
  };

  it('renders the product name, image, and price', () => {
    render(
        <CartProvider>
    <CardProduct {...product} />
    </CartProvider>
    );

    const nameElement = screen.getByText(/Enchanted Sword/i);
    const priceElement = screen.getByText(/50.00 G/i);
    const imageElement = screen.getByAltText(/Enchanted Sword/i);

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  it('renders the product description and rating', () => {
    render(
        <CartProvider>
    <CardProduct {...product} />
    </CartProvider>
    );

    const descriptionElement = screen.getByText(/A magical sword with enchanted powers./i);
    const ratingElement = screen.getByText(/Rating: 4.5\/5/i);

    expect(descriptionElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  it('disables the Add to Cart button when the product is unavailable', () => {
    render(
        <CartProvider>
    <CardProduct {...product} isAvailable={false} />
    </CartProvider>
);

    const buttonElement = screen.getByText(/Out of Stock/i);
    expect(buttonElement).toBeDisabled();
  });

});