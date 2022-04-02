import React, { useState } from "react";
import { Alert, Button, Modal, Text, View } from "react-native";

const Modalsample = () => {
    const [modal, setModal] = useState<boolean>(false)
    
    return(
        <View style={{width:'100%'}}>
            <Button 
                title="Open Modal"
                onPress={() => setModal(!modal)}
            />

            <Modal
                visible={modal}
                animationType={'slide'}
                onShow={() => Alert.alert('warning')}
            >
                <View style={{
                    marginTop: 60,
                    backgroundColor:'red'
                }}>
                    <Text>
                        this is modal content
                    </Text>
                </View>
                <Button 
                title="go back"
                onPress={() => setModal(!modal)}
            />
            </Modal>
        </View>
        
    )
}
export default Modalsample