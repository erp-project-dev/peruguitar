/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Donations() {
  const [modal, setModal] = useState<"yape" | "plin" | null>(null);

  const paymentData = {
    yape: {
      name: "Yape",
      color: "bg-[#742384]",
      textColor: "text-white",
      qr: "/qrs/yape.jpg",
      text: "Yapear",
    },
    plin: {
      name: "Plin",
      color: "bg-[#00d1ce]",
      textColor: "text-zinc-900",
      qr: "/qrs/plin.jpg",
      text: "Plinear",
    },
  };

  return (
    <section className="mt-12 p-8 border border-zinc-800 rounded-3xl text-center">
      <div className="mb-6">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
          Apoyo al Proyecto
        </span>
        <h3 className="text-xl font-bold text-white mt-2">
          ¿Te gusta el contenido? 🎸
        </h3>
        <p className="text-zinc-400 text-sm mt-2 max-w-xs mx-auto">
          Tu apoyo nos ayuda a seguir subiendo contenido como este.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <button
          onClick={() => setModal("yape")}
          className="flex items-center justify-center gap-2 bg-[#742384] hover:opacity-90 text-white px-8 py-3 rounded-2xl font-bold transition-all cursor-pointer"
        >
          Yapear
        </button>
        <button
          onClick={() => setModal("plin")}
          className="flex items-center justify-center gap-2 bg-[#00d1ce] hover:opacity-90 text-zinc-900 px-8 py-3 rounded-2xl font-bold transition-all cursor-pointer"
        >
          Plinear
        </button>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          {/* Fondo dinámico basado en la marca */}
          <div
            className={`${paymentData[modal].color} rounded-3xl p-8 w-full max-w-[320px] relative animate-in fade-in zoom-in duration-200 shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className={`absolute top-4 right-4 ${paymentData[modal].textColor} opacity-70 hover:opacity-100`}
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <p
                className={`${paymentData[modal].textColor} font-black mb-6 uppercase text-xs tracking-[0.2em]`}
              >
                Escanea para {paymentData[modal].text}
              </p>

              <div className="bg-white p-2 rounded-2xl mb-6 shadow-inner">
                <img
                  src={paymentData[modal].qr}
                  alt={`QR ${modal}`}
                  className="w-full aspect-square object-contain"
                />
              </div>

              <p
                className={`${paymentData[modal].textColor} text-xs font-bold opacity-80 uppercase tracking-tighter`}
              >
                Gracias por apoyar a Peru Guitar
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
