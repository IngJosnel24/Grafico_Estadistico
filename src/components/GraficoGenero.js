import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function GraficoGeneros({ dataGeneros }) {
const chartRef = useRef(); // Referencia al gráfico
const screenWidth = Dimensions.get("window").width;
const chartWidth = screenWidth - screenWidth * 0.1; // Ancho ajustado según la pantalla
const chartHeight = 300; // Altura del gráfico

return (
    <View style={styles.container}>
    <View ref={chartRef} collapsable={false} style={styles.chartContainer}>
        <PieChart
        data={dataGeneros}
        width={chartWidth}
        height={chartHeight}
        chartConfig={{
            backgroundColor: "#fff", // Color de fondo
            backgroundGradientFrom: "#f0f0f0", // Color inicial del gradiente
            backgroundGradientTo: "#f0f0f0", // Color final del gradiente
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Cambia los colores del gráfico
        }}
        accessor={"population"}
        paddingLeft={45}
        backgroundColor={"transparent"}
        style={{
            borderRadius: 10,
        }}
        />
    </View>

    </View>
);
}

const styles = StyleSheet.create({
container: {
    margin: 10,
},
chartContainer: {
    alignItems: "center",
    marginVertical: 10,
},
button: {
    marginTop: 10,
},
});