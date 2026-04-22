import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

interface ExpandableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ExpandableImage({ src, alt, className = "" }: ExpandableImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Thumbnail Image */}
      <motion.div
        className={`relative group cursor-pointer rounded-[12px] overflow-hidden ${className}`}
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover"
        />
        
        {/* Hover Overlay - Desktop */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300 flex items-center justify-center pointer-events-none"></div>

        {/* Mobile/Touch Indicator */}
        <div className="md:hidden absolute bottom-3 right-3 opacity-80 group-active:opacity-100 transition-opacity">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/90 backdrop-blur-sm shadow-md text-[11px] font-sans uppercase tracking-wider text-foreground">
            <Maximize2 className="w-3 h-3" />
            <span>Expand</span>
          </div>
        </div>
      </motion.div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full bg-muted hover:bg-accent active:bg-accent flex items-center justify-center transition-colors group"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-foreground group-hover:text-background group-active:text-background transition-colors" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[95vw] max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-[12px] shadow-2xl"
              />
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 max-w-2xl text-center px-6"
            >
              <p className="text-sm md:text-base font-sans text-muted-foreground">
                {alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}