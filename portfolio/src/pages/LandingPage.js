import { Carousel } from 'react-carousel-minimal';

function LandingPage(){
  const data = [
    {
      image: "https://thierry.kellyburger.com/imgSetup/Setup_bearbeitet.png",
      caption: "Wir machen dies.."
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/Setup_kaputt_bearbeitet.png",
      caption: "..wieder zu dem,"
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/CPU_LM_spill.png",
      caption: "das.."
    },
    {
      image: "https://thierry.kellyburger.com/imgSetup/CPU_GPU_Laptop.png",
      caption: "..wieder zu dem!"
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
            <h3>Suchen Sie nach einer schnellen und professionellen Lösung für Ihre Computerprobleme?
              Sind Sie frustriert über den defekten Drucker oder den fehlerhaften Monitor?
              Bei Setup-Flick AG sind wir darauf spezialisiert, Ihre Computer und Computerzubehör
              wieder zum Laufen zu bringen. Unser erfahrenes Team von Experten steht bereit,
              um Ihnen bei allen Arten von technischen Problemen zu helfen. Egal, ob es sich um
              Hardware- oder Softwareprobleme handelt, wir haben das Know-how und die Fähigkeiten,
              um eine schnelle und effiziente Reparatur durchzuführen. Wir verstehen, wie wichtig
              Ihre Geräte für Sie sind und arbeiten mit höchster Sorgfalt, um eine optimale Leistung
              und Haltbarkeit zu gewährleisten.</h3>
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
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
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
      <section id='whatCanWeDo' className='landPageAdv'>
      <h3>Was können wir für Sie tun?</h3>
      </section>
      <section className='landPageAdv'>
        <div className='advLeft1'>
          <img src='https://thierry.kellyburger.com/imgSetup/PC_aufschrauben.png' className='offerImg'
          alt='Person, die einen Computer aufschraubt'></img>
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
          <img src='https://thierry.kellyburger.com/imgSetup/Grafikkarte_von_oben.png' className='offerImg'
          alt='Grafikkarte von oben'></img>
        </div>
      </section>
      <section className='landPageAdv'>
        <div className='advLeft1'>
          <img src='https://thierry.kellyburger.com/imgSetup/Tablet_kaputt_front_view.png' className='offerImg'
          alt='Computersetup mit kaputten Bildschirmen'></img>
        </div>
        <div className='advRight1'>
          <h2>Monitorreparatur</h2>
          <p>Defekte Bildschirme können Ihre Arbeit behindern.
            Unsere Experten analysieren und beheben Probleme wie Pixelfehler, 
            Flackern oder fehlende Anzeige, um Ihre Monitore wieder in Topform zu bringen.
            Auch Brüche im Display sind kein Problem für uns.</p>
        </div>
      </section>
      <section className='landPageAdv'>
        <div className='advLeft2'>
          <h2>Aufrüstung&Wartung</h2>
          <p>Wir bieten auch Dienstleistungen zur Aufrüstung und Wartung an, um sicherzustellen, 
            dass Ihre Geräte optimal funktionieren. Von der Installation neuer Hardwarekomponenten 
            bis hin zur Optimierung der Software stehen wir Ihnen zur Seite.</p>
        </div>
        <div className='advRight2'>
          <img src='https://thierry.kellyburger.com/imgSetup/Haufen_von_Teilen.png' className='offerImg'
          alt='Ein Haufen von Computerteilen'></img>
        </div>
      </section>
    </div>//For main div
  );
}
export default LandingPage;