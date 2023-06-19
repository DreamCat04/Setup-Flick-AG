import { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
const images = [
  'C:/Users/thier/OneDrive/Dokumente/Daten IMS/BBW/Programmiermodul/14_ProjektMultimedia/Setup-Flick-AG/portfolio/src/img/setup_broken.jpg',
  'C:/Users/thier/OneDrive/Dokumente/Daten IMS/BBW/Programmiermodul/14_ProjektMultimedia/Setup-Flick-AG/portfolio/src/img/setup_fixed.jpg'
  // Add more image URLs here
];
function MainContent(){
    return(
        <div id="mainContent">
        <h1>Setup-Flick</h1>
        <h3>Ist Ihr PC kaputt oder funktioniert er nicht richtig? Bringen Sie ihn zu uns, wir reparieren ihn!</h3>
        <ImageCarousel images={images}/>
        </div>
    );
}
export default MainContent;