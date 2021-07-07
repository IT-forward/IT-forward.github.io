import SectionCaption from './SectionCaption';
import { render, screen } from '@testing-library/react';

describe('<SectionCaption />', () => {
    test('component textContent should be correct', () => {
        render(<SectionCaption caption='something' />);
        const container = screen.getByTestId('sectionCaption');

        expect(container.textContent).toBe('something');
    });
});