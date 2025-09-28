import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
        hidden: { opacity: 0, y: 20 },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}