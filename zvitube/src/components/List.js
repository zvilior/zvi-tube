import { useEffect, useContext, useState } from "react";
import { dataContext } from "../context";

export default function List() {
  const DataContext = useContext(dataContext)
  useEffect(get, [DataContext.search]);
  const [songs, setSongs] = useState([]);
  console.log(songs);
  function get() {
    if (DataContext.search) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
          "X-RapidAPI-Key": "36759d224cmshb2bb4d1b0cc42e4p1366b3jsnb4ae37d91bbe",
        },
      };
      fetch(
        "https://simple-youtube-search.p.rapidapi.com/search?query=" +
        DataContext.search +
        "&safesearch=false",
        options
      )
        .then((response) => response.json())
        // .then((response) => console.log("res:", response.results))
        .then((response) => setSongs(response.results));
    }
  }
  return (
    <nav>
      {songs?.map((v) => (
        <VideoList key={v.id} data={v} />
      ))}
      {console.log("songs:", songs)}
    </nav>
  );
  function VideoList(props) {
    return (
      <div className="video-list" onClick={() => ClickHandler(props.data)}>
        <h4>{props.data.title}</h4>
        <img src={props.data.thumbnail.url} alt="img" className="video-image" />
      </div>
    );
    function ClickHandler(data) {
      DataContext.setVideo(data.url);
    }
  }
}
