import { Carousel } from 'react-carousel-minimal';
const data = [//This is sample data, replace with actual images once they're edited!
    {
      image: "https://thierry.kellyburger.com/imgSetup/PC_schrauben_verschwommen.png",
      caption: "Reparatur von Computern"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Grafikkarte_von_oben.png",
      caption: "Reparatur von Einzelteilen"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Haufen_von_Teilen_verschwommen.png",
      caption: "Aufrüsten von Computern"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/CPU_GPU_Laptop.png",
      caption: "Reparatur von Laptops"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/CPU_LM_spill.png",
      caption: "Beheben von übergelaufenem Flüssigmetall"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Tablet_kaputt_frontview.png",
      caption: "Reparatur von Tablets"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Setup_kaputt_bearbeitet.png",
      caption: "Reparatur von Bildschirmen und Zubehör"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/USB_Karte_löten.png",
      caption: "Reparatur von PCIe Steckkarten"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Lüfter_hämmern.png",
      caption: "Sodass Sie das nicht machen müssen"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
function Offers(){
    return(
        <div className="App">
            <h1>Angebote</h1>
            <p>Wir bieten Reparaturen von Grakfikkarten, 
              Mainboards, Netzwerkkarten oder anderen Steckkarten und 
              diversem Zubehör wie Tastaturen, Mäuse oder Webcams an. Wir 
              reparieren ausserdem auch Laptops aller Marken. Zusätzlich 
              bieten wir auch Hardwarediagnosen an, falls sie nicht wissen, weshalb 
              ihr PC streikt. Zudem führen auch Softwarediagnosen durch</p>
            <div style={{padding: "0 20px"}}>
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
          </div>
        </div>
    );
}
export default Offers;