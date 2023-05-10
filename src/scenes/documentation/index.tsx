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
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2.0 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>A TOKEN BACKED LEDGER </HText>
          <p className="my-5 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            doloremque neque eaque laboriosam accusamus reiciendis unde totam
            aspernatur, tempore esse quod aut autem perferendis nisi amet
            voluptates minima excepturi quidem?
          </p>
        </motion.div>
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
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <div>
            <div>
              <div className="before:content-abstractwaves before:absolute before:-top-20 before:z-[1] ">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 2.0 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Lorem ipsum dolor sit amet{" "}
                    <span className="text-primary-500">LOREM</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 2.0 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda reiciendis iste cumque magnam cum vitae optio
                voluptatum quisquam velit nisi ipsa, aspernatur pariatur libero
                esse? Doloribus ad perspiciatis quaerat numquam?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                pariatur veritatis eligendi quas reiciendis, neque ea aut. A
                omnis earum dolor, iure voluptatem impedit fuga.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default documentation;
