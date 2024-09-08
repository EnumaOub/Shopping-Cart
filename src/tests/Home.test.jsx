import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Home from '../routes/Home';

const mockedUseNavigate = vi.fn();
const mockedUseNavLink = vi.fn();
const mockedUseLink = vi.fn();

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    useNavigate: () => mockedUseNavigate,
    NavLink: () => mockedUseNavLink,
    Link: () => mockedUseLink,
  };
});

beforeEach(() => {
  // clear the mock to avoid side effects and start the count with 0 for every test
  vi.clearAllMocks();
});


describe("HomePage", () => {
  it('should renders home page ', () => {
    render(
        <Home />
    );
  });

    it("Find Button and click", async () => {

      render(
          <Home />
      );

        const button = screen.getByText(/Enter the Shop/i);


        expect(button).toBeInTheDocument();

        fireEvent.click(button)
        expect(mockedUseNavigate).toBeCalled()

    });



})