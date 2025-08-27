import '../../styles/App.css';
import MapRender from './MapRender.js'

export default function Map() {
        return (
            <>
                <div class="flex" id="map-block">
                    <h1>Map title</h1>
                    <MapRender/>
                    <h1>Map time/whatever was here</h1>
                </div>
            </>
        )
}