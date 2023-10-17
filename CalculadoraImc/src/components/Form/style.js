import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    formContext:{
        width: "auto",
        height:"auto",
        backgroundColor: "#1a1a1a", 
        alignItems: "center",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        borderColor: "#4E4E4E",
        borderWidth: 1.5,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 7 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    form:{
        width: 300,
        height: "auto",
        paddingLeft: 10,
        paddingRight: 10,
    },

    label:{
        color: "#fff",
        fontSize: 14,
        paddingLeft: 10,
    },

    input:{
        width: "100%",
        borderRadius: 2,
        backgroundColor: "#333333",
        height: 40,
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 10,
        color: "#fff",
        placeholderTextColor: '#808080',
    },

    buttonCalculator:{
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0074ef",
        height: 40,
        marginTop: 10,
    },

    textButtonCalculator:{
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',
    },

    information:{
        color: "#fff",
        fontFamily: "sans-Serif",
        alignContent: "center",
        fontSize: 14,
        marginTop: 10,
    },

    number:{
        fontSize: 48,
        color: "#fff",
        fontWeight: 'bold',
        fontFamily: "sans-Serif",
        marginTop: 10,
        marginBottom: 10,
    },

    result:{
        width: "100%",
        alignItems: "center",
    },

    icon:{
        marginRight: 10,
    },

    buttonShare:{
        width: "100%",
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333",
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
    },

    form2:{
        width: "100%",
        height: "auto",
        marginTop: 10,
        marginBottom: 10,
    },

    errorMessage:{
        fontSize: 10,
        color: "#CC0000",
        fontWeight: "bold",
        paddingLeft: 10,
        fontFamily: "sans-Serif",
    },
    
    erro:{
        flexDirection: 'row',
    },
});

export default styles