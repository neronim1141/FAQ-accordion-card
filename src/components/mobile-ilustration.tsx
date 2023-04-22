import { motion } from "framer-motion";
import bgPatternMobile from "../assets/bg-pattern-mobile.svg";
import ilustrationWomanOnlineMobile from "../assets/illustration-woman-online-mobile.svg";

export const MobileIlustration = () => {
  return (
    <div className="relative px-12 lg:hidden">
      <motion.img
        src={bgPatternMobile}
        alt="bg-pattern-mobile"
        className="w-full"
        animate={{
          scaleX: [1, 0.95, 1],
          transition: {
            repeat: Infinity,
            duration: 5,
          },
        }}
      />
      <motion.img
        src={ilustrationWomanOnlineMobile}
        alt="illustration-woman-online-mobile"
        className="absolute bottom-12 left-12 right-12"
        animate={{
          y: [0, -10, 0],
          transition: {
            repeat: Infinity,
            duration: 5,
          },
        }}
      />
    </div>
  );
};
