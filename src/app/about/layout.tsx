import type { Metadata } from "next";
import { AboutSubnav } from "@/components/about-subnav";

export const metadata: Metadata = {
  title: "About Us | Pearl Frictions",
  description:
    "Company profile, product profile, quality, and infrastructure of Pearl Frictions.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Desktop: true left sidebar; Mobile: stacked with subnav on top */}
      <div className="md:flex md:gap-10">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-72 md:shrink-0">
          <AboutSubnav />
        </aside>

        {/* Content column */}
        <div className="flex-1">
          {/* Mobile subnav */}
          <div className="md:hidden mb-6">
            <AboutSubnav />
          </div>

          {/* Prose spacing tuned for readable paragraphs/lists/tables */}
          <article className="prose prose-zinc max-w-none dark:prose-invert
                              prose-headings:scroll-mt-24
                              prose-p:my-4 prose-ul:my-4 prose-ol:my-4
                              prose-table:my-6 prose-img:my-6">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
