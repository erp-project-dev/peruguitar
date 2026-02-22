import { DownloadLinks } from "../components/DowloadLinks";
import { YouTubePlayer } from "../components/YouTubePlayer";

export function TwoWorldsBackingTrack() {
  return (
    <>
      <p>
        Les comparto el backing track de la <strong>versión definitiva</strong>{" "}
        de mi tema <strong>Two Worlds</strong>. Un track de metal moderno
        diseñado para practicar fraseos técnicos, shred o líneas melódicas.
      </p>

      <ul>
        <li>
          <strong>Tonalidad:</strong> Bm (Si Menor)
        </li>
        <li>
          <strong>Tempo:</strong> 134 BPM
        </li>
      </ul>

      <h2>¿Qué practicar?</h2>
      <ul>
        <li>
          <strong>Fraseo y Técnica:</strong> Ideal para trabajar el control de
          bends en pasajes melódicos o ráfagas de <em>alternate picking</em> y{" "}
          <em>legato</em> sobre una base rítmica quirúrgica.
        </li>
        <li>
          <strong>Dinámicas:</strong> Transiciones entre frases pausadas y licks
          de alta velocidad según la intensidad del track.
        </li>
      </ul>

      <p>¡A darle con todo!</p>

      <YouTubePlayer id="xymcs9DrXk4" />

      <DownloadLinks
        files={[
          {
            name: "Two Worlds - Backing Track (WAV)",
            url: "https://drive.google.com/file/d/1mHR1xBFZZFP38bJWlKyVzu0esbO46XtI/view?usp=sharing",
            extension: "wav",
            size: "74MB",
          },
        ]}
      />
    </>
  );
}
