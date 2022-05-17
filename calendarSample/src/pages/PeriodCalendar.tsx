/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

function PeriodCalendar() {
    
    
    return(
        <View>
           <Text>기간 달력</Text>
           <Calendar 
                markingType={"period"}
                markedDates={{
                    '2022-05-02': {startingDay:true, color:'green'},
                    '2022-05-03': {selected:true, endingDay: true, color:'green', textColor: 'white'},
                    '2022-05-11': {disabled: true, startingDay: true, color: 'green', endingDay:true},
                    '2022-05-13': {disabled: true, startingDay: true, color:'red'},
                    '2022-05-14': {disabled:true, color:'red'},
                    '2022-05-15': {disabled: true, endingDay: true, color: 'red'},
                    '2022-05-04': {startingDay: true, color: '#50cebb', textColor: 'white'},
                    '2022-05-05': {color: '#70d7c7', textColor: 'white'},
                    '2022-05-06': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                    '2022-05-07': {endingDay: true, color: '#50cebb', textColor: 'white'}
                }}
           />
           
        </View>
    )
}

export default PeriodCalendar;