/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import CustomCalendar from "./src/pages/CustomCalendar";
import MultiDotCalendar from "./src/pages/MultiDotCalendar";
import MultiPeriod from "./src/pages/MultiPeriod";
import PeriodCalendar from "./src/pages/PeriodCalendar";
import {LocaleConfig} from 'react-native-calendars';
import Sample from "./src/pages/Sample";

const Tab = createBottomTabNavigator();


function App() {

  
LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월'
  ],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "오늘"
};
LocaleConfig.defaultLocale = 'fr';

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Sample">
        <Tab.Screen 
          name="MultiDotCalendar"
          component={MultiDotCalendar}
          options={{title: 'Multi-dot'}}
        />
        <Tab.Screen 
          name="PeriodCalendar"
          component={PeriodCalendar}
          options={{title: 'Period'}}
        />
        <Tab.Screen 
          name="MultiPeriod"
          component={MultiPeriod}
          options={{title: 'multi-period'}}
        />
        <Tab.Screen 
          name="CustomCalendar"
          component={CustomCalendar}
          options={{title: 'Custom'}}
        />
        <Tab.Screen 
          name="Sample"
          component={Sample}
          options={{title: 'Sample'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;