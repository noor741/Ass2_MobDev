import React from "react";
import { Text, View, Image } from "react-native";
import ButtonTemplate from "../../components/buttonTemp";

const EdmontonScreen = () => {
    return (
        <View>
            <Text>This is the page for Edmonton city</Text>
            <Image source={require('../../assets/edmonton.jpg')} />
            <ButtonTemplate link={"../"} text={"Home"} color="Blue" />
        </View>
    );
};

export default EdmontonScreen;
