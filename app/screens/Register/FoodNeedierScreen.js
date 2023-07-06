import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import styles from './styles';

const data = [
  {
    id:1,
    title :"Non-Profit Organisation",
    description: "Person or an Organization who donates the food"
  },
  {
    id:2,
    title :"Orphanage",
    description: "Person or an Organization who helps Transporting the food"
  },
  {
    id:3,
    title :"Food Banks",
    description: "Person or an Organization who needs the food"
  }
]

const FoodNeedierScreen = ({navigation}) => {
    const [value, setValue] = useState()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Food Needier,</Text>
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
      <Button title="Continue" onPress={()=>{navigation.navigate("Login")}}/>
    </View>
  )
}

export default FoodNeedierScreen