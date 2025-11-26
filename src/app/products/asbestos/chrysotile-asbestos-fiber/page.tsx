import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/chrysotile-asbestos-fiber/1.jpg",
  "/products/chrysotile-asbestos-fiber/2.jpg",
];

const rows: [string, string][] = [
  ["Usage / Application", "Industrial"],
  ["Material", "Chrysotile"],
  ["Fiber Type", "Asbestos"],
  ["Color", "White"],
  ["Pattern", "Raw"],
  ["Packaging Type", "PP bag"],
  ["Packaging Size", "50 Kgs"],
  ["Minimum Order Quantity", "100 Kg"],
  ["Packaging Details", "Original P.P. bags of mines"],
];

export default function ChrysotileAsbestosFiber() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Chrysotile Asbestos Fiber" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Chrysotile Asbestos Fiber</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We are leading suppliers of chrysotile raw asbestos fiber of Kazakhstan, Russia, Brazil
            and China origin. For more than four decades, we have supplied consistent quality
            material at economical prices to our industrial customers.
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
