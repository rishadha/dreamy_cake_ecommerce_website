import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Gmap = () => {
    return (
        <MapContainer className="markercluster-map" center={[7.2906, 80.6337]} zoom={12} maxZoom={18}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
        </MapContainer>
    );
};

export default Gmap;
