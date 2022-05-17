/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

function CustomCalendar() {
    
    
    return(
        <View>
           <Text>기간 달력</Text>
           <Calendar 
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 350,

                }}
                theme= {{
                    calendarBackground: 'red'
                }}
                markingType={"custom"}
                markedDates={{
                    '2022-05-03': {
                        customStyles: {
                            container: {
                                backgroundColor: 'green'
                            },
                            text: {
                                color: 'black',
                                fontWeight: 'bold'
                            }
                        },
                    },
                    '2022-05-05': {
                        customStyles: {
                            container: {
                                backgroundColor: 'yellow',
                                elevation: 2
                            },
                            text: {
                                color:'blue'
                            }
                        }
                    }

                }}
           />
           
        </View>
    )
}

export default CustomCalendar;