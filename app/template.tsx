// components/PageTransition.tsx
"use client";
import { motion, Transition } from "framer-motion";
import React, { ReactNode } from "react";
import "../public/style/main.scss";

const pageTransition: Transition = {
  duration: 0.75,
  ease: "easeInOut",
};

interface PageTransitionProps {
  children: ReactNode;
}

const Template: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
      className="div-animation"
    >
      {children}
    </motion.main>
  );
};

export default Template;
