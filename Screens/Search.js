import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput
} from 'react-native'
import CustomButton from '../Components/CustomButton'

export default function Search () {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Location</Text>
        <View style={styles.placeContainer}>
          <TextInput
            style={styles.input}
            placeholder='Where do you want your house?'
          />
        </View>
        <Text style={styles.titleText}>Price</Text>
        <View style={styles.areaContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>From</Text>
            <TextInput style={styles.textInput} placeholder='$ 0'></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>To</Text>
            <TextInput placeholder='$ 0' style={styles.textInput}></TextInput>
          </View>
        </View>
        <Text style={styles.titleText}>Area</Text>
        <View style={styles.areaContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>From</Text>
            <TextInput style={styles.textInput} placeholder='0'></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>To</Text>
            <TextInput placeholder='0' style={styles.textInput}></TextInput>
          </View>
        </View>


        <View style={styles.roomsContainer}>
          <View style={styles.bedroomsContainer}>
            <View>
              <Text>Bedrooms</Text>
            </View>

            <View style={styles.addButtons}>
              <Text>-</Text>
              <Text>0</Text>
              <Text>+</Text>
            </View>
          </View>
          <View style={styles.bedroomsContainer}>
            <Text>Bathrooms</Text>
            <View style={styles.addButtons}>
              <Text>-</Text>
              <Text>0</Text>
              <Text>+</Text>
            </View>
          </View>
          <View style={styles.bedroomsContainer}>
            <View>
              <Text>Rating</Text>
            </View>

            <View style={styles.addButtons}>
              <Text>-</Text>
              <Text>0</Text>
              <Text>+</Text>
            </View>
          </View>
        </View>

        <CustomButton text='Search'/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    //backgroundColor:'green',
    //justifyContent:'space-evenly',
    alignItems: 'center'
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    //height: 100,
    alignSelf: 'center',
    alignItems: 'center'
    , marginTop:10,
    marginBottom:10
    //backgroundColor: 'red'
  },
  input: {
    // backgroundColor: 'white',
    width: '87%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputPriceContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    //backgroundColor: 'red',
  },
  priceTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%'
  },
  inputPrice: {
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  areaContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    width: '90%',
    justifyContent: 'center'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'blue',
    // width: 100,
    margin: 10
  },
  textInput: {
    //backgroundColor:'green',
    
    padding: 5,
    width: 130,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CACACA',
    padding: 8
  },
  inputText: {
    fontSize: 13,
    marginBottom: 1
  },
  titleText: {
    //backgroundColor:'blue',
    width: '78%',
    fontWeight: 'bold',
    fontSize: 16
  },
  roomsContainer: {
    display: 'flex',
    flexDirection: 'column',
    //backgroundColor: 'yellow',
    width: '80%'
    //justifyContent:'center',
    // alignContent:'space-evenly'
  },
  bedroomsContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
    marginTop: 10
  },
  addButtons: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'gray',
    //alignSelf:'flex-end',
    borderWidth: 1,
    borderColor: '#CACACA',
    borderRadius: 5,
    width: 75,
    justifyContent: 'space-around',
    padding: 2
  }
})
