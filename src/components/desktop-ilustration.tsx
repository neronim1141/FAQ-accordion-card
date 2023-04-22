import bgPatternDesktop from "../assets/bg-pattern-desktop.svg";
import ilustrationWomanOnlineDesktop from "../assets/illustration-woman-online-desktop.svg";
import ilustrationBoxDesktop from "../assets/illustration-box-desktop.svg";
import { motion } from "framer-motion";

export const DesktopIlustration = () => {
  return (
    <div className="relative hidden lg:block -m-6">
      <div className="relative w-full h-full overflow-hidden">
        <motion.img
          src={bgPatternDesktop}
          alt="bg-pattern-mobile"
          className="absolute bottom-1/4 -left-[65%] scale-[200%]"
        />
        <motion.img
          src={ilustrationWomanOnlineDesktop}
          alt="illustration-woman-online-mobile"
          className="absolute -left-[15%] bottom-[15%]"
          animate={{
            y: [0, -10, 0],
            transition: {
              repeat: Infinity,
              duration: 5,
            },
          }}
        />
      </div>
      <motion.img
        src={ilustrationBoxDesktop}
        alt="illustration-woman-online-mobile"
        className="absolute -left-1/4 bottom-[20%] "
        animate={{
          y: [0, -15, 0],
          transition: {
            repeat: Infinity,
            duration: 5,
          },
        }}
      />
    </div>
  );
};
