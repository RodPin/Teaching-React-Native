// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const array = ['seg', 'ter', 'quart', 'quint'];
// const App = () => {
//   function renderArray() {
//     var aux = [];

//     array.map(dia => {
//       aux.push(<Text>{dia}</Text>);
//     });
//     return aux;
//   }
//   return <>{renderArray()}</>;
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';

const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

const App = ({}) => {
  const [lista, setLista] = useState('');
  const [loading, setLoading] = useState(false);

  async function pingar() {
    setLoading(true);
    try {
      const response = await api.get('rodpin', {
        data: {},
      });
      setLista(response.data);
      // alert(JSON.stringify(response));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Spinner visible={loading} />
      <Button title="Pingar" onPress={() => pingar()}></Button>
      <Text>{lista.login}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
