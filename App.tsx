import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from './styles';
import Inicio from './src/screens/inicio';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showInicio, setShowInicio] = useState(false); // ✅ Estado para controlar troca de telas

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setShowButton(true); // ✅ Quando terminar, mostra o botão
          return prev;
        }
        return prev + 10;
      });
    }, 300);
  }, []);

  // ✅ Se "showInicio" for verdadeiro, renderiza Inicio.tsx
  if (showInicio) {
    return <Inicio />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>WayOut</Text>

      {/* Barra de progresso */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      {/* Imagem de fundo */}
      <Image
        source={{ uri: 'https://pa1.narvii.com/6909/632e7f8c93327a9ad2650e4fbb5c89648d49a7ear1-426-475_hq.gif' }}
        style={styles.image}
      />

      {/* Botão que aparece após o carregamento e troca para `Inicio.tsx` */}
      {showButton && (
        <Button title="Ir para Início" onPress={() => setShowInicio(true)}

        />
      )}
    </View>
  );
};

export default App;
