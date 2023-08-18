import { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex min-h-[100vh] bg-[#0F0F0F] text-white">
      <SideNav />
      <div className="videos w-full">
        {!videos ? (
          <Loading />
        ) : (
          videos.map((item) => {
            // egerki eleman tipi video degilse hicbirsey yapma
            if (item.type !== "video") return;

            // videoysa o zaman kart bilesenin icindeki degeri bas
            return <VideoCard key={item.video.videoId} video={item.video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
