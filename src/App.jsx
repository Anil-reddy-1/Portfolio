import React from 'react';
import { ThemeContext ,ThemeProvider} from './contexts/ThemeContext.tsx';
import Body from './components/body.tsx';
import './App.css'


function App() {


  return (
    <ThemeProvider >
      <Body/>
    </ThemeProvider>
  );
}

export default App
