import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Image,
  SafeAreaView,
  View,
  ImageBackground,
} from 'react-native';


const image = require("./assets/background.jpg"); 

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Image source={require("./assets/logo-red.png")} style={styles.logo} />
        <Text>Sell what You don't need</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },

  logo: {
    width: 100,
    height: 100,
  }
});
