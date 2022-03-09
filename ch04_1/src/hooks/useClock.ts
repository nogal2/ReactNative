import React, { useEffect, useState } from "react";

export const useClock = () => {
    const [time, setTime] = useState(new Date())
    console.log('루트') // 2
    useEffect(() => { // setInterval 은 한번 실행할 때 시스템 메모리 자원을 사용하므로 동작하지 않을때는 멈춰야 하므로 useEffect가 효율적이다.
                        // useEffect는 의존석 목록 에 있는 조건 중 어느 하나라도 충족되면 그 때마다 콜백 함수를 다시 실행한다. 컴포넌트를 실행할 때 한번만
                        // 실행하려면 의존성 목록에 [] 로 두면 된다. 여기는 컴포넌트가 생성될 때 실행됨.
        const id = setInterval(() => {
        setTime(new Date()) // setTime이 실행될 때마다 App 이 재렌더링 함
        console.log('setTime')  // 5
        }, 1000)

        return() => {
        clearInterval(id) // 6
        console.log('clearInterval')
        } // 컴포넌트를 파괴할 때 한 번 실행됨.
    }, [])
    console.log('끝')   // 3
    return time
}