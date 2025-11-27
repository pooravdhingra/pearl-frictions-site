"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Overview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr,1.05fr] md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
          <Image
            src="/overview.jpg"
            alt="Pearl Frictions facility"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome to Pearl Frictions Inc.
          </h2>

          {/* always visible intro paragraph */}
          <p className="mt-3 text-balance text-base leading-relaxed text-muted-foreground">
            Established by our father, <strong>Mr. Ramesh Dhingra</strong> in the year 1962, Pearl
            Frictions Inc. is engaged in importing and manufacturing quality raw materials for
            Automotive, Steel, Insulation &amp; allied industries. Our range includes Cork Products,
            Graphite Materials, Non-Asbestos Sealing &amp; Packings, Asbestos &amp; Non Asbestos
            Fibers, Mineral Fibers, NBR Rubber Bales &amp; speciality powders etc.
          </p>

          {/* extra detail on toggle */}
          <div
            className={`${expanded ? "block" : "hidden"} mt-3 space-y-3 text-base leading-relaxed text-muted-foreground`}
          >
            <p className="text-balance">
              Our range of products is appreciated for features such as high purity, light
              densities, maximum resistance to liquids and gases, dimensional stability, very low
              loss of energy, and thermal and acoustic insulation.
            </p>
            <p className="text-balance">
              Our modern manufacturing unit is well equipped with latest machines that help us to
              manufacture our customized range of products, best suited to meet the requirements of
              our esteemed clients.
            </p>
          </div>

          <div className="mt-4">
            <Button variant="outline" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show Less" : "Read More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
