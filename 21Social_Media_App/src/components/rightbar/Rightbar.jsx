import "./rightbar.css"
import gift from "../../assets/gift.png"
import ad from "../../assets/ad.png"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src={gift} alt="" />
            <span className="birthdayText"> <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
          </div>
          <img src={ad} alt="ad" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>

          <ul className="rightbarFriendList">
            {
              Users.map((item) => (
                  <Online key={item.id} user={item}/>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}