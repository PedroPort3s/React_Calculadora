import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const [operador,setOperador] = useState(null);  
  const [operacao,setOperacao] = useState(null);

  const operadores = ['/','*','-','+'];

  function numerico(c) { 
    return /\d/.test(c); 
  }

  function clearOperation(){
    setNum1(0);
    setNum1(1);
    setOperacao(null);
  }

  function mountOperation(num){

    if(numerico(num)){

    }
    else if (num == ','){

    }    
  }

  function setNumber(num){
    
    if(operacao.includes(operador)){//contém um operador
      setNum2(`{num2}` + num);
    }
    else{
      setNum1(`{num1}` + num);
    }
  }


  function execute(){
    
  }

  return (
    <View style={styles.container}>
       <TextInput showSoftInputOnFocus={false} label="Calculadora" ref={input => { this.textNum1 = input }} style={styles.input}/>       

        {/* OPERADORES */}
        <Pressable onPress={()=>{setOperador('+')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>+</Text>
        </Pressable>
        <Pressable onPress={()=>{setOperador('-')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>-</Text>
        </Pressable>
        <Pressable onPress={()=>{setOperador('/')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>÷</Text>
        </Pressable>
        <Pressable onPress={()=>{setOperador('*')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>x</Text>
        </Pressable>

        {/* ESPECIAIS */}
        <Pressable onPress={execute} style={styles.btnEspecial}>
          <Text style={styles.txtButton}>=</Text>
        </Pressable>

        <Pressable onPress={clearOperation} style={styles.btnEspecial}>
          <Text style={styles.txtButton}>C</Text>
        </Pressable>

        <Pressable onPress={this.addTxtLista} style={styles.btnEspecial}>
          <Text style={styles.txtButton}>,</Text>
        </Pressable>

        {/* NUMEROS */}
        <Pressable onPress={mountOperation(0)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>0</Text>
        </Pressable>

        <Pressable onPress={mountOperation(1)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>1</Text>
        </Pressable>

        <Pressable onPress={mountOperation(2)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>2</Text>
        </Pressable>

        <Pressable onPress={mountOperation(3)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>3</Text>
        </Pressable>

        <Pressable onPress={mountOperation(4)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>4</Text>
        </Pressable>

        <Pressable onPress={mountOperation(5)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>5</Text>
        </Pressable>

        <Pressable onPress={mountOperation(6)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>6</Text>
        </Pressable>

        <Pressable onPress={mountOperation(7)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>7</Text>
        </Pressable>

        <Pressable onPress={mountOperation(8)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>8</Text>
        </Pressable>

        <Pressable onPress={mountOperation(9)} style={styles.btnNumeros}>
          <Text style={styles.txtButton}>9</Text>
        </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton:{
    color:'white'
  },
  btnOperadores:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  btnNumeros:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
  },
  btnEspecial:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  input: {
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:10,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
