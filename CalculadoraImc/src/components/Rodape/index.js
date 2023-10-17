import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Rodape(){
    return(
        <View style={styles.formContext}>
            <View style={styles.formMain}>
                <Text style={styles.labelMain}>IMC</Text>
                <Text style={styles.labelMain}>Cassificação</Text>
            </View>

            <View style={styles.divMain}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Menor que 17</Text>
                <Text style={styles.label}>Magreza</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Entre 18 e 24</Text>
                <Text style={styles.label}>Normal</Text>
            </View>

            <View style={styles.div}></View>
            
            <View style={styles.form}>
                <Text style={styles.label}>Entre 25 e 29</Text>
                <Text style={styles.label}>Sobrepeso</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Entre 30 e 34</Text>
                <Text style={styles.label}>Obesidade grau I</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Entre 35 e 39</Text>
                <Text style={styles.label}>Obesidade grau II</Text>
            </View>

            <View style={styles.div}></View>

            <View style={styles.form}>
                <Text style={styles.label}>Maior que 40</Text>
                <Text style={styles.label}>Obesidade grau III</Text>
            </View>
        </View>
    );

}