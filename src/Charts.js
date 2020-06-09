import React, { useState, useEffect } from 'react';

import Chart1 from './components/Chart';
import Chart2 from './components/Chart2';
import Chart3 from './components/Chart3';
import Chart4 from './components/Chart4';
import Chart5 from './components/Chart5';

import './App.css';

export default () => {
  const [values, setValues] = useState(0);



  useEffect(() => {
    randomLine();
  }, []);



  const randomLine = () => {
    let arr = new Uint32Array(6);
    arr.map((_, i) => {
      arr[i] = Math.random(10) * 32;
    })
    setValues(arr);
  }



  return (
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col-12">
          <button className="btn btn-info text-bold" onClick={randomLine}>Gerar novos valores</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 py-3">
          <Chart1 values={values} />
        </div>
        <div className="col-md-6 py-3">
          <Chart2 values={values} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 py-3">
          <Chart3 values={values} />
        </div>
        <div className="col-md-4 py-3">
          <Chart4 values={values} />
        </div>
        <div className="col-md-4 py-3">
          <Chart5 values={values} />
        </div>
      </div>
    </div>
  )
}

