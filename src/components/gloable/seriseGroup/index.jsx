import React, { Component } from 'react'

//样式
import './index.scss'

export default class index extends Component {
  state = {
    ImgHeight: 0
  }
  myRef = React.createRef();
  componentDidMount() {
    this.setState({
      ImgHeight: this.myRef.current.clientWidth
    })
  }
  render() {
    var { ImgHeight } = this.state
    return (
      <div className="seriseGroup" ref={this.myRef}>
        <div className="product_img">
          <div className="imgBox imgDefault"
            style={{ backgroundImage: 'url(' + this.props.ProductInfo.productImg[0] + ')', height: ImgHeight + 'px' }}>
          </div>
          <div className="downImg">
            {
              this.props.ProductInfo.productImg ? this.props.ProductInfo.productImg.map((res, index) => {
                if (index > 0 && index < 4) {
                  return (
                    <div key={index} className="minImg imgDefault"
                      style={{ backgroundImage: 'url(' + res + ')', height: (ImgHeight - 6) / 3 + 'px' }}>
                    </div>
                  )
                }
              }) : ''
            }
          </div>
        </div>
        <div className="product_name">
          <a dangerouslySetInnerHTML={{ __html: this.props.ProductInfo.productName }}></a>
        </div>
      </div>
    )
  }
}