const baseURL = "http://127.0.0.1:8000/status"; 

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
        console.error("Puts deu Erro em:", error);
        return { caminho_seguro: [], locais_em_chamas: [], locais_seguros: [], erro: "Erro na requisição" };
    }
};
