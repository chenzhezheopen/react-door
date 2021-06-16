import { Component } from 'react'

//方法
import { _home } from '../../api'

// 组件
import Banner from './banner'
import HotSerise from './HotSerise'
import Irregular from './Irregular'

//样式
import './index.scss'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      pageData: {}
    }
  }
  async componentDidMount() {
    var Apicount = await _home.queryHome()
    var pageData = Apicount.result[0];
    var arr = [];
    for (let item in pageData.stringListMap) {
      pageData.stringListMap[item].map((res) => {
        res.retailPrice = (res.retailPrice - 0).toFixed(2);
      })
      arr.push({
        classifyName: pageData.stringListMap[item][0].classifyName,
        classifyId: pageData.stringListMap[item][0].classifyId,
        productList: pageData.stringListMap[item]
      });
    }
    pageData.stringListMap = arr
    this.setState({
      pageData: pageData
    })
  }
  render() {
    let { pageData } = this.state
    return (
      <div className='home'>
        <Banner portalsAdvDTOS={pageData.portalsAdvDTOS} />
        <HotSerise portalsHotProduct={pageData.portalsHotProduct} />
        {
          pageData.stringListMap && pageData.stringListMap.length > 0 ? pageData.stringListMap.map((res, index) => {
            return (
              <div key={index}>
                <Irregular stringListMap={res} />
              </div>
            )
          }) : ''
        }
      </div>
    )
  }
}