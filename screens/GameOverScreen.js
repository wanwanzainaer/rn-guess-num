import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{
          //   uri:
          //     'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003246/img/basic/a0003246_main.jpg?20210122163151&q=80&rw=750&rh=536',
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          You phone needed
          <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestartGame}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: { width: '100%', height: '100%' },
  highlight: { color: Colors.primary, fontFamily: 'open-sans-bold' },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    // width: '80%',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
