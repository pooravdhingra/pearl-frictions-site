import { ProductGallery } from "@/components/product-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";

const images = [
  "/products/flexible-graphite-sheets/1.jpg",
  "/products/flexible-graphite-sheets/2.jpg",
  "/products/flexible-graphite-sheets/3.jpg",
];

const details: [string, string][] = [
  ["Thickness", "1.5mm to 5.0mm"],
  ["Shape", "Sheet"],
  ["Grade", "99% purity"],
  ["Brand", "PEARL / Imported"],
  ["Sizes", "1 metre x 1 metre"],
  ["Material", "Carbon"],
  ["Density", "1.0 g/cm³"],
  ["Purity", "99%"],
  ["Use", "Industrial"],
  ["Minimum Order Quantity", "100 kgs"],
];

const mainProperties = [
  {
    property: "Tolerance of density (g/cm³)",
    gradeI: "±0.03",
    gradeII: "±0.03",
    gradeIII: "±0.05",
  },
  {
    property: "Tolerance of thickness (mm)",
    gradeI: "±0.03",
    gradeII: "±0.03",
    gradeIII: "±0.04",
  },
  {
    property: "Carbon content (%)",
    gradeI: "≥99.5",
    gradeII: "≥99",
    gradeIII: "≥97",
  },
  {
    property: "Tensile strength (MPa)",
    gradeI: "≥5",
    gradeII: "≥4.8",
    gradeIII: "≥4.5",
  },
  {
    property: "Compressibility (%)",
    gradeI: "≥50",
    gradeII: "≥50",
    gradeIII: "≥50",
  },
  {
    property: "Recovery (%)",
    gradeI: "≥12",
    gradeII: "≥11",
    gradeIII: "≥11",
  },
  {
    property: "Sulphur content (ppm)",
    gradeI: "40–800",
    gradeII: "100–800",
    gradeIII: "<1200",
  },
  {
    property: "Chlorine content (ppm)",
    gradeI: "<20",
    gradeII: "<25",
    gradeIII: "<30",
  },
  {
    property: "Stress relaxation (%)",
    gradeI: "10",
    gradeII: "10",
    gradeIII: "10",
  },
  {
    property: "Ignition loss (%)",
    gradeI: "<0.5",
    gradeII: "<0.1",
    gradeIII: "<0.1",
  },
];

export default function FlexibleGraphiteSheets() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Graphite Products", href: "/products/graphite" },
          { label: "Flexible Graphite Sheets" },
        ]}
      />

      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <ProductGallery images={images} />
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Flexible Graphite Sheets</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The flexible graphite sheets offered by us are manufactured using expanded graphite
            flakes with high carbon content. Flakes are chemically treated, expanded at high
            temperature and then rolled to obtain material with excellent temperature resistance,
            corrosion resistance and elasticity.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            These sheets are the base material for reinforced graphite sheets, graphite tapes,
            packings and sealing gaskets used across a wide range of industrial applications.
          </p>

          <h2 className="mt-6 text-lg font-medium">Product Details</h2>
          <table className="mt-2 w-full overflow-hidden rounded-lg border text-sm">
            <tbody>
              {details.map(([k, v]) => (
                <tr key={k} className="border-b last:border-none">
                  <td className="w-1/3 bg-muted/50 px-3 py-2 font-medium">{k}</td>
                  <td className="px-3 py-2">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="mt-6 text-lg font-medium">Main Properties (Industrial Grades)</h2>
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full overflow-hidden rounded-lg border text-xs sm:text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Property</th>
                  <th className="px-3 py-2 text-left font-medium">Industrial Grade I</th>
                  <th className="px-3 py-2 text-left font-medium">Industrial Grade II</th>
                  <th className="px-3 py-2 text-left font-medium">Industrial Grade III</th>
                </tr>
              </thead>
              <tbody>
                {mainProperties.map((row) => (
                  <tr key={row.property} className="border-b last:border-none">
                    <td className="px-3 py-2">{row.property}</td>
                    <td className="px-3 py-2">{row.gradeI}</td>
                    <td className="px-3 py-2">{row.gradeII}</td>
                    <td className="px-3 py-2">{row.gradeIII}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
