import { motion } from "framer-motion";

export default function FloatingSocial() {
  return (
    <>
      {/* Social icons */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/17323206267"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          style={{
            background: "linear-gradient(145deg, #25D366 0%, #128C7E 100%)",
            boxShadow:
              "0 10px 25px -5px rgba(37, 211, 102, 0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          aria-label="WhatsApp +1 732 320 6267"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </motion.a>

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
    </>
  );
}
