import Fact from './Fact';
import { render, screen } from '@testing-library/react';
import {AiOutlineCheck} from 'react-icons/ai';

describe('<Fact />', () => {
    test('component textContent should be correct', () => {
        render(<Fact icon={<AiOutlineCheck />} nums={'77'} type='Students' />);
        const container = screen.getByTestId('fact-div');

        expect(container.textContent).toBe('77Students');
    });
});