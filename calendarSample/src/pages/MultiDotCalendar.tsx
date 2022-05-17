/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Calendar,} from "react-native-calendars";

function MultiDotCalendar() {

    const vacation = {key: 'vacation', color:'red', selectedDotColor:'blue'};
    const message = {key: 'message', color:'yellow', selectedDotColor:'blue'};
    const workout = {key: 'workout', color:'green'};
    const vac = {key: 'vac', color:'red', selectedDotColor:'blue'};
    const vaca = {key: 'vaca', color:'red', selectedDotColor:'blue'};
    
    
    return(
        <View>
           <Text>멀티도트 달력</Text>
           <Calendar 
                markingType={"multi-dot"}
                markedDates={{
                    '2022-05-12': {dots:[vacation, message, workout,vac, vaca], selected: true, selectedColor:'red'},
                    '2022-05-14': {dots: [message, workout], selected:true, marked:true},
                }}
           />
           
        </View>
    )
}

export default MultiDotCalendar;