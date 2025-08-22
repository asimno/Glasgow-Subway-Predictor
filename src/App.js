import './styles/App.css';

import Navbar from './web-components/Navbar';
import Footer from './web-components/Footer';
import Main from './Pages/Main'
import Unaffiliated from './web-components/Main/UnaffiliatedNotice';

function App() {
  return (Base(Main));
}

function Base(content) {
    return (
    <>
      <Unaffiliated/>
      <Navbar/>
      {content()}
      <Footer/>
    </>
  );
}

export default App;
