import { Children, createContext, useState, useEffect } from "react";
import axios from "axios";
import { options } from "../utils/constants";
export const YoutubeContext = createContext();

// context'te turulan verileri butun uygulamaya aktarilacak
export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "New",
    type: "category",
  });

  const [videos, setVideos] = useState(null);

  // selected categorinin degisimini izleme

  useEffect(() => {
    //eski videolari sil
    setVideos(null);

    // egerki secilen secenegin tipi category ise verileri cek
    if (selectedCategory.type == "category") {
      fetchCategory(selectedCategory.name);
    }
  }, [selectedCategory]);

  // youtube dan verileri ceker
  const fetchCategory = (category) => {
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${category}`, options)
      .then((res) => setVideos(res.data.contents))
      .catch((err) => console.log(err));
  };

  console.log(videos);

  return (
    <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </YoutubeContext.Provider>
  );
};
