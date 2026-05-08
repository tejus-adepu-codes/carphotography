import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";


const socials = [
  { 
    name: "Instagram", 
    icon: FaInstagram, 
    url: "https://instagram.com/tejus.adepu", 
    handle: "@tejus.adepu" 
  },
  { name: "Detailing Instagram", icon: FaInstagram, url: "https://instagram.com/thewashdmv", handle: "@thewashdmv" },
  { 
    name: "Facebook", 
    icon: FaFacebook, 
    url: "https://www.facebook.com/tejus.adepu", 
    handle: "@tejus.adepu" 
  },
  { 
    name: "TikTok", 
    icon: FaTiktok, 
    url: "https://www.tiktok.com/@tejus.cars", 
    handle: "@tejus.cars" 
  }
  
];

export default function SocialLinks() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#d4a853] text-xs uppercase tracking-[0.4em] mb-4">Connect</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Social Pages:</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-12">
            Follow along for latest content, announcements, and photos with special vfx.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center gap-4 px-8 py-4 border border-white/10 hover:border-[#d4a853]/50 transition-all duration-500 hover:bg-white/[0.02]"
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-[#d4a853] transition-colors duration-300" />
              <div className="text-left">
                <p className="text-white text-sm font-light">{social.name}</p>
                <p className="text-white/40 text-xs">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3">For Inquiries/Booking a Shoot</p>
          <a 
            href="mailto:TejAdepu1@outlook.com" 
            className="text-white hover:text-[#d4a853] transition-colors text-lg font-light"
          >
            TejAdepu1@outlook.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-3, md:hidden">Text or Call</p>
          <a 
            href="sms:571-752-2785" 
            className="text-white hover:text-[#d4a853] transition-colors text-lg font-light, md:hidden"
          >
            571-752-2785
          </a>
        </motion.div>
      </div>
    </section>
  );
}