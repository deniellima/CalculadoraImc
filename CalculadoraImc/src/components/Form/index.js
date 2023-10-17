import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Share } from "react-native";
import styles from "./style"; 


export default function Form(){
    const [height, setHeight] = useState(null);
    const [weight, setWeight]= useState(null);
    const [messageImc, setMessageImc] = useState ("Preencha o Peso e Altura");
    const [imc, setImc] =useState (null);
    const [textButton, setTextButton]=useState ("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + imc,
        })
    }

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

/*---------------------------------------------------------------------------------------------*/

    function verificationImc(){
        if(imc == null){
            setErrorMessage ("*Obrigatório") 
            Vibration.vibrate()
            setIsVisible(false)
            setMessageImc(null)
        }
    }


    function validationImc(){
        if (weight != null && height !=null){
            imcCalculator()
            setIsVisible(true)
            setHeight(null)
            setWeight(null)
            setMessageImc(" Seu Imc é igual a: ")
            setTextButton ("Calcular novamente")
            setErrorMessage (null)
        return
    }



/*---------------------------------------------------------------------------------------------*/

    setErrorMessage ("*Obrigatório") 
    verificationVisible()
    setImc(null)
    setIsVisible(false)
    setTextButton("Calcular")
    setMessageImc("Primeiro preencha o Peso e Altura!")
    verificationImc()
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <view style={styles.erro}>
                    <Text style={styles.label}>Altura</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input}  onChangeText={setHeight} value={height} placeholder="Ex: 1.90" keyboardType="numeric"/>

                <view style={styles.erro}>
                    <Text style={styles.label}>Peso</Text>
                    <text style={styles.errorMessage}>{errorMessage}</text>
                </view>

                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 90" keyboardType="numeric"/>

                <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>

                <view style={styles.form2}>
                    <View style={styles.result}>
                        <text style={styles.information}>{messageImc}</text>

                        <text style={styles.number}>{imc}</text>
                    </View>

                    {isVisible && <TouchableOpacity style={styles.buttonShare} onPress={onShare}>
                    
                    <svg style={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#fff"/></svg>
                    
                    <Text style={styles.textButtonCalculator}>Compartilhar</Text></TouchableOpacity>}
                </view>  
            </View>
        </View>
    );
}

