import "./App.css";

const cards = [
  { label: "Receita mensal", value: "R$ 148.230" },
  { label: "Despesas", value: "R$ 61.900" },
  { label: "Resultado", value: "R$ 86.330" },
];

const entries = [
  {
    descricao: "Assinaturas enterprise",
    categoria: "Receita",
    valor: "R$ 52.000",
  },
  {
    descricao: "Servicos de implantacao",
    categoria: "Receita",
    valor: "R$ 24.700",
  },
  { descricao: "Infraestrutura cloud", categoria: "Custo", valor: "R$ 12.300" },
  { descricao: "Suporte tecnico", categoria: "Custo", valor: "R$ 9.100" },
];

function App() {
  return (
    <main className="finance-page">
      <header className="project-header">
        <p className="project-pill">Projeto Microfrontends</p>
      </header>

      <section className="finance-card">
        <h2>Sistema financeiro</h2>
        <p className="subtitle">Visao consolidada das operacoes do cliente.</p>

        <section className="kpi-grid">
          {cards.map((card) => (
            <article key={card.label} className="kpi-item">
              <p>{card.label}</p>
              <strong>{card.value}</strong>
            </article>
          ))}
        </section>

        <section className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Descricao</th>
                <th>Categoria</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.descricao}>
                  <td>{entry.descricao}</td>
                  <td>{entry.categoria}</td>
                  <td>{entry.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}

export default App;
