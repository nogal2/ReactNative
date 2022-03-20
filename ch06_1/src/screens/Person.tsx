import React, { FC, useCallback, useState, useRef, useEffect, useMemo } from "react";
import { Alert, Image, Text, View, Animated, Easing } from "react-native";
import moment from "moment-with-locales-es6";
import { styles } from "./Person.style";
import * as D from '../data'
import { Avatar } from "../components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native-paper";
import { useToggle } from "../hooks";

export type PersonProps = {
    person: D.IPerson
    deletePressed: () => void
}


const Person:FC<PersonProps> = ({person, deletePressed}) => {
    const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])

    return (
        <View style={styles.view}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed} />
                <Text style={styles.text}>Press Me</Text>
            </View>

            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(person.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed} />
                </View>
                <Text numberOfLines={3} ellipsizeMode='tail' style={[styles.text, styles.comments]}>
                    {person.comments}
                </Text>
                <Image style={[styles.image]} source={{uri:person.image}} />

                <View style={[styles.countsView]}>
                    <Icon name='comment' size={24} color={Colors.blue500} />
                    <Icon name='comment' size={24} color={Colors.purple500} />
                    <Icon name='comment' size={24} color={Colors.red500} />
                </View>

            </View>
        </View>
    )
}



export default Person 