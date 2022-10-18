import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import State from './Service/State'

test('renders learn react link', () => {
  render(<App tasks={State.baseTasks}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
