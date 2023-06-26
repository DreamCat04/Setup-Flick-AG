import { Carousel } from 'react-carousel-minimal';

function LandingPage(){
  const data = [
    {
      image: "https://thierry.kellyburger.com/imgSetup/setup_broken.jpg",
      caption: "Wir machen dies.."
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/setup_fixed.jpg",
      caption: "..wieder zu dem"
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
      <section id='landPageMain'>
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
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
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
      </section>
      <section className='landPageAdv'>
        <div className='advLeft1'>
          <img src='https://thierry.kellyburger.com/imgSetup/PC_aufschrauben.png' className='offerImg'></img>
        </div>
        <div className='advRight1'>
          <h2>Computerreparatur</h2>
          <p>Unsere Techniker sind geschult, um verschiedene Computerprobleme zu beheben, 
            beispielsweise Ausfälle von Grafikkarten, Kühlung, Arbeitsspeicher oder Massenspeicher. 
            Wir finden die richtige Lösung, um Ihr Gerät wieder voll funktionsfähig zu machen.</p>
        </div>
      </section>
      <section className='landPageAdv'>
        <div className='advLeft2'>
          <h2>Einzelteilreparatur</h2>
          <p>Unsere Techniker sind auch geschult, um die verschiedenen Computerbauteile zu reparieren, 
            beispielsweise Grafikkarten, Arbeitsspeicher oder Massenspeicher. 
            Wir beheben Ihr Problem schnell, sodass Sie nicht lange auf Ihr Gerät warten müssen.</p>
        </div>
        <div className='advRight2'>
          <img src='https://thierry.kellyburger.com/imgSetup/Grafikkarte_von_oben.png' className='offerImg'></img>
        </div>
      </section>
    </div>//For main div
  );
}
export default LandingPage;