import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useClock } from "./src/hooks";

export default function App() {
  
  console.log('App')

  const time = useClock()
  
  console.log('App After')
  //  time.toLocaleTimeString() 현재 시각 
  //  time.toLocaleDateString() 오늘 날짜
  return(
  <SafeAreaView style={styles.safeAreaView}>
    <Text style={[styles.digitFont, styles.time]}>
      {time.toLocaleTimeString()}
    </Text>
    <Text style={[styles.digitFont]}>{time.toLocaleDateString()}</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  safeAreaView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digitFont: {
    fontFamily: 'MajorMonoDisplay-Regular',
    fontWeight: '400'
  },
  time: { fontSize: 50 }
})