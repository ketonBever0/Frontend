import { Toaster } from 'react-hot-toast';
import './App.css';
import { TimetableProvider } from './components/context/timetableContext';
import Main from './components/Main';
import TimetableContainer from './components/TimetableContainer';

function App() {

  return (
    <div className='container min-h-screen min-w-full'>
      <TimetableProvider>

        <h1 className='text-3xl mb-12'>Elvira Timetables</h1>
        <Main />
        <TimetableContainer />

      </TimetableProvider>
      <Toaster position='bottom-center' />
    </div>
  )
}

export default App
