import React from 'react'
import { View, ImageBackground, Text, Pressable } from 'react-native'
import styles from './styles';


const HomeScreen = (props) => {
  return (
      <View>
        {/* Search bar */}
        <Pressable 
            style={styles.searchButton}
            onPress={()=> console.warn("Search btn Clicked!")}
          >
            <Text style={styles.searchButtonText}>🔍 Where are you going?</Text>
          </Pressable>

        <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
          {/* Title */}
          <Text style={styles.title}>Go Near</Text>
          
          {/* Button */}
          <Pressable 
            style={styles.button}
            onPress={()=> console.warn("Explore btn Clicked!")}
          >
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </ImageBackground>
      </View>
  )
}

export default HomeScreen