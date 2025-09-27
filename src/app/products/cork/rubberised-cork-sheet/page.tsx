import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGallery } from "@/components/product-gallery";

const images = [
  "/products/rubberised-cork-sheet/1.jpg",
  "/products/rubberised-cork-sheet/2.jpg",
  "/products/rubberised-cork-sheet/3.jpg",
];

const rows: [string, string][] = [
  ["Size (L x B)", "900 mm X 600 mm"],
  ["Size/Dimension", "600mm X 900mm, 900mm X 900mm"],
  ["Thickness Available", "1.0mm to 25mm"],
  ["Material", "Cork & Rubber"],
  ["Color", "Brown, Red, Black"],
  ["Type", "Rubberised Cork Sheets"],
  ["Usage/Application", "Gaskets"],
  ["Condition", "New"],
  ["Brand", "Pearl"],
  ["Country of Origin", "Made in India"],
  ["Use", "Industrial & Automotive"],
  ["Minimum Order Quantity", "100 Sheet"],
];

export default function RubberisedCorkSheet() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

        <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork", href: "/products/cork" },
          { label: "Rubberised Cork Sheet" },
        ]}
      />
      
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Rubberised Cork Sheet</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Manufactured using high-grade cork granules sourced from Portugal &amp; Spain. Made in
            varied sizes and dimensions to match exact requirements. Rubberised cork sheets can be
            folded into rounded shapes/rolls as required. Each batch is tested on multiple parameters
            to meet international standards, using optimum-quality polymer.
          </p>

          <h2 className="mt-6 text-lg font-medium">Product Details</h2>
          <table className="mt-2 w-full overflow-hidden rounded-lg border text-sm">
            <tbody>
              {rows.map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="bg-muted/50 px-3 py-2 font-medium w-1/3">{k}</td>
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
