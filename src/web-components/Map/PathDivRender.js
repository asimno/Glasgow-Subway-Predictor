import '../../styles/App.css';
import {useState, useEffect} from 'react';

//renderedComp,renderedCompProps,pathRef,perc

export default function PathDivRender(props) 
{
    const [isReady, setIsReady] = useState(false);
    const [pos,setPos] = useState({left:0,top:0});

    useEffect(() => {
        if (props.pathRef&&props.pathRef.current) {
            setIsReady(true);
        }
  }, [[props.pathRef]]);

      const updatePosition = () => {
        const pathLength = props.pathRef.current.getTotalLength();
        const pointLoc = props.pathRef.current.getPointAtLength((((props.perc+15)%100)*0.01)*pathLength);

        const ctm = props.pathRef.current.getScreenCTM();
        const screenPoint = new DOMPoint(pointLoc.x, pointLoc.y).matrixTransform(ctm);

        const finalx = screenPoint.x;
        const finaly = screenPoint.y;

        setPos({left:finalx,top:finaly});
    }

    useEffect(() => {
        updatePosition();

        window.addEventListener("resize",updatePosition);
        window.addEventListener("scroll",updatePosition);
    },[])

    if (!isReady) {
        return (<></>);
    }

    const container = props.containerRef.current;
    const bounds = container.getBoundingClientRect();
    const offsetTop = container.offsetTop;

    console.log(bounds.top);
    console.log(container.offsetTop);

    return (
        <>
        <props.renderedComp station = {props.renderedCompProps.Station} left={pos.left} top={pos.top+(offsetTop-bounds.top)}/>
        </>
    )
}