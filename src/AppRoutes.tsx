import './App.css'
import { useCallback, useState } from 'react'
import Header from './components/header/Header'
import Todo from './components/todo/Todo'
import Counter from './components/counter/Counter'
import { Route, Routes } from 'react-router-dom'

function AppRoutes () {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])
  const decrementCount = useCallback(() => {
    setCount(prevCount => prevCount - 1)
  },[])

  return (
    <>
      <Header></Header>
      <div className='sm:w-3/4 w-full m-auto'>
        <Routes>
          <Route path='/' element={<Todo></Todo>}></Route>
          <Route path='/counter' element={<Counter incrementCount={incrementCount} decrementCount={decrementCount} count={count}></Counter>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default AppRoutes
