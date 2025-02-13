import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import ButtonTemp from "../components/buttonTemp";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Welcome!</Text>
            <ButtonTemp link={"/signIn"} text={"Sign In"} color="blue" />
            <ButtonTemp link={"/(tabs)/calgary"} text={"Cities"} color="blue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
