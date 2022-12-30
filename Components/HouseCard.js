import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable
} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HouseCard ({
  name,
  address,
  bedrooms,
  bathrooms,
  size,
  cost,
  rating,
  image,
  addToLikes,
  liked,
  setLiked
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <Image
            style={styles.image}
            source={image}
          />
          <View style={styles.rating}>
          <FontAwesome
              style={styles.icon}
              name='star' //Nombre que sale en la pagina
              size={9}
              color='#EFBB15'
            />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.addressContainer}>
            <Ionicons
              style={styles.icon}
              name='location-outline' //Nombre que sale en la pagina
              size={18}
              color='black'
            />
            <Text style={styles.addressText}>{address}</Text>
          </View>
          <View style={styles.spacesContainer}>
            <FontAwesome
              style={styles.icon}
              name='bed' //Nombre que sale en la pagina
              size={20}
              color='#7C7D7D'
            />
            <Text style={styles.spacesText}>{bedrooms}</Text>
            <FontAwesome
              style={styles.icon}
              name='bath' //Nombre que sale en la pagina
              size={20}
              color='#7C7D7D'
            />
            <Text style={styles.spacesText}>{bathrooms}</Text>
            <FontAwesome
              style={styles.icon}
              name='bed' //Nombre que sale en la pagina
              size={20}
              color='#7C7D7D'
            />
            <Text style={styles.spacesText}>{size}</Text>
          </View>
          <View style={styles.costContainer}>
            <Text style={styles.costText}>{cost}</Text>
            <Pressable onPress={() => setLiked(true)}>
            
            {liked? <FontAwesome
                style={styles.iconHeart}
                name='heart' //Nombre que sale en la pagina
                size={12}
                color='white'
              />
              :
              <FontAwesome
                style={styles.iconHeart}
                name='heart' //Nombre que sale en la pagina
                size={12}
                color='red'
              />
              }
              
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 330,
    height: 130,
    borderRadius: 15,
    marginTop: 5
  },
  imageContainer: {
    //backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center'
  },
  ratingContainer:{
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'red',
    alignItems:'center'

  },
  rating:{
    backgroundColor: '#FBEEB7',
    width:40,
    height:20,
    borderRadius:9,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    position:'absolute',
    marginTop:85
    
  },
  ratingText:{
      color:"#7A6229",
      fontWeight:'bold',
      textAlign:'center',
      fontSize:10
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 8,

    margin: 15
  },
  infoContainer: {
    //backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    width: 160
  },
  nameText: {
    color: '#121222',
    fontSize: 18
  },
  addressContainer: {
    //backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    //backgroundColor: 'yellow',
  },
  addressText: {
    color: '#7C7D7D',
    fontSize: 12,
    marginLeft: 5
  },
  spacesContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    //backgroundColor: 'yellow',
    justifyContent: 'space-between'
  },
  spacesText: {
    fontWeight: 'bold'
  },
  costContainer: {
    //backgroundColor: 'green',
    height: 40,
    width: 195,
    //justifyContent:'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconHeart: {
    backgroundColor: '#00B074',
    padding: 6.2,
    width: 24,
    height: 24,
    borderRadius: 100,
    marginTop: 5
  },
  iconHeartPressed: {
    backgroundColor: '#792F9E',
    padding: 6.2,
    width: 24,
    height: 24,
    borderRadius: 100,
    marginTop: 5
  },
  costText: {
    fontSize: 15,
    fontWeight: 'bold',
    //backgroundColor: 'yellow',
    flexGrow: 2.3,
    marginBottom: 5
  }
})
