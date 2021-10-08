import React from 'react';
import { AuthProvider } from './context/authContext';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
