"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface WithRevealOptions {
  duration?: number;
  threshold?: number;
  delay?: number;
}

const withRevealOnScroll = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithRevealOptions = {}
) => {
  const { duration = 0.5, threshold = 0.3, delay = 0 } = options;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const ComponentWithReveal = (props: P) => {
    const { ref, inView } = useInView({ threshold, triggerOnce: false });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        style={{ willChange: 'opacity, transform' }}
        className='h-full'
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  return ComponentWithReveal;
};

export default withRevealOnScroll;
