import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import person1 from "../../assets/person/1.jpeg"
import post1 from "../../assets/post/1.jpeg"
import like from "../../assets/like.png"
import heart from "../../assets/heart.png"
// import { Users } from "../../dummyData";
// import { useState } from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={person1}
              alt=""
            />
            <span className="postUsername">Emma Stone</span>
            <span className="postDate">5min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey! it&aposs my first post:)</span>
          <img className="postImg" src={post1} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="" />
            <img className="likeIcon" src={heart} alt="" />
            <span className="postLikeCounter">69 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">29 comments</span>
          </div>
        </div>

      </div>
    </div>
  )
}