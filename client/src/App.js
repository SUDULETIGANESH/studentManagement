import { ToastContainer } from 'react-toastify';
import './App.css';
import StudentList from './Pages/studentList'


function App() {
  return (
    <div className='App-header'>
      <StudentList />
      <ToastContainer/>
    </div>
  );
}

export default App;
