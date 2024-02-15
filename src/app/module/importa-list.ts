export interface ImportaList {
  id: number;
  nome_completo: string;
  empresa: string;
  motivo_visita: string;
  data_hora_chegada: string; // Alterado para string
  pessoa_departamento_visitado: string;
  data_hora_partida: string; // Alterado para string
  observacoes: string; // Alterado para string
}
