import './index.scss'
import rewordImg from '../../assets'


export default function Bottom() {
  const payImg = ['img/paytype1.png', 'img/paytype2.png', 'img/paytype3.png', 'img/paytype4.png', 'img/paytype5.png', 'img/paytype6.png', 'img/paytype7.png']
  return (
    <div className="BuykopBottom notranslate">
      <div className="companyInfo">
        <div className="BuykopBottom-bottom">
          <div className="BuykopBottom-bottom-img">
            <img src={rewordImg('img/little.png')} alt="" />
          </div>
          <div className="BuykopBottom-bottom-law">
            <div className="BuykopBottom-bottom-law-top">
              Law and Compliance
            </div>
            <div className="BuykopBottom-bottom-law-middle">
              Terms of Service
            </div>
            <div className="BuykopBottom-bottom-law-middle">
              Privacy Policy
            </div>
          </div>
          <div className="BuykopBottom-bottom-cop">
            <div className="BuykopBottom-bottom-cop-top">
              Formularay
            </div>
            <div className="BuykopBottom-bottom-cop-bottom">
              About Us
            </div>
          </div>
          <div className="BuykopBottom-bottom-contact">
            <div className="BuykopBottom-bottom-contact-top">
              Contact Us
            </div>
            <div className="BuykopBottom-bottom-contact-middle">
              Tel：+86-21-58358578
            </div>
            <div className="BuykopBottom-bottom-contact-middle">
              E-mail：service@buykop.com
            </div>
          </div>
          <div className="BuykopBottom-bottom-pay">
            <div className="BuykopBottom-bottom-pay-options">
              Payment Options
            </div>
            <div className="BuykopBottom-bottom-pay-wrapper">
              {
                payImg.map((res, index) => {
                  return (<div key={index}>
                    <img src={rewordImg(res)} alt='' />
                  </div>)
                })
              }
            </div>
          </div>
        </div >
        <div className="BuykopBottom_down">
          <div style={{ width: "1400px", height: "1px", backgroundColor: "rgba(255,255,255,.4)", margin: "0 auto" }}></div>
          <div style={{ color: "#fff", fontSize: "14px", fontWeight: "400", textAlign: "center", lineHeight: "49px" }}>
            © 2021 I FormulaRay Limited I All Rights Reserved I Powered by Buykop</div>
        </div>
      </div >
    </div >
  )
}