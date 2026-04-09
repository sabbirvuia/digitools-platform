
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Homebar from './components/home/home-bottom-bar';
import Steps from './components/steps/steps';
import Pricing from './components/pricing/pricing';
import Workflow from './components/workflow/workflow';
import Footer from './components/footer/footer';
import Products from './components/poducts/poducts';
import { Suspense, useState } from 'react';


const fatchProducts = async () => {
  const res = await fetch("/products.json");
  const data = await res.json();
  return data;
}
function App() {

    const dataPromise = fatchProducts();

    const [c, setC] = useState(0);
  return (
    <>
      <section className='navbarsection border-b border-base-300 sticky top-0 bg-[#fffffff6] z-10 '>
              <Navbar c={c}></Navbar>
      </section>

      <Home></Home>
      <Homebar></Homebar>
    
      <Suspense fallback={<div className='text-center py-16'>Loading...<span className="loading loading-bars loading-xl"></span></div>}>
       <Products c={c} setC={setC} dataPromise={dataPromise}></Products>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
                      <ToastContainer />
    </>
  );
}

export default App
