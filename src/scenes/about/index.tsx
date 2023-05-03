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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ullam est, nihil praesentium, libero tenetur saepe eos officiis
              illum cumque cum autem non soluta nesciunt facilis laboriosam eum
              voluptate explicabo enim. Deserunt, laboriosam voluptates nihil
              itaque maiores dolore dolor aut?
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
