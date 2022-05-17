/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";


function test () {
  return(
<Calendar
  // 처음 보이는 달(month). Default = now
  current={'2013-03-01'}
  // 선택할 수 있는 최소 날짜, 최소 날짜 이전 날짜는 회색으로 표시됩니다. Default = undefined
  minDate={'2012-05-10'}
  // 선택할 수 있는 최대 날짜, 최대 날짜 이후 날짜는 회색으로 표시됩니다. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. 당일에 실행되는 핸들러입니다 Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
  }}
  // Handler which gets executed on day long press. 길게 눌렀을때 실행되는 핸들러  Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // 달력에서 보이는 달(month)이 변경될 때 실행되는 처리기(Handler) Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // 달 넘어가는 화살표 숨기기. Default = false
  hideArrows={true}
  // 기본 화살표를 사용자 지정 화살표로 바꾸기 (direction can be 'left' or 'right')
  renderArrow={direction => <Arrow />}
  // 다음 달 날짜 미리 표시하지 말기. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false 일 때 회색 글씨(다음 달 혹은 이전 달 날짜들)를 클릭해도 화면이 넘어가지 않게하기.
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // firstDay={1} 이면 일주일의 시작은 월요일부터다. 단, 이것을 설정해도 dayNames와 dayNamesShort는 일요일 부터다.
  firstDay={1}
  // 요일 이름을 숨김. Default = false
  hideDayNames={true}
  // 왼쪽에 해당 해의 몇 번째 주 인지 알려줌. Default = false
  showWeekNumbers={true}
  // 왼쪽 화살표를 눌렀을때 발생하는 핸들러. 누르면 이 전달로 이동하는 콜백함수를 받을 수 있다.
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // 오른쪽 화살표를 눌렀을때 발생하는 핸들러. 누르면 다음 달로 이동하는 콜백함수를 받을 수 있다.
  onPressArrowRight={addMonth => addMonth()}
  // 왼쪽 화살표를 사용하지 않는다. Default = false
  disableArrowLeft={true}
  // 오른쪽 화살표를 사용하지 않는다. Default = false
  disableArrowRight={true}
  // 비활성화된 날짜에 대해 모든 터치 이벤트를 비활성화합니다. markedDates에서 비활성화TouchEvent로 재정의할 수 있음
  disableAllTouchEventsForDisabledDays={true}
  // 기본 월 및 연도 제목을 사용자 정의 제목으로 바꿉니다. 함수가 날짜를 매개 변수로 받음
  renderHeader={date => {
    /*Return JSX*/
  }}
  // 월간 스와이프 옵션을 사용합니다. Default = false
  enableSwipeMonths={true}
/>
  )
}
