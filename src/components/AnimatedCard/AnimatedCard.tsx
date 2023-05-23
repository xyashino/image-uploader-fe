import { motion } from 'framer-motion';
import classes from './AnimatedCard.module.css';
import { PropsWithChildren } from 'react';
import { AppStatus } from '../../types/app-status.ts';

interface Props extends PropsWithChildren {
  appState: AppStatus;
}

export const AnimatedCard = ({ children, appState }: Props) => {
  const transition = {
    duration: 0.2,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      key={appState}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className={classes.motion__card}
    >
      {children}
    </motion.div>
  );
};
