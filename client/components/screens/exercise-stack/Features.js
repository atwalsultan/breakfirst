import React from 'react'
import {  Box } from 'native-base';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
export default function FeaturesScreen({navigation}) {
    return (
      
      <Box style={styles.container} safeAreaTop>
      <Box
        style={styles.image}
      ></Box>
      <Text style={styles.h1}>Body twister</Text>
      <Text style={styles.text}>Hold your phone with two hands. Don’t bend your elbows. Twist your upper body left and right. Keep your knees forward. 
</Text>
      <Text style={styles.blue}>Click start and the app will begin to detect yout motion and record your exercise.</Text>
      <TouchableOpacity
        style={styles.exerciseButton}
        onPress={() => {
          // logic
          navigation.navigate("Details")
        }}
      >
        <Text style={styles.exerciseButtonText}>Start exercise</Text>
      </TouchableOpacity>
      </Box>
    
    );
  }

  const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 68,
    flex: 1,
  },
  image: {
    height: 175,
    width: 175,
    borderRadius: 87.5,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    marginBottom: 32,
  },
  h1: {
    fontSize: 28,
    fontFamily: "josefin-bold",
    textAlign: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    fontFamily: "josefin-regular",
    textAlign: "center",
    marginBottom: 32,
  },
  blue:{
    color:'#355C97',
    fontSize: 18,
    fontFamily: "josefin-regular",
    textAlign: "center",
    marginBottom: 32,
  },
  exerciseButton: {
    backgroundColor: "#F94144",
    width: "45%",
    alignSelf: "center",
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "josefin-regular",
  },
  
});