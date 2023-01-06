import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HouseCard from '../Components/HouseCard'

const data = require('../data.json')

export default function App () {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {data.map(info => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
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
                />
              </TouchableOpacity>
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
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  scrollView: {
    //backgroundColor:'yellow',
  }
})
