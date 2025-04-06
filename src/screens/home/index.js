import {View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import MyButton from '../../components/button';


export default function Home(){
    const [precoGasolina, setPrecoGasolina] = useState('');
    const [precoAlcool, setPrecoAlcool] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcular = () => {
        const pa = parseFloat(precoAlcool); //pa = preço alcool
        const pg = parseFloat(precoGasolina); //pg = preço galosina, n confungir com progressã geometrica e artimética kkkk
        if (!isNaN(pa) && !isNaN(pg) ) { //checa se pa e pg tem valores
            const resultadoCalculado = pa / pg; 
            if (resultadoCalculado >0.7){
                setResultado('A gasolina compensa mais!!');
            }else if(resultadoCalculado < 0.7){
                setResultado('O Etanol compensa mais!!')
            }else{
                setResultado('Tanto faz :| ')
            }
        }else{
            setResultado('Coloque valores válidos');
        }
    }

    const resetar = () => {
        setPrecoAlcool('');
        setPrecoGasolina('');
        setResultado(null);
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Alcool ou Gasolina</Text>
            
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/gasolina.png')} style={styles.image}/>
            </View>
            <Text style={styles.label}> Valor do Álcool (R$)</Text>
            <TextInput style={styles.input} placeholder='Digite o valor do alcool' keyboardType='numeric' value={precoAlcool} onChangeText={setPrecoAlcool}/>
            
            <Text style={styles.label}>Valor da Gasolina (R$)</Text>
            <TextInput style={styles.input} placeholder='Digite o valor da gasolina' keyboardType='numeric' value={precoGasolina} onChangeText={setPrecoGasolina}/>

            <View style={styles.botoesContainer}>
                <MyButton title='Calcular' onPress={calcular} color='green'/>
                <MyButton title='Resetar'onPress={resetar} color='black'/>
            </View>

            <Text style={styles.resultado}>{resultado}</Text>
        </View>
    )
}