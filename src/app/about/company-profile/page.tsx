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
            Established in 1962, Pearl Industries (New Delhi) manufactures and exports quality cork,
            graphite and related sealing products for engineering &amp; automotive applications.
          </p>
        </div>
      </section>

      {/* Intro — single column continuous paragraph */}
      <section className="mt-10 text-sm leading-7 text-muted-foreground">
        <p>
          Established in the year 1962, <strong>Pearl Industries, New Delhi</strong> is engaged in
          manufacturing and exporting quality Cork and Asbestos Products. Our range includes Ceramic
          Packings, Cellulose Paper, Spiral Wound Gaskets, Cylinder Head Gaskets, Ceramic Yarn,
          Ceramic Rope, Ceramic Cloth, Ceramic Tape, Cellulose Paper, Ceramic Sealings, Asbestos
          Fiber, Glass Fiber, Graphite Sheet, Asbestos Millboard Sheet, Asbestos Yarn, Asbestos
          Rope, Asbestos Tape, asbestos cloth, glass rope, glass yarn, glass tape, glass cloth,
          C.A.F. jointing sheet, grafoil, asbestos textile products, flexible graphite sheets,
          flexible graphite rolls, flexible grafoil sheets, flexible grafoil rolls, cork products,
          cork stopper, cork granules, cork sheet, plain cork sheet, rubberised cork sheet and cork
          slab. Apart from manufacturing Cork and Asbestos Products, we also offer our clients
          Non-Polluting Non-Asbestos Products, Gaskets, Plant &amp; Machinery and CEMJO Material.
          Our range of products is appreciated for features such as light in weight, imputrescible,
          impervious to liquids and gases, dimensional stability and thermal and acoustic
          insulation. These widely cater to the requirements of Engineering and Automotive sectors.
          Our modern manufacturing unit is well equipped with latest machines that help us to
          manufacture our range of products in an effectual manner. These Asbestos and Cork Products
          can be customized to meet the requirements of our clients.
        </p>
        <p className="mt-4">
          We have number of dedicated professionals who undertake the entire business operation in an
          appropriate manner. Our range of products is tested on strength, durability, flexibility,
          dimensional stability and weight to ensure international quality standards. Under the able
          guidance of our CEO, <strong>Mr. Sandeep Dhingra</strong>, we have been able to carve niche
          for ourselves in this highly competitive market. His sharp business acumen and knowledge
          have enabled us to serve our clients in the best possible manner. Owing to the efforts of
          our owner and quality range of products.
        </p>
      </section>

      {/* Factsheet */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Basic Information — Factsheet</h2>
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/10">
          <table className="w-full text-sm">
            <tbody className="[&_tr:nth-child(even)]:bg-muted/40">
              <tr><td className="p-3 font-medium w-56">Nature of Business</td><td className="p-3">Trader - Retailer</td></tr>
              <tr><td className="p-3 font-medium">Additional Business</td><td className="p-3">Retail Business; Wholesale Business; Bonded Warehouse; Factory / Manufacturing</td></tr>
              <tr><td className="p-3 font-medium">Company CEO</td><td className="p-3">Sandeep Dhingra</td></tr>
              <tr><td className="p-3 font-medium">Registered Address</td><td className="p-3">778/M, Faridpuri Industrial Area, New Delhi-110008, Delhi, India</td></tr>
              <tr><td className="p-3 font-medium">Total Number of Employees</td><td className="p-3">11 to 25 People</td></tr>
              <tr><td className="p-3 font-medium">GST Registration Date</td><td className="p-3">01-07-2017</td></tr>
              <tr><td className="p-3 font-medium">Legal Status of Firm</td><td className="p-3">Proprietorship</td></tr>
              <tr><td className="p-3 font-medium">Annual Turnover</td><td className="p-3">1.5 - 5 Cr</td></tr>
              <tr><td className="p-3 font-medium">GST Partner Name</td><td className="p-3">Sandeep Dhingra</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold tracking-tight">Statutory Profile</h3>
        <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-black/10">
          <table className="w-full text-sm">
            <tbody className="[&_tr:nth-child(even)]:bg-muted/40">
              <tr><td className="p-3 font-medium w-56">Import Export Code (IEC)</td><td className="p-3">0595060757</td></tr>
              <tr><td className="p-3 font-medium">TAN No.</td><td className="p-3">DELS3*****</td></tr>
              <tr><td className="p-3 font-medium">Banker</td><td className="p-3">STATE BANK OF INDIA (SBI); INDUSIND BANK</td></tr>
              <tr><td className="p-3 font-medium">GST No.</td><td className="p-3">07AAFPD7396H1ZI</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold tracking-tight">Packaging / Payment &amp; Shipment</h3>
        <div className="mt-3 overflow-hidden rounded-xl ring-1 ring-black/10">
          <table className="w-full text-sm">
            <tbody className="[&_tr:nth-child(even)]:bg-muted/40">
              <tr><td className="p-3 font-medium w-56">Customized Packaging</td><td className="p-3">Yes</td></tr>
              <tr><td className="p-3 font-medium">Payment Mode</td><td className="p-3">Cash; Credit Card; Cheque; Online</td></tr>
            </tbody>
          </table>
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
