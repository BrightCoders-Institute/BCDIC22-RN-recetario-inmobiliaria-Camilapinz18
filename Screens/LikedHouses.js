import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import HouseCard from '../Components/HouseCard'
import SearchBar from '../Components/SearchBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
//const data = require('../data.json')
const data = require('../dataParsed3.json')

export default function LikedHouses () {
  const housesLiked = useSelector(state => state)
  const values = Object.values(housesLiked)
  const houseRender = []
  //console.log('values', values)
  //console.log('data', data)
  
  values.map(value =>
    value.liked
      ? houseRender.push(data.find(house => house.property_id === value.name))
      : ''
  )
  const isAny = houseRender.length
  console.log('ANY', isAny)
  
  //console.log('houseRender', houseRender)
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {isAny === 0 ? (
            <View style={styles.alert}>
              <Text style={styles.textAlert}>
                You don't have any favorite houses yet!
              </Text>
              <Ionicons
                name='sad-outline'
                style={styles.icon}
                size={30}
                color='#CACACA'
              />
            </View>
          ) : (
            ''
          )}
          {houseRender.map(info => {
            return (
              <HouseCard
                key={info.property_id}
                  image={info.image}
                  name={info.property_id}
                  address={info.address.city}
                  bedrooms={info.beds}
                  bathrooms={info.baths}
                  size={info.building_size?.size}
                  cost={info.price}
                  rating={4.5}
                  
              />
              
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: '#E5E5E5'
    //backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
    // justifyContent: 'center'
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  textAlert: {
    color: 'grey',
    fontSize: 16,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 200,
    textAlign: 'center'
  },
  alert: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 15
  }
})
