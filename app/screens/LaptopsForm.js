import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "@rneui/base"
import { useState } from "react"
import { saveLaptopsRest, updateLaptopsRest, deleteLaptopsRest } from "../rest_client/laptops"

export const LaptopsForm = ({ navigation, route }) => {
    let laptopRetrieved = route.params.laptopParam;
    let isNew = true;
    if (laptopRetrieved != null) {
        isNew = false;
    }
    const [marca, setMarca] = useState(isNew ? null : laptopRetrieved.marca);
    const [procesador, setProcesador] = useState(isNew ? null : laptopRetrieved.procesador);
    const [memoria, setMemoria] = useState(isNew ? null : laptopRetrieved.memoria);
    const [disco, setDisco] = useState(isNew ? null : laptopRetrieved.disco);

    const showMessage = (message) => {
        Alert.alert("CONFIRMACION", message);
        navigation.goBack();
    }

    const createLaptop = () => {
        console.log("Save Laptop");
        saveLaptopsRest(
            {
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessage
        )
    }
    const updateLaptop = () => {
        console.log("Update Laptop");
        updateLaptopsRest(
            {
                id: laptopRetrieved.id,
                marca: marca,
                procesador: procesador,
                memoria: memoria,
                disco: disco
            },
            showMessage
        )

    }
    const confirmacionLaptop = () =>{
        Alert.alert("CONFIRMACION",
            "Etas seguro de que quieres eliminar?",
            [{
                text: "SI",
                onPress:deleteLaptop
            },
            {
                text: "CANCELAR"
            }]
        )
    }
    const deleteLaptop = () => {
        deleteLaptopsRest({
            id: laptopRetrieved.id
        },
        showMessage
    )
    }

    return <View style={styles.container}>
        <Input
            value={marca}
            placeholder="MARCA"
            onChangeText={(value) => {
                setMarca(value);
            }}
        />
        <Input
            value={procesador}
            placeholder="PROCESADOR"
            onChangeText={(value) => {
                setProcesador(value);
            }}
        />
        <Input
            value={memoria}
            placeholder="MEMORIA"
            onChangeText={(value) => {
                setMemoria(value);
            }}
        />
        <Input
            value={disco}
            placeholder="DISCO"
            onChangeText={(value) => {
                setDisco(value);
            }}
        />
        <Button
            title="GUARDAR"
            onPress={isNew ? createLaptop : updateLaptop}
        />
        {
            isNew ? <View></View> : <Button
                title="ELIMINAR"
                onPress={confirmacionLaptop}
            />
        }
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