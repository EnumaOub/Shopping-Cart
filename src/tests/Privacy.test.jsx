import { Privacy } from "../routes/Privacy.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


describe('Privacy Page', () => {
    it('renders the Privacy page without crashing', () => {
        render(<Privacy />);
    });

    it('displays the heading "Privacy Policy"', () => {
        render(<Privacy />);
        const heading = screen.getByText(/privacy policy/i);
        expect(heading).toBeInTheDocument();
    });

    it('displays the section "Information We Collect"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/Information We Collect/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    it('displays the section "How We Use Your Information"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/How We Use Your Information/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    it('displays the section "Cookies"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/Cookies/i);
        expect(sectionTitle).toBeInTheDocument();
    });
});
describe('Privacy Page', () => {
    it('renders the Privacy page without crashing', () => {
        render(<Privacy />);
    });

    it('displays the heading "Privacy Policy"', () => {
        render(<Privacy />);
        const heading = screen.getByText(/privacy policy/i);
        expect(heading).toBeInTheDocument();
    });

    it('displays the section "Information We Collect"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/Information We Collect/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    it('displays the section "How We Use Your Information"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/How We Use Your Information/i);
        expect(sectionTitle).toBeInTheDocument();
    });

    it('displays the section "Cookies"', () => {
        render(<Privacy />);
        const sectionTitle = screen.getByText(/Cookies/i);
        expect(sectionTitle).toBeInTheDocument();
    });
});