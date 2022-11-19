import { ContextProvider } from './context'
import { Home } from './home'

function App () {
  return (
    <div className='bg-slate-200 '>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  )
}

export default App
