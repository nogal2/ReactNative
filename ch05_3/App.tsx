import React, { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DarkTheme, DefaultTheme } from "react-native-paper";
import MainNavigator from "./src/screens/MainNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { ToggleThemeProvider } from "./src/contexts";

/* 
npm i react-native-vector-icons react-native-paper color moment moment-with-locales-es6
npm i -D @types/react-native-vector-icons @types/color
npx react-native link react-native-vector-icons
다크모드
npm i react-native-appearance
npx react-native link react-native-appearance
*/

export default function App() {
  
  const scheme = useColorScheme()
  const [theme, setTheme] = useState (
    scheme == 'dark' ? DarkTheme : DefaultTheme
  )

  const toggleTheme = useCallback (
    () => setTheme((theme) => (theme.dark ? DefaultTheme : DarkTheme)), 
    [])

  
  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.SafeAreaView]}>
            <MainNavigator />
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create ({
  SafeAreaView: {flex:1}
})