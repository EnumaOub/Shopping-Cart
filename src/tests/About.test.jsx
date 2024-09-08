import { About } from "../routes/About.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


describe('About Page', () => {
    it('renders the About page without crashing', () => {
        render(<About />);
    });

    it('displays the heading "About Mystic Emporium"', () => {
        render(<About />);
        const heading = screen.getByText(/about mystic emporium/i);
        expect(heading).toBeInTheDocument();
    });

    it('displays the description text', () => {
        render(<About />);
        const description = screen.getByText(/Welcome to Mystic Emporium's privacy policy page/i);
        expect(description).toBeInTheDocument();
    });

    it('contains a link to GitHub', () => {
        render(<About />);
        const githubLink = screen.getByRole('link', { name: /GitHub/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/your-github-account');
    });
});