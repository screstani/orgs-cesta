import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
//aqui importamos sem {} pq o export default não precisa de {};
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      {/* {...mock} é igual a fazermos topo={mock.topo} detalhes={mock.detalhes} */}
      <Cesta {...mock} />
    </SafeAreaView>
  );
}


