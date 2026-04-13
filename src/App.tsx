import {Sidebar} from "./components/Sidebar"
import { TopBar } from "./components/TopBar"
import { StatCard } from "./components/StatCard"


import "./styles/app.css"


function App() {


  return (
   <div className="app-layout" >
        {/** aqui vamos a sidebar */}

        <Sidebar />
      <div className="main-content">
        {/** aqui va el header */}
        <TopBar />

        {/** aqui va el contenido principal */}

        <div className="dashboard">
          {/* Div para colocar os cards */}

          <div className="stats-row">
            <StatCard 
            title="Total de Clientes"
            value={8}
            subtitle="+2 este mês"
            icon="👥"
            subtitleColor="green"
            iconColor="#007bff"
            />
            <StatCard 
            title="Total de Tarefas"
            value={15}
            subtitle="+5 este mês"
            icon="📊"
            subtitleColor="blue"
            iconColor="#28a745"
            />
            <StatCard 
            title="Em Progresso"
            value={25}
            icon="📦"
            iconColor="#ffc107"
            />
            <StatCard 
            title="Completados"
            value={2}
            icon="✅"
            subtitle="+75% neste mês"
            subtitleColor="orange"
            iconColor="#17a2b8"
            />

          </div>

        </div>

      </div>
    
   </div>
  )
}

export default App
