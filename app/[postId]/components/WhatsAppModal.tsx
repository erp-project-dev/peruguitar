"use client";

import { useState, useEffect } from "react";
import { whatsAppBlogUrl } from "@/settings.json";

const DELAY_SECONDS = 15;
const COOLDOWN_HOURS = 24;

const WhatsAppModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("pg_ws_joined") === "true") return;

    const closedAt = localStorage.getItem("pg_ws_closed_at");
    if (closedAt) {
      const timePassed = Date.now() - parseInt(closedAt, 10);
      const cooldownMs = COOLDOWN_HOURS * 60 * 60 * 1000;
      if (timePassed < cooldownMs) return;
    }

    const timer = setTimeout(() => setIsVisible(true), DELAY_SECONDS * 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleJoin = () => {
    localStorage.setItem("pg_ws_joined", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("pg_ws_closed_at", Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full border-t-8 border-green-500 transform transition-all">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Únete al grupo del blog
        </h3>
        <p className="text-gray-600 mb-6 text-center text-sm">
          Aquí te enterarás siempre cuando lancemos una publicación,{" "}
          <span className="font-bold">cero SPAM</span>.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={whatsAppBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleJoin}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl transition-colors text-center shadow-md"
          >
            Unirme ahora
          </a>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-700 py-2 font-medium transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;
