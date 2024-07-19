import './App.css';
import Inputs from './components/Inputs';
import TopButton from './components/TopButton';

function App() {
  return (
    <div className="App">
      {/* <h5 className=" text-blue-400 text-2xl font-bold">Hello World</h5> */}
      <div className=' mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-tr from-cyan-600 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButton />
        <Inputs />
      </div>


    </div>
  );
}

export default App;
