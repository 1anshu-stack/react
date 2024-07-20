import "./rightbar.css"
import gift from "../../assets/gift.png"
import ad from "../../assets/ad.png"
import person5 from "../../assets/person/5.jpeg"

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
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                  <li className="rightbarFriend">
                    <div className="rightbarProfileImgContainer">
                      <img src={person5} alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">Dodo Flick</span>
                  </li>
                </ul>

              </div>
          </div>
        </>
    )
}