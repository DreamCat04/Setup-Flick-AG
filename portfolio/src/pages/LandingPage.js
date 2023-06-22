import { Carousel } from 'react-carousel-minimal';
import "../style/LandingPage.css";

function LandingPage(){
  const data = [
    {
      image: "https://thierry.kellyburger.com/imgSetup/setup_broken.jpg",
      caption: "Wir machen dies.."
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/setup_fixed.jpg",
      caption: "..zu dem"
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

  return(
    <div className="landingPage">
      <div id='landPageContainer'>
        <div id='leftContainer'>
          <h1>Setup-Flick AG</h1>
          <h3>Ist Ihr PC kaputt oder funktioniert er nicht richtig? Bringen Sie ihn zu uns, wir reparieren ihn!</h3>
          <p>Setup-Flick AG repariert alles in einem Computer und auch rund um den Computer. Wir beherrschen Microsoldering, 
            Reflowing von Chips und vieles mehr</p>
        </div>
        <div id='rightContainer'>
          <div style={{padding: "0 20px"}}>
          <Carousel
            data={data}
            time={5000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
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
          </div>{/*For carousel*/}
        </div>{/*For right side container*/}
      </div>{/*For container*/}
    </div>//For main div
  );
}
export default LandingPage;