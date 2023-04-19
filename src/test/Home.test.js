import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../routes/Home';

describe('Test Home Route', () => {
  it('render Home', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render a div container', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const page = screen.getByTestId('cryptoItem');

    expect(page).toBeInTheDocument();
  });
});
