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


export default function DetailsScreen({navigation}) {
    return (
      
      <Box style={styles.container} safeAreaTop>
      <TouchableOpacity
        onPress={() => {
          // logic
          navigation.navigate("Home")
        }}
      >
      <Text style={styles.rightText}>Skip</Text>
      </TouchableOpacity>
      <Box
        style={styles.image}
      ></Box>
      <Text style={styles.h1}>Body twister</Text>
      <Box
        style={styles.image}
      ></Box>
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
  rightText: {
    fontSize: 16,
    fontFamily: "josefin-regular",
    textAlign: "right",
    
  },
  
});