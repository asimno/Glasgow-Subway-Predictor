import '../styles/App.css';

import ContentBlock1 from '../web-components/Main/ContentBlock';

export default function Map() {
  return (
    <>
      <ContentBlock1 text={<><span>Map page!</span></>} url="./media/subway_photograph_1.jpg" side="left"/>
    </>
  )
}