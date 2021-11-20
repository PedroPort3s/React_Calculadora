import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';

export default function App() {  
  const [operacao,setOperacao] = useState('');
  const [operacaoRealizada,setOperacaoRealizada] = useState(false);
  const [resultado,setResultado] = useState(0);

  const operadores = ['/','*','-','+'];
  const numeros = [0,1,2,3,4,5,6,7,8,9];

  function clearOperation(){       
    setResultado(0);
    setOperacaoRealizada(false);
    setOperacao([...'']);
    console.log('limpou ' + operacao)
  }

  function ehNumero(str){
    return /^\d+$/.test(str);
  }

  function mountOperation(char){

    if(operacaoRealizada){
      let resultadoAnterior = resultado;
      clearOperation();
      console.log('segunda vez resultado ' + resultadoAnterior);
      console.log('segunda vez ' + char);
      setOperation(resultadoAnterior);
    }

    if (ehNumero(char)){
      setOperation(char);
    }
    else if (char == ','){ 
      setOperation(char);  
    }
    else if (!operadores.some(o=>operacao.includes(o))){ // SOMENTE SE A OPERAÇÃO NÃO CONTER OPERADOR            
      setOperation(char);
    }
  }

  function setOperation(char){
    let opera = operacao;

    opera += char;

    setOperacao(`${opera}`);
  }

  const regexGlobalPonto = /\./g;
  const regexGlobalVirgula = /,/g;

  function execute(){

    try {

      if(operacao == '' || operacao == undefined){
        throw new Error('Não há uma operação a ser realizada');
      }

      let opera = operacao;

      opera = opera.replace(regexGlobalVirgula,'.');

      let op = null;

      for (let index = 0; index < operadores.length; index++) {
        op = operadores[index];

        if (opera.includes(op)) {
          break;
        }
        else{
          op = null;
        }
      }

      if (op == null) {        
        throw new Error('Informe a operação a ser feita.');
      }

      let numerosOperacao = opera.split(op);

      let num1 = parseFloat(numerosOperacao[0].trim());
      let num2 = parseFloat(numerosOperacao[1].trim());

      let operacaoFormatada = `${num1} ${op} ${num2}`;

      let resultado = eval(operacaoFormatada);

      operacaoFormatada += ` = ${resultado}`;

      setResultado(resultado);
      setOperacao(operacaoFormatada.replace(regexGlobalPonto,','));

      setOperacaoRealizada(true);
    }
    catch(ex){
      clearOperation();
      Alert.alert('Atenção', ex.message);
    }
  }
  
  return (
    <View style={styles.container}>

       <Text style={styles.txtAtividade}>Pedro Daniel Portes RA: 2019102845</Text>
       <Text style={styles.txtAtividade}>Calculadora</Text>

       <Text style={styles.input}>{operacao}</Text>     

       <View style={styles.botoes}>
        {/* OPERADORES */}
        <Pressable onPress={()=>{mountOperation('+')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>+</Text>
        </Pressable>
        <Pressable onPress={()=>{mountOperation('-')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>-</Text>
        </Pressable>
        <Pressable onPress={()=>{mountOperation('/')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>÷</Text>
        </Pressable>
    
        <Pressable onPress={()=>{mountOperation('*')}} style={styles.btnOperadores}>
          <Text style={styles.txtButton}>x</Text>
        </Pressable>

        {/* ESPECIAIS */}        

        <Pressable onPress={()=>clearOperation()} style={styles.btnEspecial}>
          <Text style={styles.txtButton}>C</Text>
        </Pressable>

        {/* NUMEROS */}
      
          {
            numeros.reverse().map(num=>
              <Pressable key={num} onPress={()=>mountOperation(num)} style={styles.btnNumeros}>
                <Text style={styles.txtButton}>{num}</Text>
              </Pressable>
            )
          } 

          {/* VIRGULA */}
          <Pressable onPress={()=> mountOperation(',')} style={styles.btnEspecial}>
            <Text style={styles.txtButton}>,</Text>
          </Pressable>

          {/* IGUAL */}
          <Pressable onPress={()=>execute()} style={styles.btnEspecial}>
            <Text style={styles.txtButton}>=</Text>
          </Pressable>
          <StatusBar style="auto" />
      </View>
       
       
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
  txtAtividade: {
    marginTop:50,
    width:'100%',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    padding: 10,
  },
  txtButton:{
    color:'white',
    fontSize:20
  },
  botoes:{
    flexDirection: 'row',
    flexWrap:'wrap',
    width:'80%'
  },
  btnOperadores:{
    alignItems: 'center',
    justifyContent: 'center',    
    width: 60,
    height:60,
    backgroundColor: 'black',
  },
  btnNumeros:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: 60,
    height:60,
  },
  btnEspecial:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height:60,
    backgroundColor: 'red',
  },
  input: {
    marginTop:10,
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
