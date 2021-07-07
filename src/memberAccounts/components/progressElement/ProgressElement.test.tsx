import ProgressElement from './ProgressElement';
import { render, screen } from '@testing-library/react';

describe('<ProgressElement />', () => {
    test('component textContent should be correct', () => {
        render(<ProgressElement skill="html" level="master" percent={70} />);
        const container = screen.getByTestId('progressElement-div');

        expect(container.textContent).toBe('htmlmaster');
    });
});