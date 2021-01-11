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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
          <View style={styles.container}>
              <View style={styles.item_2}>
                <Button
                  title="Limpar"
                  color="#dc3545"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
              <View style={styles.item_2}>
                <Button
                  title="Resultado"
                  color="#007bff"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
              <View style={styles.item_3}>
                <Text>Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste </Text>
              </View>
              <View style={styles.item_3}>
                <Button
                  title="Resultado"
                  color="#007bff"
                  onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
              </View>
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
  item_3: {
    padding: 5,
    width: '33%',
  },
  item_2: {
    padding: 5,
    width: '50%',
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
});

export default App;
