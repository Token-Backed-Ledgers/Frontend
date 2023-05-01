import HText from "@/shared/HText";
import { DocumentationType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Documentation from "./Documentation";

const documentations: Array<DocumentationType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Token Backed Ledger",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,doloremque neque eaque laboriosa",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Token Backed Ledger",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,doloremque neque eaque laboriosa",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Token Backed Ledger",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,doloremque neque eaque laboriosa",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const documentation = ({ setSelectedPage }: Props) => {
  return (
    <section id="documentation" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Documentation)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>A TOKEN BACKED LEDGER </HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            doloremque neque eaque laboriosam accusamus reiciendis unde totam
            aspernatur, tempore esse quod aut autem perferendis nisi amet
            voluptates minima excepturi quidem?
          </p>
        </div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
        >
          {documentations.map((documentation: DocumentationType) => (
            <Documentation
              key={documentation.title}
              icon={documentation.icon}
              title={documentation.title}
              description={documentation.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default documentation;
