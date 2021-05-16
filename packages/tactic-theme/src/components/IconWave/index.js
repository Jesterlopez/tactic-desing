import React, { useEffect } from "react";
import { connect } from "frontity";
import { InView, useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { IconWaveQuote } from "../Icons";
import {} from "./styles";

const IconWave = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 50,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
    return controls.stop;
  }, [controls, inView]);

  const AnimationWave = {
    hidden: { x: 0 },
    visible: {
      x: 100,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <InView>
        {({ ref }) => (
          <motion.div
            initial="hidden"
            animate={controls}
            variants={AnimationWave}
            ref={ref}
          >
            <IconWaveQuote />
            <div></div>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default connect(IconWave);
