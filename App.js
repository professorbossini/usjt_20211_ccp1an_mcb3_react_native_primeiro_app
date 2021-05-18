import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  render(){
    return (
      <View style={estilos.container}>
      <Text>{this.state.contador}</Text>
      <View style={estilos.estiloDoBotao}>
      <Button 
      title="Alterar texto"
      onPress={() => this.setState({contador: this.state.contador + 1})}
      />
      </View>
      </View>
      );
    }
  }
  
  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    estiloDoBotao: {
      marginTop: 20
    }
  });
  // export default function App() {
    //   //hook do react
    //   const [texto, setTexto] = useState('Texto inicial');
    //   return (
//     <View style={estilos.container}>
//       <Text>{texto}</Text>
//       <View
//         style={estilos.estiloDoBotao}>
//         <Button           
//           title="Alterar texto"
//           onPress={() => setTexto('Novo Texto')}
//         />
//       </View>
//     </View>
//   );
// }

