import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGallery } from "@/components/product-gallery";

const images = [
  "/products/antivibration-cork-sheet/1.jpg",
  "/products/antivibration-cork-sheet/2.jpg",
  "/products/antivibration-cork-sheet/3.jpg",
];

const rows: [string, string][] = [
  ["Thickness", "50 mm"],
  ["Material", "Cork"],
  ["Product Type", "Cork Sheet"],
  ["Size/Dimension", "600mm X 900mm"],
  ["Condition", "New"],
  ["Country of Origin", "Made in India"],
  ["Brand", "Pearl"],
  ["Thickness Available", "25mm, 50mm, 100mm"],
  ["Minimum Order Quantity", "100 Sheet"],
];

export default function AntivibrationCorkSheet() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

        <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork", href: "/products/cork" },
          { label: "Antivibration Cork Sheet" },
        ]}
      />
      
      <div className="grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Antivibration Cork Sheet</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Composition Cork is made from selected granulated cork, bonded using synthetic or natural
            binders and additives. Granules are carefully selected to suit user requirements. Anti-Vibration
            Cork Slabs are used in foundations of generators and heavy machinery to reduce vibration
            impact on surroundings, and for sound-proofing insulation in theatres and auditoriums.
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
