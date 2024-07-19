import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import person2 from "../../assets/person/2.jpeg"

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <RssFeedIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sidebarListItem">
                            <ChatIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Chats</span>
                        </li>
                        <li className="sidebarListItem">
                            <VideocamIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Videos</span>
                        </li>
                        <li className="sidebarListItem">
                            <GroupsIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sidebarListItem">
                            <BookmarksIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>
                        <li className="sidebarListItem">
                            <QuestionAnswerIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Questions</span>
                        </li>
                        <li className="sidebarListItem">
                            <WorkIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Jobs</span>
                        </li>
                        <li className="sidebarListItem">
                            <EventIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Events</span>
                        </li>
                        <li className="sidebarListItem">
                            <SchoolIcon className="sidebarIcon" />
                            <span className="sidebarListItemText">Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarBtn">Show More</button>
                    <hr className="sidebarHr" />
                    <ul className="sidebarFriendList">
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src={person2} alt="" className="sidebarFriendImg" />
                            <span className="sidebarFriendName">Jane Doe</span>
                        </li>
                    </ul>
                </div>
            </div> 
        </> 
    )
}