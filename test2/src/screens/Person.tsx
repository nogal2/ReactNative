import React from "react";
import type { FC } from "react";
import { Text } from "react-native";


export type PersonProps = {
    person:string
}

/* 
 function createElement<P extends {}>(
        type: FunctionComponent<P>,
        props?: Attributes & P | null,
        ...children: ReactNode[]): FunctionComponentElement<P>;
*/

const Person: FC<PersonProps> = (name:any) => {
    const {person} = name
    return <Text>{person}</Text>
}

export default Person