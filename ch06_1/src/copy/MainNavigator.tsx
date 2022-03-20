import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Fetch from "../screens/Fetch";
import Interval from "../screens/Interval";
import LifeCycle from "../screens/LifeCycle";
import Timer from "../screens/Timer";

export default function MainNavigator() {

    const [index, setIndex] = useState<number>(0)
    const [routes] = useState([
        {key: 'life', title: 'LifeCycle', icon: 'page-layout-header-footer'},
        {key: 'timer', title: 'Timer', icon: 'clock-time-four'},
        {key: 'interval', title:'Interval', icon:'timeline'},
        {key: 'fetch', title: 'Fetch', icon: 'history'}
    ])

    const renderScene = BottomNavigation.SceneMap({
        life: LifeCycle,
        timer: Timer,
        interval: Interval,
        fetch: Fetch
    })

    return (
        <BottomNavigation 
            navigationState={{index, routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}