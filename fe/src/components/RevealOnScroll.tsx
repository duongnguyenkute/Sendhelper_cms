// hoc/withRevealOnScroll.tsx
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface WithRevealOptions {
  duration?: number;
  threshold?: number;
}

const withRevealOnScroll = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithRevealOptions = {}
) => {
  const { duration = 0.4, threshold = 0.3 } = options;

  const ComponentWithReveal = (props: P) => {
    const [open, setOpen] = useState(false);
    const { ref, inView } = useInView({ threshold });

    useEffect(() => {
      setOpen(inView);
    }, [inView]);

    return (
      <div ref={ref}>
        <AnimatePresence>
          {open && (
            <motion.div
              key="hoc-reveal"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <WrappedComponent {...props} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return ComponentWithReveal;
};

export default withRevealOnScroll;
