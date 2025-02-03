import { View, Text, StyleSheet, FlatList, TouchableHighlight } from "react-native"
import { Button, FAB } from "@rneui/base"
import { getAllLaptops } from "../rest_client/laptops"
import { useEffect, useState } from "react"
import { ListItem } from '@rneui/themed'

export const LaptopsList = ({navigation}) => {
    const [laptopList, setLaptopList] = useState([]);

    useEffect(()=>{
        getAllLaptops(fnRefreshList)
    }, [])

    const LaptopItem = ({ laptop }) => {
        return <TouchableHighlight onPress={()=>{
            navigation.navigate("LaptopsFormNav", {laptopParam:laptop})
        }}>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{laptop.marca} {laptop.memoria}</ListItem.Title>
                    <ListItem.Subtitle>{laptop.procesador}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableHighlight>

    }

    const fnRefreshList = (laptops) => {
        setLaptopList(laptops);
    }

    return <View style={styles.container}>
        <FlatList
            data={laptopList}
            renderItem={({ item }) => {
                return <LaptopItem laptop={item} />
            }}
        />
        <FAB
            title="+"
            onPress={() => { navigation.navigate("LaptopsFormNav", { }) }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    }
});