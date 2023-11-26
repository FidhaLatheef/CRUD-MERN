import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListUser from './components/listUsers'
import CreateUser from './components/createUser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListUser />}/>
        <Route path='/create-user' element={<CreateUser />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
