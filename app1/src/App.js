import './App.css';
import Form from './Components/Medium_Comp/Form';
import Read from './Components/Medium_Comp/Read';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/read" element={<Read />} />
      <Route path="/:id" element={<Form />} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
