import { useState } from "react";
import ImageCarousel from "../ImageGallery/ImageCarousel";
const images = [
  'src/img/setup_broken.jpg',
  'src/img/setup_fixed.jpg'
  // Add more image URLs here
];
function MainContent(){
    return(
        <div id="mainContent">
        <h1>Setup-Flick</h1>
        <h3>Ist Ihr PC kaputt oder funktioniert er nicht richtig? Bringen Sie ihn zu uns, wir reparieren ihn!</h3>
        <ImageCarousel images={images} />
        </div>
    );
}
export default MainContent;