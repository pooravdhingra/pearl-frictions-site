import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/asbestos-rope/1.jpg",
  "/products/asbestos-rope/2.jpg",
  "/products/asbestos-rope/3.jpg",
];

const rows: [string, string][] = [
  ["Diameter", "6mm–50mm"],
  ["Rope Shape", "Round"],
  ["Rope Type", "Braided"],
  ["Shape", "Round"],
  ["Color", "Natural"],
  ["Material", "Asbestos"],
  ["Condition", "New"],
  ["Grade Index", "Standard Grade"],
  ["Packaging Type", "Roll"],
  ["Packing Type", "Roll"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "100 Kilogram"],
];

export default function AsbestosRope() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Asbestos Rope" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Asbestos Rope</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Asbestos rope is widely used for insulation and prevention of heat loss in boilers,
            ovens, generators and pipelines. Our asbestos rope is made from imported chrysotile
            asbestos fibers, making it highly heat resistant and suitable for demanding industrial
            applications.
          </p>

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
