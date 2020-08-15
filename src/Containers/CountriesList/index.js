import React, {useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';
import {PanGestureHandler, State, ScrollView} from 'react-native-gesture-handler';
import {CountriesModal, ModalIndicator} from './style';
import {ListItem} from '../../Components';
const {width, height} = Dimensions.get('window');

const CountriesList = ({data}) => {
  let offsetModal = 0;
  let openedModal = false;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;
      offsetModal += translationY;
      
      console.log(translationY)
      if (translationY <= -30) {
        openedModal = true;
      } else {
        translateY.setValue(offsetModal);
        translateY.setOffset(0);
        offsetModal = 0;
        console.log('else')
        openedModal = false;
      }
     
      Animated.timing(translateY, {
        toValue: openedModal ? -200 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        console.log('animation')
        //offsetModal = openedModal ? -380 : 0;
        offsetModal = openedModal ? -200 : 0;
        translateY.setOffset(offsetModal);
        translateY.setValue(0);
      })
    }
  }

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
      style={{backgroundColor: 'red', flex: 1}}
    >
      <CountriesModal
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          transform: [{
              translateY: translateY.interpolate({
                inputRange: [-200, 0, 100],
                outputRange: [-200, 0, 10],
                extrapolate: 'clamp',
              }),
            }
          ],
          width: '100%',
          height: height - 200,
        }}>
        <ModalIndicator />
        <ScrollView style={{marginTop: 16}} nestedScrollEnabled>
          {data.map((country) => (
            <ListItem data={country} />
          ))}
        </ScrollView>
      </CountriesModal>
    </PanGestureHandler>
  );
}

export default CountriesList;