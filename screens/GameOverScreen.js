import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/success.png')}
          source={{
            uri:
              'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003246/img/basic/a0003246_main.jpg?20210122163151&q=80&rw=750&rh=536',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestartGame} />
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
});

export default GameOverScreen;
