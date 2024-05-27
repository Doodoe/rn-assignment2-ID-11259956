import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>My name is </Text>
        <Text styles={styles.subtitle} >Abdul Malik Abdallah</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    flex:1,
    justifyContent:"center",
    maxWidth:960,
    marginHorizontal:"auto"
  
  },
  text:{
    fontSize:24,
  },
  subtitle:{
    fontSize:24,
    fontWeight:"bold",
  },
});
