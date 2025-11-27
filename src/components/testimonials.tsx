import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Reliable quality and timely deliveries. Their cork sheets performed exactly to spec in our gasket line.",
    author: "Rohit Mehta, Pune",
    product: "Cork Sheet",
  },
  {
    quote:
      "Flexible graphite sheets from Pearl Frictions have excellent sealing under high temperature cycles.",
    author: "Priya Iyer, Chennai",
    product: "Flexible Graphite Sheet",
  },
  {
    quote:
      "Great support from the sales team and consistent material properties across batches.",
    author: "Amit Khanna, New Delhi",
    product: "Rubberised Cork",
  },
];

function Stars({ value = 4.6 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const total = 5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
      {half && (
        <Star className="h-4 w-4 text-yellow-400">
          {/* simple half overlay */}
        </Star>
      )}
      {Array.from({ length: total - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e-${i}`} className="h-4 w-4 text-yellow-400" />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">{value}/5</span>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Testimonials</h2>
        <Stars value={4.6} />
      </div>
      <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="p-5">
            <p className="text-sm leading-relaxed">“{t.quote}”</p>
            <div className="mt-4 text-sm font-medium">{t.author}</div>
            <div className="text-xs text-muted-foreground">{t.product}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
