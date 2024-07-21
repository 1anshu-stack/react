import "./post.css";
import propType from "prop-types"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import like from "../../assets/like.png"
import heart from "../../assets/heart.png"
import { Users } from "../../dummyData";
import { useState } from "react";

Post.propType = {
  post : propType.node,
}

export default function Post( {post} ) {
  const [likephoto, setLikephoto] = useState(post.like);
  const [islike, setIslike] = useState(false);
  function handleLike(){
    setLikephoto( islike ? likephoto-1 : likephoto+1);
    setIslike(prev=> !prev);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u)=> u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={like} alt="" onClick={handleLike} />
            <img className="likeIcon" src={heart} alt="" onClick={handleLike} />
            <span className="postLikeCounter">{likephoto} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>

      </div>
    </div>
  )
}
