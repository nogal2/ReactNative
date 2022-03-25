import React, { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import * as P from '../store/people'
import * as D from '../data'
import { NavigationHeader } from "../theme";

export default function People() {

    const people = useSelector<AppState, P.State>(({people}) => people)
    const dispatch = useDispatch()

    const addPerson = useCallback(()=> {
        dispatch(P.addAction(D.createRandomPerson()))
    }, [])
    const removeAllPersons = useCallback(() => {
        dispatch(P.deleteAllAction())
    }, [])
    const deletePerson = useCallback(
        (id:string) => () => {
            dispatch(P.deleteAction(id))
        }, [])
    useEffect(() => D.makeArray(5).forEach(addPerson), [])

    return(
        <View style={{flex:1}}>
            <NavigationHeader title='Counter'/>
            <Text>People</Text>
        </View>
    )
}