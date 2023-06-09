import { useState } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    Dimensions
  } from 'react-native';
  import Carousel, { Pagination } from 'react-native-snap-carousel';
function MainContent(){
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 80;

const IMAGES = {
  image1: require('../../img/setup_broken.jpg'),
  image2: require('../../img/setup_fixed.jpg'),
};
const [images, setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 }
  ]);
    return(
        <div id="mainContent">
        <h1>Setup-Flick</h1>
        <h3>Ist Ihr PC kaputt oder funktioniert er nicht richtig? Bringen Sie ihn zu uns, wir reparieren ihn!</h3>
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
      <Text
        style={{
          color: 'white',
          fontSize: 32,
          marginTop: 50,
          marginBottom: 25
        }}
      >
      </Text>
      <View style={{ flex: 1 / 2, marginTop: 20 }}>
      <Carousel
        layout='default'
        data={images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={{ width: '100%', height: '100%' }}
            resizeMode='contain'
            source={item.image}
          />
        )}
      />
    </View>
    <Pagination
    inactiveDotColor='gray'
    dotColor={'orange'}
    activeDotIndex={indexSelected}
    dotsLength={images.length}
    animatedDuration={150}
    inactiveDotScale={1}
  />
    </View>
        </div>
    )
}
export default MainContent;