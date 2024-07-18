import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeedIcon';   
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ChatIcon from '@mui/icons-material/Bookmarks';
import VideocamIcon from '@mui/icons-material/Bookmarks';
import GroupsIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/Bookmarks';
import WorkIcon from '@mui/icons-material/Bookmarks';
import EventIcon from '@mui/icons-material/Bookmarks';
import SchoolIcon from '@mui/icons-material/Bookmarks';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <RssFeedIcon className="slidebarIcon" />
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
                </div>
            </div>
        </>
    )
}