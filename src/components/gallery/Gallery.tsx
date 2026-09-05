"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Gallery = ({ photos }: { photos: Photo[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null || photos.length === 0
          ? i
          : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null || photos.length === 0 ? i : (i + 1) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-24 md:px-16">
      <div className="mb-10 text-center">
        <span className="text-xs text-syntax-comment">{"// assets/gallery"}</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Gallery</h2>
      </div>

      {photos.length === 0 && (
        <p className="text-sm text-muted-foreground">No photos yet.</p>
      )}

      <div className="w-full max-w-5xl columns-2 sm:columns-3 gap-3 [column-fill:_balance]">
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="mb-3 block w-full overflow-hidden rounded-xl break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              priority={i < 2}
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 text-white/80 hover:text-white cursor-pointer"
              onClick={close}
            >
              <X className="h-8 w-8" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative h-[80vh] w-[90vw] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <button
              type="button"
              aria-label="Next photo"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
