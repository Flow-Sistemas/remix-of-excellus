import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AIChatWidget from "./AIChatWidget";

export default function FloatingSocial({ onQuote }: { onQuote: () => void }) {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      {/* Social icons */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        {/* AI Chat */}
        <motion.button
          type="button"
          onClick={() => setChatOpen(true)}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            background:
              "linear-gradient(145deg, hsl(43 85% 60%) 0%, hsl(43 70% 40%) 100%)",
            boxShadow:
              "0 10px 25px -5px hsl(43 70% 45% / 0.55), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          aria-label="Chat with New Creation AI Assistant"
        >
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
          <span
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse"
            aria-hidden="true"
          />
        </motion.button>

        {/* Instagram */}
        <motion.a
          href="https://www.instagram.com/newcreationhomesolutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            boxShadow:
              "0 10px 25px -5px rgba(220, 39, 67, 0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          aria-label="Instagram @newcreationhomesolutions"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:bean@newcreationhomesolutions.com"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(145deg, hsl(38 55% 55%) 0%, hsl(38 55% 38%) 100%)",
            boxShadow:
              "0 10px 25px -5px hsl(38 55% 45% / 0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          aria-label="Email bean@newcreationhomesolutions.com"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="white">
            <path d="M12 12.713L.015 3.927C.005 3.977 0 4.027 0 4.077v15.846C0 20.967.838 21.808 1.875 21.808h20.25c1.037 0 1.875-.841 1.875-1.885V4.077c0-.05-.005-.1-.015-.15L12 12.713zM23.404 2.291C23.13 2.108 22.81 2 22.469 2H1.531C1.19 2 .87 2.108.596 2.291L12 11.213l11.404-8.922z" />
          </svg>
        </motion.a>
      </div>
      <AIChatWidget open={chatOpen} onClose={() => setChatOpen(false)} onQuote={onQuote} />
    </>
  );
}
