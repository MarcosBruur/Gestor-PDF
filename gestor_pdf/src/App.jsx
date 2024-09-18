import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'
import { get_cookie } from './store'



export const App = () => {

   const dispatch = useDispatch()
   useEffect(() => {
    
    dispatch(get_cookie())

    
    const intervalId = setInterval(() => {
      dispatch(get_cookie())
    }, 300000)

    
    return () => clearInterval(intervalId)
  }, [dispatch])
  

  return (
    <BrowserRouter>
      <div className='bg-dark vh-100 text-white'>
        <RouterApp />
      </div>
    </BrowserRouter>

  )
}
export default App