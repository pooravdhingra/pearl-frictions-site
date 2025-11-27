import Image from "next/image";

export default function ProductProfile() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
        <div className="relative h-64 sm:h-80">
          <Image src="/about/product-hero.jpg" alt="Products" fill className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Product Profile</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Comprehensive range of cork, graphite, asbestos and non-asbestos sealing products.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mt-10 space-y-4 text-sm leading-7 text-muted-foreground">
        <p>
          We are one of the leading manufactures and exporters of quality Cork, Graphite, Asbestos and Non-Asbestos Fiber Products.
          Our range includes ceramic packings, cellulose paper, spiral wound gaskets, cylinder head
          gaskets, ceramic yarn, ceramic rope, ceramic cloth, ceramic tape, cellulose paper, ceramic
          sealings, asbestos fiber, glass fiber, graphite sheet, asbestos millboard sheet, asbestos
          yarn, asbestos rope, asbestos tape, asbestos cloth, glass rope, glass yarn, glass tape,
          glass cloth, c.a.f. jointing sheet, grafoil, asbestos textile products, flexible graphite
          sheets, flexible graphite rolls, flexible grafoil sheets, flexible grafoil rolls, cork
          products, cork stopper, cork granules, cork sheet, plain cork sheet, rubberised cork sheet,
          cork slab. We also offer Asbestos Millboard Sheets, C.A.F (Compressed Asbestos Fiber)
          Jointing Sheets, Glass Fiber &amp; Ceramic Sealings &amp; Packing and Friction Raw
          Material. Our range of products widely caters to the requirements of Engineering and
          Automotive sectors.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Salient Features</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Light in weight</li>
          <li>Imputrescible</li>
          <li>Impervious to liquids and gases</li>
          <li>Flexible</li>
          <li>Dimensional stability</li>
          <li>Thermal and acoustic insulator</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Further, we also customize these as per the specifications detailed by our clients.
        </p>
      </section>
    </>
  );
}
