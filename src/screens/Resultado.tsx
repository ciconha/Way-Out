import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./simulacaostyle";

interface ResultadoProps {
  origem: string;
  destino: string;
  locaisSeguros: string[];
  locaisEmChamas: string[];
  voltar: () => void;
}

const API_URL = "http://10.128.131.223:8000"; 

const Resultado: React.FC<ResultadoProps> = ({ origem, destino, locaisSeguros, locaisEmChamas, voltar }) => {
  const [caminho, setCaminho] = useState<string[]>([]);
  const [erroAPI, setErroAPI] = useState<string | null>(null);

  const calcularCaminho = async () => {
    try {
      if (!origem || !destino) {
        setErroAPI("❌ Origem ou destino inválidos!");
        console.error("❌ Origem ou destino inválidos!");
        return;
      }

      const url = `${API_URL}/caminho-seguro?origem=${encodeURIComponent(origem.trim())}&destino=${encodeURIComponent(destino.trim())}`;
      
      console.log("🚀 Enviando requisição para:", url);

      const response = await fetch(url);
      const data = await response.json();

      console.log("🔥 Resposta completa da API:", JSON.stringify(data, null, 2)); // ✅ Exibe toda a resposta da API no console

      if (data.erro) {
        setErroAPI(` Erro do recebido: ${data.erro}`);
        console.error(" Erro recebido:", data.erro);
      } else {
        console.log("✅ Caminho seguro encontrado:", data.caminho_seguro);

      
        let locaisSelecionados = data.caminho_seguro.filter((local: string) => 
          locaisSeguros.includes(local) && local !== "" && !local.includes("Nenhum caminho disponível")
        );

        while (locaisSelecionados.length < 4) {
          const localExtra = locaisSeguros.find((local) => !locaisSelecionados.includes(local));
          if (localExtra) {
            locaisSelecionados.push(localExtra);
          } else {
            break;
          }
        }

        const caminhoCompleto: string[] = [origem, ...locaisSelecionados, destino];
        setCaminho(caminhoCompleto);
        setErroAPI(null);
      }
    } catch (error) {
      setErroAPI(" Erro ao conectar à API");
      console.error(" Erro ao acessar API:", error);
    }
  };

  useEffect(() => {
    if (origem && destino) {
      calcularCaminho();
    }
  }, [origem, destino]);

  console.log("🏁 Locais a serem exibidos na tela:", caminho); 

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.h1}>WayOut</Text>

      {erroAPI ? (
        <Text style={styles.alert}>{erroAPI}</Text>
      ) : (
        <View>
          {caminho.map((local: string, index: number) => (
            <Text key={index} style={styles.route}>
              {index + 1}. {local} {index < caminho.length - 1 ? "➡️" : "🏁"}
            </Text>
          ))}
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={voltar}>
        <Text style={styles.buttonText}>🏠 Voltar para Simulação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Resultado;
