import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) =>{
    const { post } = props;
    
    return(
        <View style={styles.container}>
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{ uri: post.image }}
            />

            {/* Bed & Bedrrom text */}
            <Text style={styles.bedrooms}>{post.bed} bed{post.bed>1 && 's'} {post.bedroom} bedroom{post.bedroom>1 && 's'}</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/* Old Price & New price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>  ${post.newPrice} </Text>
                / night
            </Text>

            {/* Total Price */}
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    )
}

export default Post;