import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) =>{
    return(
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg" }}
            />

            {/* Bed & Bedrrom text */}
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam maxime optio sint omnis. Fugit officiis culpa modi beatae error?
            </Text>

            {/* Old Price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30 </Text>
                / night
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post;