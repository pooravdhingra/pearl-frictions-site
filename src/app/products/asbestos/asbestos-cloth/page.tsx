import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/asbestos-cloth/1.jpg",
  "/products/asbestos-cloth/2.jpg",
];

const rows: [string, string][] = [
  ["Size", "1 metre & 1.2 metre width"],
  ["Thickness", "1.5mm to 6mm"],
  ["Material", "Asbestos"],
  ["Color", "White"],
  ["Max withstanding temperature", "500°C"],
  ["Packing type", "As per demand / standard"],
  ["Packaging type", "Roll"],
  ["Shape", "In roll form"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "100 Kilogram"],
];

const applications = [
  "Fire resistant blankets, gloves and aprons",
  "Belts for conveying heated objects through ovens and dryers",
  "Covers for rollers on laundry flat-work ironers and dryers",
  "Laminating cloth in plastic parts for heat insulation",
  "Curtains for dryers and welding booths",
  "Shields to protect workmen from fire",
  "Safety clothing and filter cloths",
  "Wrapping for sheet glass and conveyor rollers",
];

export default function AsbestosCloth() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Asbestos Cloth" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Asbestos Cloth</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Asbestos cloth is used in manufacturing fire-resistant blankets, gloves and aprons, as
            well as belts for conveying heated objects through ovens and dryers. It is also used as
            covers for rollers, laminating cloth for heat insulation and in a variety of safety and
            shielding applications.
          </p>

          <h2 className="mt-6 text-lg font-medium">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {applications.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-medium">Product Details</h2>
          <table className="mt-2 w-full overflow-hidden rounded-lg border text-sm">
            <tbody>
              {rows.map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="w-1/3 bg-muted/50 px-3 py-2 font-medium">{k}</td>
                  <td className="px-3 py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
