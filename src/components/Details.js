import React, { useState } from "react";
import video from "../data/video"
import Comments from "./Comments";

function Details () {
    const [countUpVotes, setCountUpVotes] = useState(0)
    const [countDownVotes, setCountDownVotes] = useState(0)

    return(
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <span className="voteBtns">
                <button onClick={() => setCountUpVotes(countUpVotes + 1)}>{countUpVotes} {video.upvotes} 👍</button>
                <button onClick={() => setCountDownVotes(countDownVotes + 1)}>{countDownVotes} {video.downvotes} 👎</button>
            </span>
            <div>
                <button>Hide Comments</button>
                <Comments />
            </div>
        </div>
    )
}

export default Details