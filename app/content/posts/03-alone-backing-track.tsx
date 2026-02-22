/* eslint-disable react/no-unescaped-entities */
import { Post, PostAuthor, PostCategory } from "../types";
import { DownloadLinks } from "../components/DowloadLinks";
import { YouTubePlayer } from "../components/YouTubePlayer";

export const aloneBackingTrack: Post = {
  id: "alone-backing-track",
  title: "Alone Backing Track",
  description:
    "Track melancólico de armonía rica. Combina pasajes introspectivos con un cierre de alta exigencia técnica.",
  category: PostCategory.Resources,
  date: new Date("2026-02-20T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        Les comparto el backing track de <strong>Alone</strong>, un tema
        melancólico y armónicamente rico, con pasajes que invitan a la
        introspección y un cierre de alta exigencia técnica.
      </p>

      <ul>
        <li>
          <strong>Tonalidad:</strong> Bm (Si Menor)
        </li>
        <li>
          <strong>Tempo:</strong> 156 BPM
        </li>
      </ul>

      <h2>¿Qué practicar?</h2>
      <ul>
        <li>
          <strong>Armonía y Resolución:</strong> Ideal para trabajar la elección
          de notas sobre cambios de acordes complejos y pasajes expresivos.
        </li>
        <li>
          <strong>Técnica Final:</strong> Un desafío para ejecutar licks rápidos
          y precisos en el clímax del track.
        </li>
      </ul>

      <YouTubePlayer id="PmyqZ3izalA" />

      <DownloadLinks
        files={[
          {
            name: "Alone - Backing Track (WAV)",
            url: "https://drive.google.com/file/d/1mHR1xBFZZFP38bJWlKyVzu0esbO46XtI/view?usp=sharing",
            extension: "wav",
            size: "74MB",
          },
        ]}
      />
    </>
  ),
};
