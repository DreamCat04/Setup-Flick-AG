import { Carousel } from 'react-carousel-minimal';
const data = [//This is sample data, replace with actual images once they're edited!
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
function Offers(){
    return(
        <div className="App">
            <h1>Angebote</h1>
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