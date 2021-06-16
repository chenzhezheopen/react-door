
//组件
import SeriseGroup from '../../../components/gloable/seriseGroup'

import './index.scss'

function navigate(productUrl) {
  window.open(productUrl)
}

export default function HotSerise(props) {
  return (
    <div className="HotSerise">
      <div className="header_title">Hot Sale New Style</div>
      <div className="HotSerise_list">
        {
          props.portalsHotProduct ? props.portalsHotProduct.map((res, index) => {
            if (index < 6) {
              return (
                <div className="serise_box" key={index} onClick={() => navigate(res.productUrl)}>
                  <SeriseGroup ProductInfo={res} />
                </div>
              )
            } else {
              return
            }
          }) : ''
        }
      </div>
    </div >
  )
}