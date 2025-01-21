import {View, Text, StyleSheet, FlatList} from "react-native"
import {Button} from "@rneui/base"
import {getAllLaptops} from "../rest_client/laptops"
import { useState } from "react"
import { ListItem } from '@rneui/themed'

export const LaptopsList = () => {
    const [laptopList, setLaptopList] = useState([]);

    const LaptopItem = ({laptop}) => {
        return <View>
        <Text>...........................................</Text>
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>{laptop.marca} {laptop.memoria}</ListItem.Title>
                <ListItem.Subtitle>{laptop.procesador}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    </View>
        
    }

    const fnRefreshList = (laptops) => {
        setLaptopList(laptops);
    }

    return <View style={styles.container}>
    <Text>LISTA DE LAPTOPS</Text>
    <Button
        title="Consultar"
        onPress={()=>{
            getAllLaptops(fnRefreshList);
        }}
    />
    <FlatList
        data={laptopList}
        renderItem={({item})=>{
            return <LaptopItem laptop = {item}/>
        }}
    />
</View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });