import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import styles from './styles';

const data = [
  {
    id:1,
    title :"Restaurant Owner",
    description: "Person or an Organization who donates the food"
  },
  {
    id:2,
    title :"Catering Services",
    description: "Person or an Organization who helps Transporting the food"
  },
  {
    id:3,
    title :"Grocery Store",
    description: "Person or an Organization who needs the food"
  },
  {
    id:4,
    title :"Normal People",
    description: "Person or an Organization who needs the food"
  }
]

const DonorScreen = ({navigation}) => {
    const [value, setValue] = useState()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Donor,</Text>
        <Text style={styles.subHeading}>Choose Your Role</Text>
      </View>
      <View style={styles.bottomContiner}>
        {
          data.map(list => (
            <TouchableOpacity onPress={()=>{setValue(list.id)}} style={value === list.id ? styles.activeContainer : styles.listContainer} key={list.id}>
              <Text style={styles.title}>{list.title}</Text>
              <Text style={styles.description}>{list.description}</Text>
              </TouchableOpacity>
          ))
        }
      </View>
      <Button title="Continue" onPress={()=>{navigation.navigate("Transpoter")}}/>
    </View>
  )
}

export default DonorScreen