import '../../styles/App.css';
import {useState, useEffect} from 'react';

//renderedComp,renderedCompProps,pathRef,perc

export default function PathDivRender(props) 
{
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (props.pathRef&&props.pathRef.current) {
            setIsReady(true);
        }
  }, [[props.pathRef]]);

    if (!isReady) {
        return (<></>);
    }

    const pathLength = props.pathRef.current.getTotalLength();
    const pointLoc = props.pathRef.current.getPointAtLength((((props.perc+15)%100)*0.01)*pathLength);

    props.renderedCompProps.left=pointLoc.x + "px"
    props.renderedCompProps.top=pointLoc.y + "px"

    return (
        <>
        <props.renderedComp {...props.renderedCompProps}/>
        </>
    )
}