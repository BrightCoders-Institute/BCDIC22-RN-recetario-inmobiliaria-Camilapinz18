import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import ButtonsContainer from '../Components/ButtonsContainer'
import ValueSlider from '../Components/ValueSlider'

export default function Search () {
  return (
    <View style={styles.mainContainer}>
      <ButtonsContainer text='Rooms' number={6} />
      <ButtonsContainer text='Bathrooms' />
      <ButtonsContainer text='Rating' />
      <ValueSlider />
      <ValueSlider />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'space-around',
    //alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '90%',
    //height: 100,
    alignSelf: 'center',
    flex: 1
  }
})
