import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import Separador from '../../components/Separator/'

export default function Itens(){
    {/* Ini Contadores de Like */}

    const [contador1, setContador1] = useState(0);
    const contando1 = () => setContador1(prevContador1 => prevContador1 + 1);
    const [contador2, setContador2] = useState(0);
    const contando2 = () => setContador2(prevContador2 => prevContador2 + 1);
    const [contador3, setContador3] = useState(0);
    const contando3 = () => setContador3(prevContador3 => prevContador3 + 1);

    {/* Fim Contadores de Like */}

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>Lista dos Itens:</Text>

                {/* Ini Pessoa 1 */}
                <View style={styles.div}>
                <Image style={styles.image} source={require('../../../assets/images/cardOne.jpg')} />
                <TouchableOpacity  onPress={contando1} style={styles.botao} >  
                    <Image style={styles.like} source={require('../../../assets/images/like.png')} />
                    <Text style={styles.text}>{contador1}</Text> 
                </TouchableOpacity>
                </View>
                {/* Fim Pessoa 1 */}

                <Separador />

                {/* Ini Pessoa 2 */}
                <View style={styles.div}>
                <Image style={styles.image} source={require('../../../assets/images/cardTwo.jpg')} />
                <TouchableOpacity  onPress={contando2} style={styles.botao} >  
                    <Image style={styles.like} source={require('../../../assets/images/like.png')} />
                    <Text style={styles.text}>{contador2}</Text> 
                </TouchableOpacity>
                </View>
                {/* Fim Pessoa 2 */}

                <Separador />

                {/* Ini Pessoa 3 */}
                <View style={styles.div}>
                <Image style={styles.image} source={require('../../../assets/images/cardThree.jpg')} />
                <TouchableOpacity  onPress={contando3} style={styles.botao} >  
                    <Image style={styles.like} source={require('../../../assets/images/like.png')} />
                    <Text style={styles.text}>{contador3}</Text> 
                </TouchableOpacity>
                </View>
                {/* Fim Pessoa 3 */}

            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
text: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
},
image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    margin: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
},
like: {
    justifyContent: 'center',
    alignItems: 'center',
    width:30,
    height:30,
},
div: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
},
botao: {
    justifyContent: 'center',
    alignItems: 'center',
}
});