
import './App.css'
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Homebar from './components/home/home-bottom-bar';
import Steps from './components/steps/steps';

function App() {

  return (
    <frameElement>
      <section className='navbarsection border-b border-base-300 sticky top-0 bg-[#fffffff6] z-10 '>
              <Navbar></Navbar>
      </section>
      <section className='my-9 relative z-1'>
            <Home></Home>
            <Homebar></Homebar>
      </section>
      <section className='my-9'>
        <Steps></Steps>
      </section>
    </frameElement>
  );
}

export default App
