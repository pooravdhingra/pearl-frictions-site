import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/decorative-cork-sheets-tiles/1.jpg",
  "/products/decorative-cork-sheets-tiles/2.jpg",
  "/products/decorative-cork-sheets-tiles/3.jpg",
];

const applications = [
  "Hotels, restaurants, bars, music halls or clubs",
  "Hospitals",
  "Cinemas",
  "Conference rooms",
  "Shopping centres",
  "Living rooms",
  "Kitchens",
];

const rows: [string, string][] = [
  ["Finish", "Glossy"],
  ["Size / Dimension", "300mm x 600mm, 600mm x 900mm"],
  ["Shape", "Rectangular"],
  ["Surface Treatment", "Polished"],
  ["Thickness", "3mm, 5mm"],
  ["Pattern", "Printed"],
  ["Material", "Cork"],
  ["Use", "Decorative"],
  ["Brand", "Pearl"],
  ["Minimum Order Quantity", "100 sq ft"],
];

const sizeInfo = [
  ["Standard Panel Sizes", "610mm x 915mm or 300mm x 300mm"],
  ["Standard Thicknesses", "3mm, 4.5mm, 6mm"],
];

export default function DecorativeCorkSheetsTiles() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork Products", href: "/products/cork" },
          { label: "Decorative Cork Sheets & Tiles" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Decorative Cork Sheets &amp; Tiles
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Cork decoration means creation and natural comfort. Pearl decorative cork sheets and
            cork tiles, with high thermal and acoustic insulation properties, are ideal for wall and
            ceiling panels where both performance and aesthetics are important.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Cork panels help reduce noise and temperature transfer while providing a warm, natural
            finish. They offer tremendous advantages when compared with many conventional
            decorative materials.
          </p>

          <h2 className="mt-6 text-lg font-medium">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {applications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-medium">Sizes &amp; Thicknesses</h2>
          <table className="mt-2 w-full overflow-hidden rounded-lg border text-sm">
            <tbody>
              {sizeInfo.map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="w-1/3 bg-muted/50 px-3 py-2 font-medium">{k}</td>
                  <td className="px-3 py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
