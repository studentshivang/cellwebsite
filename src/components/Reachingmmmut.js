import Navsm from "./Navsm";
import "../style/reaching.css"
import Footer from "./utils/Footer";
const Reachingmmmut =()=>{
    return(
        <>
         <Navsm/>
         <div className="location">Location</div>
         <div className="borderr1"></div>
         <div className="text1">The University is located on Gorakhpur-Deoria road, about 9 kilometres from Gorakhpur Railway Station as well as from main Gorakhpur Roadways bus-station.</div >
         <div className="connectivity">Connectivity</div>
         <div className="borderr2"></div>
         <ul>
            <li><b>Through Air:</b> Mahayogi Gorakhnath Airport, Gorakhpur, Uttar Pradesh, 273002 is well connected with all major cities (Delhi, Mumbai, Hyderabad. Kolkata, Allahabad) and is 13 min. (6.4 km) away from MMMUT via Deoria Road / Gorakapur.</li>
            <li><b>Through Rail:</b> Being an administrative headquarter of the Gorakhpur division, the city is well connected with all the major cities and Gorakhpur railway station is 6.3 km (2 min) away from MMMUT via Deoria Road/Gorakhpur.</li>
            <li><b>Through Road:</b>Gorakhpur city, via national highway 28, 29, 233B is connected to all parts of the country by good roads and Gorakhpur bus station is 14 min (6.5 km) away from MMMUT via Derioa Road/Gorakhpur.</li>
         </ul>
         <div className="map">Map</div>
         <div className="borderr3"></div>


         <Footer />
        </>
    );
};

export default Reachingmmmut;