import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';

describe('Loader Component Tests', () => {
  it('should render Loader component with a snapshot', () => {
    // Arrange & Act
    const tree = renderer.create(<Loader />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  it('should have a "loading" class on the first child element', () => {
    // Arrange & Act
    const { container } = render(<Loader />);

    // Assert
    expect(container.firstChild.classList.contains('loading')).toBe(true);
  });

  it('should have only one element with "loading" class', () => {
    // Arrange & Act
    const { container } = render(<Loader />);

    // Assert
    expect(container.getElementsByClassName('loading').length).toBe(1);
  });
});
