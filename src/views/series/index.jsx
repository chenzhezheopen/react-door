import React, { Component } from 'react'

//样式
import './index.scss'

// 组件

export class index extends Component {
  render() {
    return (
      <div className="series">
        series
        {/* <div className="header_title">{ProductList.classifyName}</div>
        <div className="series_container" v-if="ProductList.productList">
            <div className="product_box" v-for="item in ProductList.productList" :key="item.id"
                 @click="navigate(item.productUrl)">
                <Product-vertical :ProductInfo='item' />
            </div>
        </div> */}
      </div>
    )
  }
}

export default index
