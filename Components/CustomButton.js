import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity
} from 'react-native'

export default function CustomButton ({number}) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00B074',
    width: 40,
    height:40,
    borderRadius:100,
    display:'flex',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:16
  }
})
