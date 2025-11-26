import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/asbestos-yarn/1.jpg",
  "/products/asbestos-yarn/2.jpg",
  "/products/asbestos-yarn/3.jpg",
];

const rows: [string, string][] = [
  ["Material", "Asbestos"],
  ["No. of ply", "3 ply"],
  ["Pattern", "Plain"],
  ["Usage / Application", "Industrial"],
  ["Color", "White"],
  ["Packaging Type", "Roll"],
  ["Feature", "High strength"],
  ["Lustre", "Bright"],
  ["Pack size", "Kilogram"],
  ["Pack type", "Roll"],
  ["Condition", "New"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "100 Kilogram"],
];

const groups = ["Non-metallic", "Metallic – with brass & zinc metal wires"];

export default function AsbestosYarn() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Asbestos Yarn" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Asbestos Yarn</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We supply asbestos yarns in a wide range of constructions depending on the end
            application. Yarns are commercially distinguished into non-metallic grades and metallic
            grades reinforced with brass or zinc wires for added strength and durability.
          </p>

          <h2 className="mt-6 text-lg font-medium">Commercial Groups</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {groups.map((g) => (
              <li key={g}>{g}</li>
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
