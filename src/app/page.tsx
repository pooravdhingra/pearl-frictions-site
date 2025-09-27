import Image from "next/image";
import { Overview } from "@/components/overview";
import { Bestsellers } from "@/components/bestsellers";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="Pearl Frictions manufacturing"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32 text-white">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight drop-shadow">
            Precision Friction Materials since 1962
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg drop-shadow">
            Cork, graphite, and non-asbestos sealing products for engineering and automotive sectors—manufactured to rigorous quality standards.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/products">
              <Button size="lg" variant="default">View Products</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <Overview />

      {/* Bestsellers */}
      <Bestsellers />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
