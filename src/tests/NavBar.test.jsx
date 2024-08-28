import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "../components/NavBar";

beforeEach(() => {
    // clear the mock to avoid side effects and start the count with 0 for every test
    vi.clearAllMocks();
});

describe('NavBar', () => {
    it('renders Home, Shop, and Cart links', () => {
      render(
        <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      );
  
      const homeLink = screen.getByText(/Home/i);
      const shopLink = screen.getByText(/Shop/i);
      const cartLink = screen.getByText(/Cart/i);
  
      expect(homeLink).toBeInTheDocument();
      expect(shopLink).toBeInTheDocument();
      expect(cartLink).toBeInTheDocument();
    });

    it('has correct href attributes', () => {
        render(
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        );
    
        const homeLink = screen.getByText(/Home/i);
        const shopLink = screen.getByText(/Shop/i);
        const cartLink = screen.getByText(/Cart/i);
    
        expect(homeLink.closest('a')).toHaveAttribute('href', '/');
        expect(shopLink.closest('a')).toHaveAttribute('href', '/shop');
        expect(cartLink.closest('a')).toHaveAttribute('href', '/cart');
      });
    
      it('applies active class to the correct link when navigated', () => {
        render(
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        );
    
        const homeLink = screen.getByText(/Home/i);
        const shopLink = screen.getByText(/Shop/i);
        const cartLink = screen.getByText(/Cart/i);
    
        // Simulate navigation by checking the presence of the "active" class
        expect(homeLink).toHaveClass('active');
        expect(shopLink).not.toHaveClass('active');
        expect(cartLink).not.toHaveClass('active');
      });
  

  });