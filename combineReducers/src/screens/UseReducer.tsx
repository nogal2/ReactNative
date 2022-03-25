import React, { useReducer } from "react";
import { Text, View } from "react-native";
import * as D from '../data'
import * as P from '../store/people'

export default function UseReducer() {

    const [people, dispatch] = useReducer(
        (state:D.IPerson[], action:P.Actions) => {
            switch(action.type) {
                case '@person/add':
                    return [...state, action.payload]
                case '@person/delete': 
                    return state.filter((person) => person.id !== action.payload.id)
                case '@person/deleteAll':
                    return []
            }
            return state
        }, []
    )

    const addPerson = () => dispatch(P.addAction(D.createRandomPerson()))
    const removeAllPersons = () => dispatch(P.deleteAllAction())
    const deletePerson = (id: string) => () => dispatch(P.deleteAction(id))

    return(
        <View>
            <Text>UseReducer</Text>
        </View>
    )
}