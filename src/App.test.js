import { render, screen } from '@testing-library/react';
import App from './App';
import { UserProvider } from './context/UserContext';

test.skip('should render Welcome to the Acme Inc. Employee Directory!', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  const text = screen.getByText(
    /Welcome to the Acme Inc. Employee Directory!/i
  );
  expect(text).toBeInTheDocument();
});
