import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Router from './configs/router-config'

import './index.css';
import 'antd/dist/antd.css';

//过滤器
React.countFix = (val1, val2) => {//差价求和
  return val1 ? '$' + ((val2 * 100 + val1 * 100) / 100).toFixed(2) : ''
}
React.priceGroup = (val) => {//价格整数与小数分割
  return `$${val.toString().split('.')[0] - 0}</span><a>${val.toString().split('.').length > 1 ? val.toString().split('.')[1] : ''}</a>`
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
