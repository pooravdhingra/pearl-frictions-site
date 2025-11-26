import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/cork-granules/1.jpg",
  "/products/cork-granules/2.jpg",
  "/products/cork-granules/3.jpg",
];

const rows: [string, string][] = [
  ["Thickness", "1.5 mm"],
  ["Density", "65 Kg/cm³"],
  ["Size", "0.5 to 6 mm"],
  ["Color", "Natural brown"],
  ["Usage / Application", "Industrial use"],
  ["Material", "Cork wood"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "100 Kg"],
];

export default function CorkGranules() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Cork Products", href: "/products/cork" },
          { label: "Cork Granules" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Cork Granules</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are involved in producing an exclusive range of cork granules. These products are
            used as a frictional material in brake shoes and moulded clutch plates for the
            automotive industry. They are made using high-quality raw materials and tested on
            various parameters to ensure optimum performance. We supply cork granules within
            committed lead times.
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
