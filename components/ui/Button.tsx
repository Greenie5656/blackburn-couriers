'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-fresh-sky text-white hover:bg-fresh-sky/90',
  secondary: 'bg-french-blue text-white hover:bg-french-blue/90',
  outline: 'border-2 border-fresh-sky text-fresh-sky hover:bg-fresh-sky hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg font-semibold transition-colors duration-200
        cursor-pointer inline-flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}