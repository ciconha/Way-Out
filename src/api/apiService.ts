const baseURL = "http://192.168.0.113:8000/status";

export const fetchSafePath = async () => {
    try {
        console.log("🔄 Buscando dados do backend...");
        const response = await fetch(`${baseURL}/status`);

        console.log("📡 Status da resposta:", response.status);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Dados recebidos:", data);

        return data;
    } catch (error) {
        console.error("❌ Erro ao buscar dados no frontend:", error);
        return { caminho_seguro: [], locais_em_chamas: [], locais_seguros: [], erro: "Erro na requisição" };
    }
};
