import { AnimatePresence, motion } from "framer-motion";
import iconArrowDown from "../assets/icon-arrow-down.svg";
import clsx from "clsx";
export type AccordionItem = {
  header: string;
  content: string;
};
interface AccordionProps extends AccordionItem {
  expanded: boolean;
  onClick: () => void;
}
export const Accordion = ({
  header,
  content,
  expanded,
  onClick,
}: AccordionProps) => {
  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        onClick={onClick}
        className={clsx(
          "flex items-center mb-2 text-primary-dark_blue cursor-pointer hover:text-primary-soft_red",
          !expanded && "mb-2"
        )}
      >
        <span className={"flex-grow text-lg " + (expanded ? "font-bold" : "")}>
          {header}
        </span>
        <img
          src={iconArrowDown}
          alt="icon-arrow-down"
          className={"transition-transform " + (expanded ? "rotate-180" : "")}
        />
      </motion.header>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden text-neutral-dark_blue pr-10"
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
