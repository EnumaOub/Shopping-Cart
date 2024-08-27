import {MemoryRouter} from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import Home from '../routes/Home';

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

beforeEach(() => {
    render(
        <Home />
    )
})

describe("HomePage", () => {
    it("Find Button and click", async () => {

        const button = screen.getByText(/Enter the Shop/i);


        expect(button).toBeInTheDocument();

        fireEvent.click(button)
        expect(mockedUseNavigate).toBeCalled()

    });



})