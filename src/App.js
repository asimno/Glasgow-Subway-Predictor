import './styles/App.css';

import Navbar from './web-components/Navbar';
import Footer from './web-components/Footer';
import ContentBlock from './web-components/Main/ContentBlock';
import Map from './web-components/Main/Map';
import MiniAnalytics from './web-components/Main/MiniAnalytics';
import MiniAPI from './web-components/Main/MiniAPI';

function App() {
  return (Base(Main));
}

function Base(content) {
    return (
    <>
      <Navbar/>
      {content()}
      <Footer/>
    </>
  );
}

function TestContent() {
  return (
    <>
      <div class="TestBlockDelLater">
        testtt
      </div>
    </>
  )
}

function Main() {
  return (
    <>
      <ContentBlock text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" url="./media/subway_photograph_1.jpg" side="left"/>
      <Map/>
      <MiniAnalytics/>
      <MiniAPI/>
      <ContentBlock text="Will Add Other Stuff Here Soon" url="./media/subway_photograph_1.jpg" side="left"/>
    </>
  )
}

export default App;
