"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
        <Image src={images[active]} alt="" fill className="object-cover" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-black/10 transition",
              i === active
                ? "outline outline-2 outline-black"
                : "hover:ring-2 hover:ring-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black"
            )}
            aria-label={`Preview image ${i + 1}`}
          >
            <Image src={src} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
