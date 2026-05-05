import { motion } from 'motion/react';
import { Instagram, MessageCircle, ExternalLink } from 'lucide-react';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
  </svg>
);

// ==========================================
// ⚙️ CONFIGURATION: EDIT YOUR LINKS HERE
// ==========================================

const PROFILE = {
  name: "Senti Aura",
  bio: "Descubre tu fragancia ideal. Perfumería exclusiva con marcas de primer nivel.",
  // Sube tu archivo logo.jpg a la carpeta "public" en el panel lateral (puedes crear la carpeta si no existe)
  avatar: "/logo.jpg", // o usa la URL web de tu imagen aquí
};

const MAIN_LINKS = [
  {
    id: 'whatsapp',
    title: "Consúltanos por WhatsApp",
    url: "https://wa.me/5493516414867?text=Hola!%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20perfumes.",
    icon: MessageCircle,
    highlight: true, // Use this to make a button stand out
  },
  {
    id: 'instagram',
    title: "Sígueme en Instagram",
    url: "https://www.instagram.com/senti.aura",
    icon: Instagram,
  },
  {
    id: 'tiktok',
    title: "Mira mis videos en TikTok",
    url: "https://www.tiktok.com/@sentiaura",
    icon: TiktokIcon,
  }
];

// Icons at the bottom footer
const SOCIAL_ICONS = [
  { id: 'ig', url: "https://www.instagram.com/senti.aura", icon: Instagram, label: "Instagram" },
  { id: 'tt', url: "https://www.tiktok.com/@sentiaura", icon: TiktokIcon, label: "TikTok" },
];

// ==========================================
// 🎨 COMPONENT UI
// ==========================================

export default function App() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen bg-neutral-950 selection:bg-amber-500/30 font-sans">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-10 blur-[120px] bg-amber-600 mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full opacity-5 blur-[120px] bg-yellow-500 mix-blend-screen" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full opacity-10 blur-[150px] bg-amber-700 mix-blend-screen" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center py-16 px-5 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-6 mb-14"
        >
          <div className="relative group p-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-amber-700 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-700"></div>
            <img 
              src={PROFILE.avatar} 
              alt={PROFILE.name}
              className="relative w-32 h-32 rounded-full object-cover border-[3px] border-amber-500/80 shadow-2xl shadow-amber-900/20"
            />
          </div>
          
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {PROFILE.name}
            </h1>
            <p className="text-base sm:text-lg font-light text-amber-100/70 max-w-sm mx-auto leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>
        </motion.div>

        {/* Links List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col gap-4 mb-20"
        >
          {MAIN_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group relative flex items-center p-4 sm:p-5 w-full overflow-hidden
                  rounded-2xl backdrop-blur-md border transition-all duration-500
                  ${link.highlight 
                    ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-neutral-950 border-transparent shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]' 
                    : 'bg-neutral-900/50 border-amber-500/20 hover:border-amber-400/60 hover:bg-neutral-900/80 text-white hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.15)]'
                  }
                `}
              >
                {/* Icon wrapper */}
                <div className={`p-2.5 rounded-xl flex-shrink-0 transition-colors duration-500 ${link.highlight ? 'bg-neutral-950/10' : 'bg-neutral-800/80 group-hover:bg-amber-500/20 group-hover:text-amber-400 text-amber-100/70'}`}>
                  <Icon className="w-[1.125rem] h-[1.125rem]" />
                </div>
                
                {/* Link Title */}
                <div className={`flex-1 text-center pr-10 text-[1rem] ${link.highlight ? 'font-bold' : 'font-medium'} tracking-wide`}>
                  {link.title}
                </div>
                
                {/* Hover indicator arrow */}
                <div className={`absolute right-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${link.highlight ? 'text-neutral-900' : 'text-amber-400'}`}>
                  <ExternalLink className="w-5 h-5" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer / Social Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-auto flex items-center justify-center gap-6 pb-2 w-full"
        >
          {SOCIAL_ICONS.map((social) => {
            const SocialIcon = social.icon;
            return (
              <motion.a
                key={social.id}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3.5 bg-neutral-900/40 rounded-full text-amber-100/50 flex items-center justify-center border border-amber-500/10 hover:text-amber-400 hover:border-amber-500/40 hover:bg-neutral-900 shadow-xl transition-all duration-300"
              >
                <SocialIcon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
