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
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/55" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 text-white sm:py-28 lg:py-32">
          <div className="inline-flex max-w-3xl flex-col gap-4 rounded-2xl bg-black/45 p-6 shadow-lg backdrop-blur-sm sm:gap-6 sm:p-8">
            <h1 className="text-balance text-3xl font-semibold leading-tight drop-shadow sm:text-5xl">
              Raw Materials for Friction, Sealing &amp; Insulation Industries since 1962
            </h1>
            <p className="text-balance text-base text-white/90 sm:text-lg">
              Cork, Graphite, Asbestos, Rubber and Fibre products manufactured to rigorous quality
              standards
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="default"
                  className="w-full px-8 py-3 text-lg hover:scale-105 hover:shadow-lg sm:w-auto"
                >
                  View Products
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white/90 px-8 py-3 text-lg text-black hover:scale-105 hover:bg-white hover:shadow-lg sm:w-auto"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
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
