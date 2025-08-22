import '../../styles/App.css';

export default function ContentBlock1(props) {
    if (props.side == "left") {
        return (
            <>
                <div id="content-block">
                    <h1 id="content-block-text-left">{props.text}</h1>
                    <div id="content-block-image-left" style={{backgroundImage:"url(" + props.url + ")"}}/>
                </div>
            </>
        )
    }
}