
import './App.css'
import { ToastContainer } from 'react-toastify';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Homebar from './components/home/home-bottom-bar';
import Steps from './components/steps/steps';
import Pricing from './components/pricing/pricing';
import Workflow from './components/workflow/workflow';
import Footer from './components/footer/footer';
import Tabs from './components/tab/tabs';
import ProductSection from './components/ProductSection/productSection';
import CartsSection from './components/cartSection/cartSection';
import { Suspense} from 'react';
import { useState } from 'react';


const productPromise = fetch('/products.json').then(res => res.json())

function App() {
     const [isClicked, setIsClicked] = useState(false);
    const [carts, setCarts] = useState([])
  const [active, setActive] = useState("product")
  return (
    <>
      <section className='navbarsection border-b border-base-300 sticky top-0 bg-[#fffffff6] z-10 '>
      <Navbar carts={carts}></Navbar>
      </section>
      <Home></Home>
      <Homebar></Homebar>
      <Tabs carts={carts} active={active} setActive={setActive}></Tabs>
      {active === "product" &&

        <Suspense fallback={<div className='flex justify-center items-center'>
          <span className="loading loading-bars loading-xl"></span>
        </div>}>
          <ProductSection carts={carts} setCarts={setCarts} productPromise={productPromise} isClicked={isClicked} setIsClicked={setIsClicked}></ProductSection>
        </Suspense>
      }

      {active === "cart" &&
        <CartsSection carts={carts} setCarts={setCarts} ></CartsSection>
      }
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App
