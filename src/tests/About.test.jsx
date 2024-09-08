import { About } from "../routes/About.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


beforeEach(() => {
    render(<About />);
    vi.clearAllMocks();
  });

describe('About Page', () => {
    it('displays the heading "About Mystic Emporium"', () => {
        const heading = screen.getByText(/about mystic emporium/i);
        expect(heading).toBeInTheDocument();
    });

    it('contains a link to GitHub', () => {
        const githubLink = screen.getByRole('link', { name: /GitHub/i });
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/EnumaOub');
    });
});