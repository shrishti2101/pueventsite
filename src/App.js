import logo from './loading-1.gif';
import './App.scss';
import Register from './Components/Forms/register';
import SignIn from './Components/Forms/SignIn';
import { Menu } from '@mui/material';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import StickyFooter from './Components/StickyFooter';
import Data from  './Components/Data';
function App() {
  return (<>
     
    <ResponsiveAppBar/>
    <Data/>
    <StickyFooter/>

    </>
  );
}
export default App;
