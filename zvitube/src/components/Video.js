import ReactPlayer from "react-player";
import { useContext } from "react";
import { dataContext } from "../context";

export default function Video() {
  const DataContext = useContext(dataContext);
  const continuePlaying = () => {

  }
  return (
    <main>
      <ReactPlayer controls={true} playing={true} onEnded={continuePlaying} url={DataContext.video} />
    </main>
  );
}
