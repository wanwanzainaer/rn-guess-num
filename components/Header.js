import React from 'react';

import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/Colors';
import TitleText from './TitleText';
const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.heardAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  heardAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
});

export default Header;
