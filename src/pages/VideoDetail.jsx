import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/helpers";
import { IoGameControllerSharp } from "react-icons/io5";

const VideoDetail = () => {
  const { videoId } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    getData(`/details?id=${videoId}`)
      .then((res) => console.log())
      .catch((err) => console.log());
  }, [videoId]);

  console.log(data);

  return (
    <div className="bg-[#0F0F0F] min-h-[95vh]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        playing={true}
      />
    </div>
  );
};

export default VideoDetail;
