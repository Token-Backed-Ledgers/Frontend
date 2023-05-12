import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>ABOUT US</HText>
            <p className="py-5 ">
              We are a team of Nigerians ― blockchain's most adopted country in
              Africa ― that leveraged on BTC's execution client and Optimism
              technology to build a payments-specific protocol layer for scaling
              tokenized assets' transactions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
