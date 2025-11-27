import Image from "next/image";

export default function CompanyProfile() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
        <div className="relative h-64 sm:h-80">
          <Image src="/about/company-hero.jpg" alt="Company" fill className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Company Profile</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Established in 1962, Pearl Frictions Inc. (New Delhi) manufactures and exports quality cork,
            graphite and related sealing products for engineering &amp; automotive applications.
          </p>
        </div>
      </section>

      {/* Intro — single column continuous paragraph */}
      <section className="mt-10 text-sm leading-7 text-muted-foreground">
        <p>
          Established in the year 1962, <strong>Pearl Frictions Inc., New Delhi</strong> is engaged in importing, 
          manufacturing and exporting quality Cork, Graphite, Asbestos and Non-Asbestos Fiber Products. Our range includes Ceramic
          Packings, Cellulose Paper, Spiral Wound Gaskets, Cylinder Head Gaskets, Ceramic Yarn,
          Ceramic Rope, Ceramic Cloth, Ceramic Tape, Cellulose Paper, Ceramic Sealings, Asbestos
          Fiber, Glass Fiber, Graphite Sheet, Asbestos Millboard Sheet, Asbestos Yarn, Asbestos
          Rope, Asbestos Tape, asbestos cloth, glass rope, glass yarn, glass tape, glass cloth,
          C.A.F. jointing sheet, grafoil, asbestos textile products, flexible graphite sheets,
          flexible graphite rolls, flexible grafoil sheets, flexible grafoil rolls, cork products,
          cork stopper, cork granules, cork sheet, plain cork sheet, rubberised cork sheet and cork
          slab. We also offer our clients
          Non-Polluting Non-Asbestos Products, Gaskets, Plant &amp; Machinery and CEMJO Material.
          Our range of products is appreciated for features such as light in weight, imputrescible,
          impervious to liquids and gases, dimensional stability and thermal and acoustic
          insulation. These widely cater to the requirements of Engineering and Automotive sectors.
          Our modern manufacturing unit is well equipped with latest machines that help us to
          manufacture our range of products in an effectual manner. These products
          can be customized to meet the requirements of our clients.
        </p>
        <p className="mt-4">
          We have number of dedicated professionals who undertake the entire business operation in an
          appropriate manner. Our range of products is tested on strength, durability, flexibility,
          dimensional stability and weight to ensure international quality standards. Under the able
          guidance of our CEO, <strong>Mr. Gaurav Dhingra</strong>, we have been able to carve niche
          for ourselves in this highly competitive market. His sharp business acumen and knowledge
          have enabled us to serve our clients in the best possible manner. owing to the efforts of
          our owner and quality range of products.
        </p>
      </section>

      {/* Factsheet */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Basic Information - Factsheet</h2>
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/10">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody className="[&_tr:nth-child(even)]:bg-muted/40">
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Nature of Business</td><td className="p-3 leading-relaxed">Importer - Trader</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Additional Business</td><td className="p-3 leading-relaxed">Wholesale Business; Bonded Warehouse; Factory / Manufacturing</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Company CEO</td><td className="p-3 leading-relaxed">Gaurav Dhingra</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Registered Address</td><td className="p-3 leading-relaxed">26/181-C, Farid Puri, West Patel Nagar, New Delhi - 110008, Delhi, India</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Total Number of Employees</td><td className="p-3 leading-relaxed">11 to 25 People</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Annual Turnover</td><td className="p-3 leading-relaxed">5 Cr - 10 Cr</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="mt-8 text-lg font-semibold tracking-tight">Packaging / Payment &amp; Shipment</h3>
        <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-black/10">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody className="[&_tr:nth-child(even)]:bg-muted/40">
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Customized Packaging</td><td className="p-3 leading-relaxed">Yes</td></tr>
                <tr><td className="min-w-[11rem] p-3 font-medium align-top">Payment Mode</td><td className="p-3 leading-relaxed">Cash; Credit Card; Cheque; Online</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Why Us</h2>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Ethical business practices</li>
          <li>Modern infrastructure</li>
          <li>Team of experts</li>
          <li>Quality range of Cork and Asbestos Products</li>
          <li>Customization</li>
          <li>Timely delivery</li>
        </ul>
      </section>
    </>
  );
}
