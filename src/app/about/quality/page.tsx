import Image from "next/image";

export default function Quality() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
        <div className="relative h-64 sm:h-80">
          <Image src="/about/quality-hero.jpg" alt="Quality" fill className="object-cover" />
        </div>
        <div className="p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Quality</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            ISO-aligned processes, stringent testing, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Quality Assurance</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          We follow strict quality control policies to give our customers quality products. We have gained ISO 9001:2000 certified for the quality of 
          our range of products. Our adherence to ethical business practices and qualitative approach
          has given us an edge over the other leading organizations. Right from the initial stage of
          procurement of raw material till the final delivery of the consignment, we undertake
          stringent quality control measures.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Our quality analysts stringently check our range of products on well-defined parameters such as:
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>Secure seal tester, used for checking of leak pressure in filled glass bottles</li>
          <li>Pasteurization test, for checking of crown corks on filled bottles after pasteurization</li>
          <li>
            Weighing scale (Dhona) used for checking of crown weight of liner and film weight of
            coatings with accuracy up to 0.0001 gm
          </li>
          <li>Hardness tester to test hardness of ETP and TFS sheets</li>
          <li>Environment friendliness</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          With the help of these quality control parameters, we have maintained a strong position in
          the industry. Our advanced methodology and innovative techniques enable us to manufacture
          our range of Cork and Asbestos Products in compliance with international norms. Further, we
          also update our testing machines and tools on regular bases so that we can provide effective
          Cork and Asbestos Products to our valued clients.
        </p>
      </section>

      {/* Customer Satisfaction */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Customer Satisfaction</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Being a customer centric organization, our efforts have always been directed towards
          delivering quality Cork and Asbestos Products that meets the client expectations. Our
          constant innovation, evolution and a zest to introduce new and improved products has kept us
          in the forefront of domestic and international market. Over the years we have made a long
          list of client base all over the world. Some of the factors that enable us in acquiring
          utmost client satisfaction include:
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Immediate response to customers’ queries</li>
          <li>Implementation of established quality control policies</li>
          <li>Fulfillment of their specific requirements</li>
          <li>Easy transaction modes</li>
          <li>Delivery within stipulated time frame</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Our range of products is exported to across the globe specifically to the regions of
          Middle-East, Africa and Europe. Further, to make monetary transactions hassle free we accept
          easy payment modes including money transfer through bank from our esteemed clients.
        </p>
      </section>
    </>
  );
}
