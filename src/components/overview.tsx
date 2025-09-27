"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Overview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10">
          <Image
            src="/overview.jpg"
            alt="Pearl Frictions facility"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Welcome to Pearl Frictions Inc.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Established in the year 1962, Pearl Frictions is engaged in manufacturing and exporting quality Cork and Asbestos Products. Our range includes Ceramic Packings, Cellulose Paper, Spiral Wound Gaskets, Cylinder Head Gaskets, Ceramic Yarn, Ceramic Rope, Ceramic Cloth, Ceramic Tape, Cellulose Paper, Ceramic Sealings, Asbestos Fiber, Glass Fiber, Graphite Sheet, Asbestos Millboard Sheet, Asbestos Yarn, Asbestos Rope, Asbestos Tape, asbestos cloth, glass rope, glass yarn, glass tape, glass cloth, c.a.f. jointing sheet, grafoil, asbestos textile products, flexible graphite sheets, flexible graphite rolls, flexible grafoil sheets, flexible grafoil rolls, cork products, cork stopper, cork granules, cork sheet, plain cork sheet, rubberised cork sheet and cork slab. Apart from manufacturing Cork and Asbestos Products, we also offer our clients Non-Polluting Non-Asbestos Products, Gaskets, Plant & Machinery and CEMJO Material.
          </p>

          <div className={`${expanded ? "block" : "hidden"} mt-3 text-sm text-muted-foreground`}>
            Our range of products is appreciated for features such as light in weight, imputrescible, impervious to liquids and gases, dimensional stability and thermal and acoustic insulation. These widely cater to the requirements of Engineering and Automotive sectors. Our modern manufacturing unit is well equipped with latest machines that help us to manufacture our range of products in an effectual manner. These Asbestos and Cork Products can be customized to meet the requirements of our clients.
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
