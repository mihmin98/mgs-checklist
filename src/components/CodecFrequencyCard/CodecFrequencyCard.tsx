import type { CodecFrequency } from "../../models/codec-frequency"

import './CodecFrequencyCard.scss'

type Props = {
  codecFrequency: CodecFrequency
};

export default function CodecFrequencyCard({ codecFrequency }: Props) {
  return (
    <div className="card frequency-card">
      <span><b>{codecFrequency.name}</b>: {codecFrequency.frequency}</span>
    </div>
  );
}