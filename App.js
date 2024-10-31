import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import GraficoSalarios from './src/components/GraficoSalario';
import GraficoGeneros from './src/components/GraficoGenero';
import { collection, getDocs, query } from 'firebase/firestore';

//Importación de conexión a firebase{}
import db from './db/firebaseconfig';

export default function Graficos() {

        const [dataProgreso, setDataProgreso] = useState({
            labels: [''],
            data: [0]
        });

const [bandera, setBandera] = useState(false); // Variable bandera
const [dataSalarios, setDataSalarios] = useState({
    labels: [''],
    datasets: [{ data: [0] }]
});
const [dataGeneros, setDataGeneros] = useState([]); // Para almacenar datos de géneros


// Carga de datos de salarios
useEffect(() => {
    const recibirDatosSalarios = async () => {
    try {
        const q = query(collection(db, "personas"));
        const querySnapshot = await getDocs(q);
        const nombres = [];
        const salarios = [];

        querySnapshot.forEach((doc) => {
        const datosBD = doc.data();
        const { nombre, salario } = datosBD;
            nombres.push(nombre); // Agrega nombre a la lista
            salarios.push(salario); // Agrega edad a la lista
        });

        // Actualiza el estado con el formato requerido
        setDataSalarios({
        labels: nombres,
        datasets: [{ data: salarios }]
        });

        console.log({ labels: nombres, datasets: [{ data: salarios }] });
    } catch (error) {
        console.error("Error al obtener documentos: ", error);
    }
    };

    recibirDatosSalarios();
}, [bandera]);

// Carga de datos de géneros
useEffect(() => {
    const recibirDatosGeneros = async () => {
    try {
        const q = query(collection(db, "personas"));
        const querySnapshot = await getDocs(q);
        let masculino = 0;
        let femenino = 0;

        querySnapshot.forEach((doc) => {
        const datosBD = doc.data();
        const { genero } = datosBD;

        if (genero === "Masculino") {
            masculino += 1; // Suma para Masculino
        } else if (genero === "Femenino") {
            femenino += 1; // Suma para Femenino
        }
        });

        // Formatear datos para el gráfico de pastel
        const totalData = [
        {
            name: "Masculino",
            population: masculino,
            color: "#304fdc",  // Azul con 50% de intensidad
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "Femenino",
            population: femenino,
            color: "#dc30ad",  // Rosa con 50% de intensidad
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        }
        ];

        totalPersonas = masculino + femenino;

    const progresos = [masculino/totalPersonas, femenino/totalPersonas]

    setDataProgreso({
        labels: ['Hombres', 'Mujeres'],
        data: progresos
    });

        setDataGeneros(totalData);
        console.log(totalData);
    } catch (error) {
        console.error("Error al obtener documentos: ", error);
    }
    };

    recibirDatosGeneros();
}, [bandera]);

return (
    <View style={styles.container} >
    <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <Formulario setBandera={setBandera}/> */}
        <GraficoSalarios dataSalarios={dataSalarios}/>
        <GraficoGeneros dataGeneros={dataGeneros}/>
    </ScrollView>

    </View>

);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
scrollView: {
    padding: 10,
},
graphContainer: {
    marginTop: 10,
    padding: 10,
},
}); 