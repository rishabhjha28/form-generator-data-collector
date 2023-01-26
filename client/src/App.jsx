import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedSuccess from './components/CreatedSuccess';
import CreateForm from './components/CreateForm';
import ErrorPage from './components/ErrorPage';
import FillForm from './components/FillForm';
import FormFilledSuccess from './components/FormFilledSuccess';
import GetFormId from './components/GetFormId';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='create-form' element = {<CreateForm/>}/>
        <Route path = "fill-form" element = {<GetFormId/>}/>
        <Route path='fill-form/:id' element = {<FillForm/>}/>
        <Route path='success/:id'element={<CreatedSuccess/>}/>
        <Route path='error' element={<ErrorPage/>}/>
        <Route path='form-filled-success' element={<FormFilledSuccess/>}/>
      </Routes>
    </div>
  );
}

export default App;
