import { Privacy } from "../routes/Privacy.jsx";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

beforeEach(() => {
    render(<Privacy />);
    vi.clearAllMocks();
  });

describe('Privacy Page', () => {

    it('displays the heading "Privacy Policy"', () => {
        const sectionTitle = screen.getByRole('heading', {level: 1});
        expect(sectionTitle).toHaveTextContent(/Privacy Policy/i);

          
    });
});