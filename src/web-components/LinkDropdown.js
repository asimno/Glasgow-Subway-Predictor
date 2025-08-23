import '../styles/App.css';

export default function LinkDropdown(props) {
    if (props.visible==false) {
        return;
    }

        const arr = [];
        for (const [key, value] of Object.entries(props.urlDictionary)) {
            arr.push(<div class="mobile-vis flex unselectable" id="dropdownURL"><a class="hoverable" href={value}><h3>{key}</h3></a></div>);
        }
        return (
            <>
                {arr}
            </>
        );
}