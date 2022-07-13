import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from '../assets/images/heart.png';
import Icon1 from '../assets/images/repeat-button.png';
import Icon2 from '../assets/images/send.png';
import Icon3 from '../assets/images/ellipsis.png';
import PlaySkipBack from '../assets/images/play-skip-back-outline.png';
import PauseCircle from '../assets/images/pause-circle.png';
import PlaySkipForward from '../assets/images/play-skip-forward-outline.png';
// import Image1 from '../assets/images/diamond-g374e788d2_640.png';
import Slider from '@react-native-community/slider';
//import songs from '../model/data';
/*import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
} from 'react-native-track-player';*/
//const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const {height, width} = Dimensions.get('window');

const MusicPlayer = () => {
 // const scrollX = useRef(new Animated.Value(0)).current;
  //const [songIndex, setSongIndex] = useState(0);
  //const songSlider = useRef(null);

  {/*useEffect(() => {
    scrollX.addListener(({value}) => {
      //console.log('Scroll X',scrollX);
      //console.log('Device Width',width);
      const index = Math.round(value / index);
      setSongIndex(index);
      //console.log("Index",index);
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);*/}

  {/*const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };*/}

 {/*} const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };*/}
{/*
  const renderSongs = ({index, item}) => {
    {
      /*return (
      <Animated.View
        style={{
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          
        }}>
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImg} />
        </View>
      </Animated.View>
    );
    }
    <View>
      <Text>ABC</Text>
    </View>;
  };
*/}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222831',
    },
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    artworkWrapper: {
      width: 300,
      height: 340,
      marginBottom: 25,
    },
    artworkImg: {
      width: '100%',
      height: '100%',
      //borderRadius: '15',
      //elevation: '5',
    },
    title: {
      fontSize: 18,
      fontFamily: '600',
      textAlign: 'center',
      color: '#EEEEEE',
    },
    artist: {
      fontSize: 16,
      fontFamily: '200',
      textAlign: 'center',
      color: '#EEEEEE',
    },
    progressContainer: {
      width: 350,
      height: 40,
      marginTop: 25,
      //flexDirection:'row'
    },
    progressLabelContainer: {
      width: 340,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ProgressLabelTxt: {
      color: '#fff',
    },
    musicControls: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    bottomContainer: {
      borderTopColor: '#393E46',
      borderTopWidth: 1,
      width: width,
      alignItems: 'center',
      paddingVertical: 15,
    },
    bottomControls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    //till above
    icon: {
      height: 30,
      width: 30,
      color: '#FFD369',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.artworkWrapper}>
          <Image
            source={require('../assets/images/img.png')}
            style={styles.artworkImg}
  />
  </View>
        {/*<View style={{width: width}}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            //renderItem={renderSongs}
            renderItem={({ index, item}) => (
                <View>
      <Text style={{fontSize:50,color:'yellow'}}>ABC</Text>
    </View>
              )}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{
              flexGrow: 1,
              borderWidth: 2,
              borderColor: '#f00',
              height: 100,
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            />
            </View> */}
        <View>
          {/* <Text style={styles.title}>{songs[songIndex].title}</Text> 
             <Text style={styles.artist}>{songs[songIndex].artist}</Text>
         */}
          <Text style={styles.title}>Despacito</Text>

          <Text style={styles.artist}>Luis Fonsi</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="FFD369"
            maximumTrackTintColor="FFF"
            onSlidingComplete={() => {}}></Slider>
          <View style={styles.progressLabelContainer}>
            <Text style={styles.ProgressLabelTxt}>0:00</Text>
            <Text style={styles.ProgressLabelTxt}>3:50</Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={PlaySkipBack} style={{height: 30, width: 30}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={PauseCircle} style={{height: 50, width: 50}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={PlaySkipForward} style={{height: 30, width: 30}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Icon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Icon1} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Icon2} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Icon3} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;
