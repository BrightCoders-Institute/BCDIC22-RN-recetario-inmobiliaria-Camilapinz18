import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'

import HouseCard from '../Components/HouseCard'

const data = require('../data.json')

export default function App () {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    console.log('effect')

    data.map(info =>
      setHouses(houses => {
        return houses.concat({ name: info.name, liked: false })
      })
    )
  }, [])

  //houses.map(house=>console.log("house",house))

  const liked = name => {
    const houseObject = houses.find(house => house.name === name)
    const houseLiked = houseObject?.liked
    //console.log('houseobjects', houseObject?.liked)
    //console.log("XXX",houseObject.liked)
    return houseLiked
  }

  const setLikedHouse = name => {
    let equalName = houses.find(house => (house.name === name ? setHouses : ''))

    let newHouseLiked = {
      name: equalName.name,
      liked: true
    }
    let newHouseUnLiked = {
      name: equalName.name,
      liked: false
    }
    let newHouses = []
    equalName.liked
      ? (newHouses = houses.map(house =>
          house.name === equalName.name
            ? (house = { ...house, liked: false })
            : house
        ))
      : (newHouses = houses.map(house =>
          house.name === equalName.name
            ? (house = { ...house, liked: true })
            : house
        ))
    //console.log('newHOuses', newHouses)
    setHouses(newHouses)
    //console.log('Houses', houses)
    //console.log('equal', equalName)
    //console.log('newHouseLiked', newHouseLiked)

    // setHouses(house=>house.name==equalName.name? house.liked=true:'')
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          {data.map(info => {
            return (
              <HouseCard
                key={info.id}
                image={info.image}
                name={info.name}
                address={info.address}
                bedrooms={info.bedrooms}
                bathrooms={info.bathrooms}
                size={info.size}
                cost={info.cost}
                rating={info.rating}
                houseObject={liked(info.name)}
                houses={houses}
                setLikedHouse={setLikedHouse}
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
    // justifyContent: 'center'
  }
})
