import SeparatedInfoRow from './SeparatedInfoRow';
import { render, screen } from '@testing-library/react';

describe('<SeparatedInfoRow />', () => {
    test('component textContent should be correct', () => {
        render(<SeparatedInfoRow prop="City" value="Kitob" />);
        
        const divContainer = screen.getByTestId('separatedInfoRow-div');
        expect(divContainer.textContent).toBe('City: Kitob');
    });
});