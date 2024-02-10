import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className=" bg-black pt-10">
      <p className='ml-[50%] text-white'>Hover me</p>
      <div className=''>
      <Spline scene="https://prod.spline.design/pfqTdmOVcLW-l1WK/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
