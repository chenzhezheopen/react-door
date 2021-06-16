import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

//组件
import ProductTransverse from '../../../components/gloable/ProductTransverse'

//样式
import './index.scss'

class Irregular extends Component {
  navigate = (productUrl) => {
    window.open(productUrl)
  }
  viewSeries = () => {
    this.props.history.push('/series')
  }
  render() {
    var stringListMap = this.props.stringListMap
    return (
      <div className="Irregular">
        <div className="header_title">{stringListMap.classifyName}</div>
        <div className="Irregular_container" v-if="temProductList.productList.length>0">
          <div className="row1">
            {
              stringListMap.productList ? stringListMap.productList.map((res, index) => {
                if (index < 2) {
                  return (
                    <div className="bar" key={index} onClick={() => this.navigate(res.productUrl)}>
                      <ProductTransverse ProductInfo={res} productType='2' />
                    </div>
                  )
                } else {
                  return
                }
              }) : ''
            }
          </div>
          <div className="row2">
            {
              stringListMap.productList ? stringListMap.productList.map((res, index) => {
                if (index > 1 && index < 8) {
                  return (
                    <div className="product_box" key={index} onClick={() => this.navigate(res.productUrl)}>
                      <ProductTransverse ProductInfo={res} productType='1' />
                    </div>
                  )
                } else {
                  return
                }
              }) : ''
            }
          </div>
        </div>
        <div className="Irregular_bottom">
          <div className="seeMore" onClick={() => this.viewSeries()}><a>See More</a></div>
        </div>
      </div>
    )
  }
}


export default withRouter(Irregular)