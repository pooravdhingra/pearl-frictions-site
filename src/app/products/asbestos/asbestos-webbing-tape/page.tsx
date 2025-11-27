import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/asbestos-webbing-tape/1.jpg",
  "/products/asbestos-webbing-tape/2.jpg",
  "/products/asbestos-webbing-tape/3.jpg",
];

const rows: [string, string][] = [
  ["Usage / Application", "Industrial"],
  ["Material", "Asbestos"],
  ["Color", "White"],
  ["Brand", "PEARL"],
  ["Packaging Type", "Roll"],
  ["Working Temperature", "500°C"],
  ["Type", "Webbing tape"],
  ["Usage", "Industrial use"],
  ["Width", "12.5mm to 150mm"],
  ["Thickness", "1.5mm to 6mm (5 kg coils)"],
  ["Minimum Order Quantity", "100 Kg"],
];

const applications = [
  "Wrapping of exhaust pipes",
  "Hot and cold insulation",
  "Electric cables and live switch boxes",
  "Drying ovens and conveying hot articles in glass industries",
  "Oil lamps and heaters",
];

export default function AsbestosWebbingTape() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Asbestos Products", href: "/products/asbestos" },
          { label: "Asbestos Webbing Tape" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Asbestos Webbing Tape</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Asbestos webbing tapes are used for wrapping exhaust pipes, hot and cold insulation,
            electrical cabling and switch boxes, drying ovens and conveying hot articles in glass
            industries, oil lamps and heaters where high temperature resistance is critical.
          </p>

          <h2 className="mt-6 text-lg font-medium">Applications</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {applications.map((a) => (
              <li key={a}>{a}</li>
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
