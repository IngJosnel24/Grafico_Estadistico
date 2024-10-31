import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

export default function GraficoSalarios({ dataSalarios }) {
const chartRef = useRef(); // Referencia al gráfico
const screenWidth = Dimensions.get("window").width;

return (
    <View style={styles.container}>
    <View ref={chartRef} collapsable={false} style={styles.chartContainer}>
        <BarChart
        data={dataSalarios}
        width={screenWidth - screenWidth * 0.1}
        height={300}
        yAxisLabel="C$"
        chartConfig={{
            backgroundGradientFrom: "#00FFFF",
            backgroundGradientFromOpacity: 0.1,
            backgroundGradientTo: "#FFFFFF",
            backgroundGradientToOpacity: 1,
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            strokeWidth: 1,
            barPercentage: 0.5,
        }}
        style={{
            borderRadius: 10,
        }}
        verticalLabelRotation={45}
        withHorizontalLabels={true}
        showValuesOnTopOfBars={true}
        />
    </View>

    </View>
);
}

const styles = StyleSheet.create({
container: {
    backgroundColor: '#fff',
    margin: 10,
},
chartContainer: {
    alignItems: 'center',
    marginVertical: 10,
},
button: {
    marginTop: 10,
},
});