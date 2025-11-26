import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/wooden-cork-stopper/1.jpg",
  "/products/wooden-cork-stopper/2.jpg",
  "/products/wooden-cork-stopper/3.jpg",
];

const rows: [string, string][] = [
  ["Color", "Natural brown"],
  ["Shape", "Conical"],
  ["Material", "Wooden"],
  ["Condition", "New"],
  ["Use", "Industrial"],
];

const applications = [
  "As champagne cork",
  "Wine bottles",
  "Medicinal bottles",
  "Perfume bottles",
  "Chemical bottles",
];

export default function WoodenCorkStopper() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork Products", href: "/products/cork" },
          { label: "Wooden Cork Stopper" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Wooden Cork Stopper</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The cork stoppers offered by us are available in a range of sizes to fit different
            containers and openings. Cork stoppers are among the most widely used cork products
            globally and are suitable for a variety of bottling and sealing applications.
          </p>

          <h2 className="mt-6 text-lg font-medium">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {applications.map((item) => (
              <li key={item}>{item}</li>
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
