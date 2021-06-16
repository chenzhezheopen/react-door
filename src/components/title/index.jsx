import './index.scss'
import rewordImg from '../../assets'



export default function Title() {
  return (
    <div>
      <div className="serviceTop">
        <div className="serviceTop-title">
          <img src={rewordImg('img/title.png')} alt="" />
        </div>
      </div>
      <div style={{ height: '71px' }}></div>
    </div>
  )
}