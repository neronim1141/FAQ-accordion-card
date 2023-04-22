import { useCallback, useState } from "react";
import { Accordion, AccordionItem } from "./components/Accordion";
import { DesktopIlustration } from "./components/desktop-ilustration";
import { MobileIlustration } from "./components/mobile-ilustration";

const data: AccordionItem[] = [
  {
    header: "How many team members can I invite?",
    content:
      "You can invite up to 2 additionalusers on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    header: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    header: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    header: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    header: " Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function App() {
  const [expanded, setExpanded] = useState(0);
  const handleAccordionClick = useCallback(
    (i: number) => {
      return () => setExpanded(i);
    },
    [setExpanded]
  );
  return (
    <div className="h-screen w-screen flex flex-col">
      <main className="flex-grow grid place-content-center p-6 font-outfit bg-gradient-to-t from-primary-soft_blue to-primary-soft_violet">
        <div className="bg-white rounded-xl flex flex-col lg:grid lg:grid-cols-2 p-4 lg:p-6 ">
          <DesktopIlustration />
          <MobileIlustration />

          <div className="p-6 flex flex-col items-center max-w-[350px]">
            <h1 className="text-5xl font-bold text-primary-dark_blue lg:self-start mb-8">
              FAQ
            </h1>
            <ul className="divide-y divide-neutral-dividers-light_blue">
              {data.map((item, i) => (
                <li key={i} className="py-4">
                  <Accordion
                    header={item.header}
                    content={item.content}
                    onClick={handleAccordionClick(i)}
                    expanded={i === expanded}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <footer className="self-center p-1 text-center absolute bottom-0 text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .
        <br />
        Coded by{" "}
        <a
          href="https://neronim1141.github.com"
          className="underline hover:text-primary-cyan"
        >
          Kacper Kruczek
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
