import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { useState } from 'react'
import HouseCard from './Components/HouseCard'

const data = require('./data.json')

export default function App () {
  const [liked, setLiked] = useState(false)
  
  const addToLikes = pushed => {

    setLiked(!liked)

/*
    const alreadyLiked = liked.find(like => like === pushed)
    alreadyLiked
      ? setLiked(liked.filter(like => like !== pushed))
      : setLiked(liked.concat(pushed))*/
 
    console.log('liked', liked)
    console.log('pushed:', pushed)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          {data.map(info => {
            return (
              <HouseCard
                key={info.name}
                image={info.image}
                name={info.name}
                address={info.address}
                bedrooms={info.bedrooms}
                bathrooms={info.bathrooms}
                size={info.size}
                cost={info.cost}
                rating={info.rating}
                addToLikes={addToLikes}
                liked={liked}
                setLiked={setLiked}
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
