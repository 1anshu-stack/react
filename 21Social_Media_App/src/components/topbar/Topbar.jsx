import "./topbar.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import person from "../../assets/person/1.jpeg"

export default function Topbar(){
    return (
        <>
           <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">YourSocial</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchBar">
                        <SearchOutlinedIcon className="searchIcon"/>
                        <input type="text" placeholder="Search for friend, post or video" className="searchInput"/>
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarItem">
                            <PersonIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarItem">
                            <ChatIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarItem">
                            <NotificationsIcon />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src={person} alt="person" className="topbarImg"/>
                </div>
           </div>
        </>
    )
}