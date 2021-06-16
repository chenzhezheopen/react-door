import React, { Component } from 'react'

//样式
import './index.scss'


export class index extends Component {
  render() {
    var { productType, ProductInfo } = this.props
    return (
      <div className="ProductTransverse">
        <div className={productType === 1 ? 'product_img1' : 'product_img2'}
          style={{ backgroundImage: 'url(' + (ProductInfo.productImg ? ProductInfo.productImg : '') + ')' }}>
        </div>
        <div className="product_info">
          <div className="product_name">
            <a dangerouslySetInnerHTML={{ __html: ProductInfo.productName }} title={ProductInfo.productName ? ProductInfo.productName.toString().replace(/<b>|<\/b>/g, '') : ''}></a>
          </div>
          <div className="product_price notranslate">
            <div className="newPriceCon">
              <span className="newPrice" dangerouslySetInnerHTML={{ __html: (ProductInfo.retailPrice ? React.priceGroup(ProductInfo.retailPrice) : '') }} ></span>
              {/* <span class="localPrice" >≈{{ $store.state.curr }}{{(ProductInfo.retailPrice * $store.state.rate).toFixed(2)}}</span> */}
            </div>
            <a className="oldPrice" dangerouslySetInnerHTML={{ __html: (ProductInfo.retailPrice ? React.countFix(ProductInfo.reamt, ProductInfo.retailPrice) : '') }}></a>
          </div>
        </div>

      </div>
    )
  }
}

export default index
