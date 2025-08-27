import '../../styles/App.css';

//props will include Station Name + some other details? Maybe address or something.

export default function Station(props)
{
    return(
        <div id="station" style={{left: props.left,top: props.top}}>
            {props.Station}
        </div>
    )
}