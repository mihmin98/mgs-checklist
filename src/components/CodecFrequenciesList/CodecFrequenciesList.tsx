import { appData } from "../../data/data";
import CodecFrequencyCard from "../CodecFrequencyCard/CodecFrequencyCard";

export default function CodecFrequneciesList() {
  const content = appData.codecFrequencies.map(codecFreq => {
    return <CodecFrequencyCard codecFrequency={codecFreq} />
  });

  return (
    <>
      {content}
    </>
  );
}