/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Col, Row, Grid } from "react-native-easy-grid";

declare const global: {HermesInternal: null | {}};


const App = () => {

  const [valorTela, setValorTela] = useState(0);
  const [opcao, setOpcao] = useState("");
  const [valorOperacao, setValorOperacao] = useState(0);
  const digitos = 10;

  function zerar(){
    setValorTela(0);
  }

  function operacao(opcao: string){
    if (opcao === "raiz") {
      setValorTela(Math.sqrt(valorTela));
      setOpcao("");
      setValorOperacao(0);
    } else {
      setValorTela(0);
      setOpcao(opcao);
      setValorOperacao(valorTela);
    }
  }

  function resultado(){

    if(opcao === "adicionar"){
      setValorTela( valorOperacao + valorTela )
    }else if(opcao === "subtrar"){
      setValorTela( valorOperacao - valorTela )
    }else if(opcao === "dividir"){
      setValorTela( valorOperacao / valorTela )
    }else if(opcao === "multiplicar"){
      setValorTela( valorOperacao * valorTela )
    }
    
    setOpcao("");
    setValorOperacao(0);
  }

  function digitar(numero: number){
    setValorTela( numero + (valorTela * digitos));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.linhaInteira}>
            <TextInput
              style={{ height: 72, borderColor: 'gray', borderWidth: 1, fontSize:36, borderRadius: 12}}
              placeholder={"Valor "}
              value={valorTela+''}
            />
          </View>
          <Grid>
            <Row>
              <Col style={{width: '80%'}}>
                
                {/* Botões superiores */}
                <Row>
                  <Col style={styles.botaoSuperiorLimpar}>
                    <TouchableOpacity
                      onPress={() => zerar()}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}>Limpar</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botaoSuperiorResultado}>
                    <TouchableOpacity
                      onPress={() => resultado()}
                      >
                      <Text style={{fontSize:34, color: '#fff'}}>Resultado</Text>
                    </TouchableOpacity>
                  </Col>
                </Row>

                {/* Botões numericos */}
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(1)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 1 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(2)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 2 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(3)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 3 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(4)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 4 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(5)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 5 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(6)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 6 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(7)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 7 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(8)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 8 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(9)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 9 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}
                      onPress={() => digitar(0)}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> 0 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Col>

              {/* Botões laterais */}
              <Col style={{width: '20%'}}>
                <Row>
                  <Col style={styles.botaoLateral}>
                    <TouchableOpacity style={styles.botaoLateral}
                      onPress={() => operacao("dividir")}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> / </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botaoLateral}>
                    <TouchableOpacity style={styles.botaoLateral}
                      onPress={() => operacao("multiplicar")}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> X </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botaoLateral}>
                    <TouchableOpacity style={styles.botaoLateral}
                      onPress={() => operacao("subtrar")}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> - </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botaoLateral}>
                    <TouchableOpacity style={styles.botaoLateral}
                      onPress={() => operacao("adicionar")}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> + </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botaoLateral}>
                    <TouchableOpacity style={styles.botaoLateral}
                      onPress={() => operacao("raiz")}
                    >
                      <Text style={{fontSize:34, color: '#fff'}}> &radic; </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  linhaInteira: {
    padding: 5,
    width: '100%',
  },
  botao: {
    borderRadius: 12,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    backgroundColor: '#007bff'
  },
  botaoLateral: {
    borderRadius: 12,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    backgroundColor: '#3366f4'
  },
  botaoSuperiorLimpar: {
    borderRadius: 12,
    margin: 5,
    paddingHorizontal: 3,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#6c757d',
    width: '40%'
  },
  botaoSuperiorResultado: {
    borderRadius: 12,
    margin: 5,
    paddingHorizontal: 3,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#2abf4a'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },

  btnContainer:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
});

export default App;
