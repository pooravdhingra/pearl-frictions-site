import Image from "next/image";

export default function InfrastructureFacilities() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
        <div className="relative h-64 sm:h-80">
          <Image
            src="/about/infrastructure-hero.jpg"
            alt="Infrastructure"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Infrastructure &amp; Facilities
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Modern production, warehousing, and R&amp;D with CAD/CAM capabilities.
          </p>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Manufacturing Facilities</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We have a state-of-the-art manufacturing unit located at Delhi (India). Our unit is
          equipped with all the latest machines and testing equipment. This unit is supervised by
          experienced professionals, who enable us to successfully manufacture our Asbestos and Cork
          Products in bulk within the stipulated time frame. Some of the prominent features of our
          manufacturing unit include:
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Advanced machinery</li>
          <li>World class production unit</li>
          <li>Contemporary production processes</li>
          <li>Highly skilled workforce</li>
          <li>Dedicated R and D unit</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Further, our in-house design unit has CAD/CAM facilities, which increases our operational
          efficiency through optimum utilization of available resources, be it manpower, materials or
          finances. Moreover, our wide transportation network enables us to deliver our consignment
          within the promised time period.
        </p>
      </section>

      {/* Warehousing & Packaging */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Warehousing and Packaging</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Our warehousing unit has high storage capacity to stock our range of Asbestos and Cork
          Products in bulk quantity. It has been internally divided into several sections to
          facilitate an easy accommodation, access and retrieval of our Cork and Asbestos Products.
          Important characteristics of our warehouse include:
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Spacious</li>
          <li>Highly automated</li>
          <li>Fire safety arrangements</li>
          <li>Well connected with various modes of transport</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Besides, we also pay special heed in effective packaging of our range of products so that
          they do not get damaged in transit. In this way we are able to offer our clients with tamper-free 
          Cork and Asbestos Products.
        </p>
      </section>

      {/* R&D */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Research and Development</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We are facilitated with Research and Development department, which is supervised by a team
          of experienced research experts. This department is equipped with all the latest tools and
          instruments assisting us in developing our Cork and Asbestos Products in line with the
          latest advancements in the industry. Our research experts also aid us in enhancing the
          production of Cork and Asbestos Products. Our R&amp;D department conducts research on the
          following factors:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Up-gradation of technology</li>
          <li>Improvisation of existing product range</li>
          <li>Customization</li>
          <li>Product research</li>
          <li>Development of new product range</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          All the information gathered from these studies are carefully documented and sent to the
          concerned department for product development. It is also recorded in our archives for
          future references.
        </p>
      </section>
    </>
  );
}
