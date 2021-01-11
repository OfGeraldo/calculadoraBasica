/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
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
              style={{ height: 56, borderColor: 'gray', borderWidth: 1, fontSize:28 }}
              value={"Valor "}
            />
          </View>
          <Grid>
              <Col style={{backgroundColor: '#789'}}>
                <Text> Teste teste </Text>
              </Col>
              <Col style={{backgroundColor: '#456'}}>
                <Text> Teste teste </Text>
              </Col>
          </Grid>
          <Grid>
            <Row>
              <Col style={{width: '75%'}}>
                
                {/* Botões superiores */}
                <Row>
                  <Col style={styles.botao_topo}>
                    <Button
                      title="Limpar"
                      color="#6c757d"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                  <Col style={styles.botao_topo}>
                    <Button
                      title="Resultado"
                      color="#2abf4a"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>

                {/* Botões numericos */}
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 1 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 2 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 3 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 4 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 5 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 6 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 7 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 8 </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 9 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao}>
                    <TouchableOpacity style={styles.botao}>
                      <Text style={{fontSize:36, color: '#fff'}}> 0 </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Col>

              {/* Botões laterais */}
              <Col style={{width: '25%'}}>
                <Row>
                  <Col style={styles.botao_lateral}>
                    <Button
                      title="/"
                      color="#3366f4"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao_lateral}>
                    <Button
                      title="X"
                      color="#3366f4"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao_lateral}>
                    <Button
                      title="-"
                      color="#3366f4"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao_lateral}>
                    <Button
                      title="+"
                      color="#3366f4"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={styles.botao_lateral}>
                    <Button
                      title="&radic;"
                      color="#3366f4"
                      onPress={() => Alert.alert('Button with adjusted color pressed')}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>


            <Row size={1}>
              <View >
                <Text>Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste </Text>
              </View>
            </Row>
          </Grid>
          
        <View style={styles.btnContainer}>
          <TouchableOpacity>
          <Button
            title="+"
            color="#3366f4"
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
          <Text>Change Address</Text>
          </Button>
            </TouchableOpacity>          
          </View> 
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
    padding: 10,
    width: '100%',
  },
  botao_topo: {
    padding: 5,
  },
  botao_lateral: {
    padding: 5,
    fontSize: 56,
  },
  botao: {
    borderRadius: 25,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#007bff'
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
