// components/PageTransition.tsx
"use client";
import { motion, Transition } from "framer-motion";
import React, { ReactNode } from "react";

const pageTransition: Transition = {
  duration: 0.75,
  ease: "easeInOut",
};

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
