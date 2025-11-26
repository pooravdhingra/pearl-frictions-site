import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/synthetic-rubber-bales/1.jpg",
  "/products/synthetic-rubber-bales/2.jpg",
  "/products/synthetic-rubber-bales/3.jpg",
];

const rows: [string, string][] = [
  ["Usage / Application", "Automotive industry"],
  ["Form", "Bales"],
  ["Quantity per Pack", "25 Kgs"],
  ["Material", "NBR rubber"],
  ["Purity", "100%"],
  ["Grade Standard", "High nitrile"],
  ["Weather resistant", "Yes"],
  ["Oil and grease resistant", "Yes"],
  ["Heat resistant", "Yes"],
  ["Chemical resistant", "Yes"],
  ["Physical form", "Bales"],
  ["Minimum Order Quantity", "500 Kg"],
];

const grades = [
  "Perbunan-3945",
  "Perbunan-3965",
  "JSR-220SH",
  "Europrene-3960",
];

export default function SyntheticRubberBales() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Rubber Products", href: "/products/rubber" },
          { label: "Synthetic Rubber Bales (NBR)" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Synthetic Rubber Bales (NBR)
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We import high-nitrile NBR rubber bales for friction and sealing applications in the
            automotive industry. Material is supplied in original wooden pallets direct from the
            manufacturer, ensuring consistent quality and traceability.
          </p>

          <h2 className="mt-6 text-lg font-medium">Typical Grades</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {grades.map((g) => (
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
