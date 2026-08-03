import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
