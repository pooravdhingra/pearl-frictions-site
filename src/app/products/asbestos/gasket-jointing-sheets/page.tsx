import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/gasket-jointing-sheets/1.jpg",
  "/products/gasket-jointing-sheets/2.jpg",
  "/products/gasket-jointing-sheets/3.jpg",
];

const rows: [string, string][] = [
  ["Thickness", "0.40 mm"],
  ["Temperature", "550°C"],
  ["Size", "1500mm x 1500mm, 1000mm x 1000mm"],
  ["Max Operating Pressure", "100 bar"],
  ["Material", "Asbestos"],
  ["Brand", "Pearl"],
  ["Color", "Red, Black, Green, Yellow"],
  ["Usage / Application", "Industrial use"],
  ["Packaging Type", "In rolls"],
  ["Country of Origin", "Made in India"],
  ["Minimum Order Quantity", "100 Kilogram"],
];

const bulletPoints = [
  "C.A.F. (Compressed Asbestos Fiber) jointing sheets",
  "N.A.M. (Non-Asbestos Material) jointing sheets",
  "Various grades for different temperature, pressure and media",
  "Manufactured from selected chrysotile asbestos fibers and heat-resistant binders",
  "Vulcanised sheets of homogeneous composition and uniform thickness",
  "Suitable for sealing water, steam, alkalies, organic & inorganic acids, thermal oils, ammonia and various chemicals",
  "Metallic jointing sheets with mesh wire gauge for high temperature and narrow gasket widths such as cylinder heads and exhaust manifolds",
];

export default function GasketJointingSheets() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Gasket Jointing Sheets (C.A.F & N.A.M.)" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Gasket Jointing Sheets (C.A.F. &amp; N.A.M.)
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            We manufacture various grades of C.A.F. (Compressed Asbestos Fiber) jointing sheets and
            N.A.M. (Non Asbestos Material) jointing sheets to suit different combinations of
            operating temperature, pressure and media. Sheets are produced from carefully selected
            chrysotile asbestos fibers, heat-resistant binders and vulcanised compositions to
            deliver reliable sealing performance.
          </p>

          <h2 className="mt-6 text-lg font-medium">Key Features &amp; Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {bulletPoints.map((b) => (
              <li key={b}>{b}</li>
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
