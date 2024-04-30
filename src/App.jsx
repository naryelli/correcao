
import Evento from './componentes/Evento'
import './App.css'
import Galeria from './componentes/Galeria'
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
function App() {
  
  return (
    <>
    <Cabecalho>

    </Cabecalho>
     <Evento
      titulo={"Evento do senai"}
      descricao={"descrição"}
      horario={"hora"}
      local={"local"}
     />
     <Galeria>
      
     </Galeria>
     <Rodape>
      
      </Rodape>
    </>

  )
}

export default App
