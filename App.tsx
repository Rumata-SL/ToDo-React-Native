import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, ImageBackground} from "react-native";
import {Main} from "./src/Main";



// const image = { uri: "https://oir.mobi/uploads/posts/2021-03/1616972882_17-p-fon-dlya-telefona-android-17.jpg" };
const image = { uri: "https://i.pinimg.com/originals/52/5b/2d/525b2d6f6a9f95d8f785c7b95e072571.jpg" };
// const image = { uri: "https://www.youloveit.ru/uploads/posts/2018-01/1516461234_youloveit_ru_rozovye_negnye_fony_dlya_telefona02.png" };

export default function App() {
    return (
        <View style={styles.container}>
        <ImageBackground
            resizeMode="cover"
            style={styles.img}
            source={image}
        >
            <Main/>
            <StatusBar style="inverted"/>
        </ImageBackground >
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        // paddingHorizontal: 5,
        // alignItems: 'center',

    },
    img:{
        flex: 1,
        // justifyContent: 'center',
    },
});
