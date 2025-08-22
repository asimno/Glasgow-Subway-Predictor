import '../styles/App.css';

import ContentBlock1 from '../web-components/Main/ContentBlock';
import Map from '../web-components/Main/Map';
import MiniAnalytics from '../web-components/Main/MiniAnalytics';
import MiniAPI from '../web-components/Main/MiniAPI';

export default function Main() {
  return (
    <>
      <ContentBlock1 text={<><span>Whether you're a transport application developer <span class='grey_highlight'>(or just a huge fan of Glasgow's Subway..)</span>, this source of publically available Strathclyde Partnership for Transport data on the Glasgow Subway metro system made use of through prediction-based <span class='grey_highlight'>APIs</span> and <span class='grey_highlight'>fun visualizations</span> may be your next stop!</span></>} url="./media/subway_photograph_1.jpg" side="left"/>
      <Map/>
      <MiniAnalytics/>
      <MiniAPI/>
      <ContentBlock1 text="Will Add Other Stuff Here Soon" url="./media/subway_photograph_1.jpg" side="left"/>
    </>
  )
}