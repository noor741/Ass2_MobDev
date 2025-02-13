import React from "react";
import { Text, View, Image } from "react-native";
import ButtonTemplate from "../../components/buttonTemp";

const CalgaryScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, padding: 10, marginBottom: 20, alignContent: 'center' }}>This is the page for Calgary city</Text>
            <Image source={require('../../assets/calgary.jpg')} />
            <ButtonTemplate link={"../"} text={"Home"} color="Blue" />
        </View>
    );
};

export default CalgaryScreen;
