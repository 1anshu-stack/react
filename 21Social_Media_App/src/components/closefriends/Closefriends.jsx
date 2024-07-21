import "./closefriends.css"

export default function Closefriends({users}) {
    return (
        <li className="sidebarFriend">
            <img src={users.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{users.username}</span>
        </li>
    )
}