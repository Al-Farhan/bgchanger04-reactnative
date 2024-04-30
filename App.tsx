/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [randomBackgroundCircle, setRandomBackgroundCircle] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCEDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  }

  const generateColorCircle = () => {
    const hexRange = "0123456789ABCEDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundCircle(color);
  }

  return (
    <>   
      <StatusBar backgroundColor={"#000000"} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.shapes}>
          <View style={[styles.circle, {backgroundColor: randomBackgroundCircle}]}>
            <Text>Circle</Text>
          </View>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={generateColorCircle} style={{margin: 5}}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Circle</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",

  },
  shapes: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    
  }
});

export default App;
