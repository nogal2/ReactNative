/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

function MultiPeriod() {
    // Calendar 에서만 완벽하게 지원됨
    
    
    return(
        <View>
           <Text>여러개 기간 정할수 있는곳.</Text>
           <Calendar 
                style={{
                    height:350,
                }}
                theme={{
                    calendarBackground:'white',
                    monthTextColor:'blue',
                    arrowColor:'red',
                    textSectionTitleColor:'yellow',
                }}
                markingType="multi-period"
                markedDates={{
                    '2022-05-02': {
                        periods: [
                            {startingDay: true, endingDay: false, color: '#5f9ea0'},
                            {startingDay: false, endingDay: true, color: '#ffa500'},
                            {startingDay: true, endingDay: false, color: '#f0e68c'},
                        ]
                    },
                    '2022-05-03': {
                        periods: [
                            {color:'#5f9ea0'}
                        ]
                    },
                    '2022-05-05': {
                        disabled:true
                    },
                    '2022-05-04': {
                        periods: [
                            {endingDay:true, color:'#5f9ea0'}
                        ]  
                    },
                    '2022-05-10': {
                        periods: [
                            {startingDay: true, endingDay: false, color:'#ffa500'},
                            {color:'transparent'},
                            {startingDay: true, endingDay:false, color: '#f0e68c'}
                        ]
                    },
                    '2022-05-12': {
                        periods: [
                            {startingDay: false, endingDay: true, color:'#ffa500'}
                        ]
                    }
                    
                }}
           />
           
        </View>
    )
}

export default MultiPeriod;