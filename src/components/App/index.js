import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import variables from '../../assets/styles/variables';

import MainRoutes from '../../Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={variables}>
          <GlobalStyles />
          <MainRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
