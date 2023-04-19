import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';

it('test loader render', () => {
  const { container } = render(<Loader />);
  const tree = renderer.create(<Loader />).toJSON();
  expect(container.firstChild.classList.contains('loading')).toBe(true);
  expect(container.getElementsByClassName('loading').length).toBe(1);
  expect(tree).toMatchSnapshot();
});
