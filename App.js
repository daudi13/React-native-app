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
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.logoImage}>
        <Image source={require("./assets/logo-red.png")} style={styles.logo} />
        <Text>Sell what You don't need</Text>
      </View>
      <View>
        <View style={styles.red} />
        <View style={styles.blue} />
      </View>
    </ImageBackground>
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
    justifyContent: 'space-between',
  },

  logoImage: {
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },

  red: {
    backgroundColor: 'red',
    width: '100vw',
    height: 50,
  },

  blue: {
    backgroundColor: 'blue',
    width: '100vw',
    height: 50,
  }
});
