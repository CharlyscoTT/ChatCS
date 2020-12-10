import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base';


export default function Input (props)  {
    const {sendMessage} = props;
    const [message, setMessage] = useState("");

    const onSubmit = () =>{
        if (message.length > 0){
            sendMessage(message);            
        }
    }

    return (
        <View style={styles.container}>
            <Item style={styles.ItemInput}>
                <InputNB 
                    placeholder="Mensaje..." 
                    placeholderTextColor="grey"
                    style={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.nativeEvent.text)}

                />

                <TouchableOpacity onPress={onSubmit}>
                    <Icon name="send" type="FontAwesome" style={{ color:"#fff"}} />
                </TouchableOpacity>
            </Item>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#162028",
        paddingBottom: 0,
        paddingHorizontal:20,        
    },

    ItemInput:{
        borderColor: "#162028",
    },
    
    input:{
        color:"#fff",
    }

})
