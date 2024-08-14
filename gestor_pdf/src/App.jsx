
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-dark vh-100 text-white'>
        <RouterApp />
      </div>
    </BrowserRouter>

  )
}
export default App