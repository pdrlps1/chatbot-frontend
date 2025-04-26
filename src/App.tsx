import { useEffect, useState } from 'react'
import { pingAPI } from './utils/api'

function App() {
  const [mensagem, setMensagem] = useState('Carregando...')
  const [erro, setErro] = useState('')

  useEffect(() => {
    pingAPI()
      .then(res => res.json())
      .then(data => setMensagem(data.msg))
      .catch(() => {
        setMensagem('')
        setErro('Erro ao conectar com a API do backend!')
      })
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#15171c',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vh'
    }}>
      <h1>Teste de Conexão Backend</h1>
      {mensagem && <h2 style={{ color: '#CA8795' }}>{mensagem}</h2>}
      {erro && <h2 style={{ color: 'tomato' }}>{erro}</h2>}
    </div>
  )
}

export default App
