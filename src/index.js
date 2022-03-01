import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Forms/register';
import SignIn from './Components/Forms/SignIn';
import GlobalStyles from './theme/globalStyles';
import ThemeConfig from './theme'
ReactDOM.render(
  <React.StrictMode>
    <ThemeConfig>
      <GlobalStyles/>
      <App/>
    </ThemeConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();