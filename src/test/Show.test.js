import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Show from '../routes/Show';

describe('Test Details Route', () => {
  it('render Details', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Show />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a div container', () => {
    render(
      <Provider store={store}>
        <Show />
      </Provider>,
    );
    const page = screen.getByTestId('detailsItem');

    expect(page).toBeInTheDocument();
  });
});
