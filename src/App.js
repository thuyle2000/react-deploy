// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Product from './Product';
import ds from './data.json';

function App() {
  const clickMe = () => alert("don't touch me !");
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  return (
    <div>
      <header className="App-header">
        <h3>Product Control Panel</h3>
        <button className="btn btn-info mt-2"
          onClick={() => alert('Hello')}>Click Me
        </button>

        <button className="btn btn-danger mt-2"
          onClick={clickMe}>Click Me Again
        </button>

        <button className="btn btn-success mt-2"
          onClick={() => setCounter(++counter)}>Hit Me {counter} time(s)
        </button>

        {/* <button className="btn btn-success mt-2"
          onClick={() => ++counter}>Hit Me {counter} time(s)
        </button> */}

        <hr />
      </header>

      <div className='row mt-5'>
        {
          ds.map(item => (
            <div className="col-sm-6 col-md-3">
              <Product id={item.id} name={item.name} price={item.price} pict={item.pict} />
            </div>
          ))
        }

      </div>

    </div >
  );
}

export default App;
