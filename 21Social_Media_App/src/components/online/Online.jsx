import "./online.css";

export default function Online({user}) {
    return (
        <li key={user.id} className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}