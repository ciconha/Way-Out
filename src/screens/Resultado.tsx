import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./simulacaostyle";
import Simulacao from "./simulacao";

interface ResultadoProps {
  origem: string;
  destino: string;
  locaisSeguros: string[];
  locaisEmChamas: string[];
  voltar: () => void;
}

const API_URL = "http://192.168.0.105:8000"; 

const Resultado: React.FC<ResultadoProps> = ({ origem, destino, locaisSeguros, locaisEmChamas, voltar }) => {
  const [caminho, setCaminho] = useState<string[]>([]);
  const [erroAPI, setErroAPI] = useState<string | null>(null);
  const [ajusteRota, setAjusteRota] = useState<boolean>(false);

  const calcularCaminho = async () => {
    try {
      if (!origem || !destino) {
        setErroAPI(" Origem ou destino inválidos!");
        console.error(" Origem ou destino inválidos!");
        return;
      }

      const url = `${API_URL}/caminho-seguro?origem=${encodeURIComponent(origem.trim())}&destino=${encodeURIComponent(destino.trim())}`;
      
      console.log("🚀 Enviando requisição para:", url);

      const response = await fetch(url);
      const data = await response.json();

      console.log(" Resposta completa da API:", JSON.stringify(data, null, 2));

      if (data.erro) {
        setErroAPI(` Erro recebido: ${data.erro}`);
        console.error(" Erro recebido:", data.erro);
      } else {
        console.log(" Caminho seguro encontrado:", data.caminho_seguro);

        let locaisSelecionados = data.caminho_seguro.filter((local: string) => 
          locaisSeguros.includes(local) && local !== "" && !local.includes("Nenhum caminho disponível")
        );

        while (locaisSelecionados.length < 2) {
          const localExtra = locaisSeguros.find((local) => !locaisSelecionados.includes(local));
          if (localExtra) {
            locaisSelecionados.push(localExtra);
          } else {
            break;
          }
        }

        let caminhoCompleto: string[] = [origem, ...locaisSelecionados, destino];

        // 🚀 Ajustando locais bloqueados no caminho
        caminhoCompleto = caminhoCompleto.map(local => {
          if (locaisEmChamas.includes(local)) {
            setAjusteRota(true); 
            return locaisSeguros.find(seguro => !locaisEmChamas.includes(seguro)) || local;
          }
          return local;
        });

        setCaminho(caminhoCompleto);
        setErroAPI(null);
      }
    } catch (error) {
      setErroAPI("❌ Erro ao conectar à API");
      console.error("❌ Erro ao acessar API:", error);
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

      {ajusteRota && (
        <Text style={styles.warning}>
          ⚠️ Alguns locais estavam bloqueados e foram substituídos por locais seguros!
        </Text>
      )}

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
        <Text style={styles.buttonText}> Voltar para Simulação</Text>
      </TouchableOpacity>

      <Image source={require("../assets/Mapa.jpeg")} style={styles.mapa} />
    </ScrollView>
  );
};

export default Resultado;
