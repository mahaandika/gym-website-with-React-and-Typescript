import HeadingTitle from "@/shared/HeadingTitle";
import { BenefitType, SelectedPage } from "@/shared/type";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion, stagger } from "framer-motion";
import { div } from "framer-motion/client";
import BenefitsContent from "./BenefitsContent";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "state of the art facilities",
    description:
      "we provide world class fitness equipment, trainers and classes to",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "we provide world class fitness equipment, trainers and classes to",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "expert adn pro trainers",
    description:
      "we provide world class fitness equipment, trainers and classes to",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeadingTitle>more than just a gym</HeadingTitle>
          <p className="my-5 text-sm">
            we provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. we provide true
            care into each and every member
          </p>
        </motion.div>

        {/* benefit card */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitsContent
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
