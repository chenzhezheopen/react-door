// import React,{Component} from 'react'
import './index.scss'
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

function navigate(advUrl) {
  window.open(advUrl)
}

export default function Banner(props) {
  console.log(props);
  return (
    <div className="banner">
      <div className="block">
        <Carousel afterChange={onChange}>
          {
            props.portalsAdvDTOS ? props.portalsAdvDTOS.map((res, index) => {
              return (
                <div key={index}>
                  <img src={res.img} alt="" onClick={() => navigate(res.advUrl)} />
                </div>
              )
            }) : ""
          }
        </Carousel>
      </div>
    </div>
  )
}
