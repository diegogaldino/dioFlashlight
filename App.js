import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import lightOff from './assets/icon/eco-light-off.png';
import lightOn from './assets/icon/eco-light.png';
import dioImage from './assets/icon/dio.png';
import Torch from "react-native-torch";
import RNshake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  function handleChangeToggle(){
    setToggle(!toggle);
  }

  useEffect(() => {
    Torch.switchState(toggle)
  }, [toggle]);

  useEffect(() => {
    const subscription = RNshake.addListener(() => {
      setToggle(!toggle)
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={toggle ? lightOn : lightOff}
        />
        <Image
          style={style.dioLogo}
          source={dioImage}
        />
      </TouchableOpacity>
    </View>
  )
}
export default  App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
})