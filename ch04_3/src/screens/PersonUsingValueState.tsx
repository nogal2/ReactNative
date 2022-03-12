import React, { FC, useCallback, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import moment from "moment-with-locales-es6";
import { styles } from "./Person.style";
import * as D from '../data'
import { Avatar, IconText } from "../components";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native-paper";


moment.locale('ko')

export type PersonProps = {
    person: D.IPerson
}

const PersonUsingValueState:FC<PersonProps> = ({person: initialPerson}) => {
    
    const avatarPressed = useCallback(() => Alert.alert('avatar pressed.'), [])
    const deletePressed = useCallback(() => Alert.alert('delete pressed.'),[])
    const countIconPressed = useCallback((name:string) => () => Alert.alert(`${name} pressed`),[])

    // initialPerson.counts.comment, retweet, heart
    const [comment, setComment] = useState<number>(0)
    const [retweet, setRetweet] = useState<number>(0)
    const [heart, setHeart] = useState<number>(0)

    const commentPressed = useCallback( () => setComment( (comment)=> comment+1), [])
    /* useCallback 을 사용함으로 재랜더링할때마다 함수를 실행하게 하지 않게하는것. setComment 함수가 갱신될 때에만 실행되게 하는 것이다. 
       의존성 목록에 [comment] 하지 않고 setComment( (comment)=> comment+1) 이렇게 한 이유는 setComment함수 내부에서 comment의 현재 값을 넘겨주므로 
       useCallback 의존성 목록에 추가할 필요 없기 때문이다.
    */
    const retweetPressed = useCallback( () => setRetweet( (retweet) => retweet +1), [])
    const heartPressed = useCallback( () => setHeart( (heart) => heart +1 ), [])

    return (
        <View style={styles.view}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]} uri={initialPerson.avatar} size={50} onPress={avatarPressed} />
            </View>

            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{initialPerson.name}</Text>
                <Text style={[styles.email]}>{initialPerson.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(initialPerson.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletePressed} />
                </View>
                <Text numberOfLines={3} ellipsizeMode='tail' style={[styles.text, styles.comments]}>
                    {initialPerson.comments}
                </Text>
                <Image style={[styles.image]} source={{uri:initialPerson.image}} />

                <View style={[styles.countsView]}>
                    <IconText 
                        viewStyle={[styles.touchableIcon]}
                        onPress={commentPressed}
                        name='comment' size={24} color={Colors.blue500}
                        textStyle={[styles.iconText]} text={comment} />
                    
                    <IconText 
                        viewStyle={[styles.touchableIcon]}
                        onPress={retweetPressed}
                        name='twitter-retweet' size={24} color={Colors.purple500}
                        textStyle={[styles.iconText]} text={retweet} />

                    <IconText 
                        viewStyle={[styles.touchableIcon]}
                        onPress={heartPressed}
                        name='heart' size={24} color={Colors.red500}
                        textStyle={[styles.iconText]} text={heart} />

                </View>

            </View>
        </View>
    )
}

export default PersonUsingValueState 