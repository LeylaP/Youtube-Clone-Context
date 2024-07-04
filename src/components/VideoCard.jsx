import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Link to={`/watch/${video.videoId}`}>
      {/* resim kismi */}
      <div className="relative">
        <img
          className="rounded-lg"
          src={
            video.thumbnails[1].url
              ? video.thumbnails[1].url
              : video.thumbnails[0].url
          }
        />
        <span className="absolute right-0 bottom-2 bg-black p-1 rounded">
          {video.lengthSeconds}
        </span>
      </div>
      {/* alt detay */}
      <div className="flex gap-4">
        <img
          className="rounded-full w-12 h-12"
          src={video.author.avatar[0].url}
        />
        <div className="flex gap-3">
          <h4 className="font-bold">{video.title}</h4>
          <p>{video.author.title}</p>

          <div className="flex gap-3">
            <p>{millify(video.stats.views)}</p>
            <p>{video.poblishedTimeText}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
