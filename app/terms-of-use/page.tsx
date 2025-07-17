"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Contactsection from "@/components/Contactsection";
import Link from "next/link";
import Header from "@/components/Header";

const Page = () => {
  const pathname = usePathname();
  return (
    <>
      <Header logoWhite={false} />
      <div className="pt-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-white text-black lg:px-16 lg:py-10 relative">
          <div className="lg:sticky lg:top-16 h-fit">
            <h1
              className={`text-4xl lg:text-5xl font-bold max-w-[150px] pb-8 lg:pb-12 ${
                pathname === "/privacy-policy" ? "text-black" : "text-[#999999]"
              }`}
            >
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </h1>
            <h1
              className={`text-4xl lg:text-5xl font-bold max-w-[150px] pb-8 ${
                pathname === "/terms-of-use" ? "text-black" : "text-[#999999]"
              }`}
            >
              <Link href={"/privacy-policy"}>Terms of use</Link>
            </h1>
          </div>
          <div className="col-span-2">
            <div className=" space-y-6">
              <div>
                <p className="text-lg font-bold uppercase ">Introduction</p>
                <p className="font-normal ">
                  This Privacy Policy applies to Linearsend Inc product
                  (&ldquo;Revve) and sets out how Revve collects, uses, stores,
                  shares and protects any information that you give Revve when
                  you subscribe to its services.
                  <br /> Revve is committed to ensuring that your privacy is
                  protected. Should we ask you to provide certain information
                  when subscribing to our services; you can be assured that it
                  will only be used in accordance with this Privacy Policy.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">CONSENT</p>
                <p className="font-normal ">
                  You accept this Privacy Policy when you sign up for access or
                  use the products or services offered by Revve on any platform.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">LEGAL BASIS</p>
                <p className="font-normal ">
                  You further accept that Revve may process your Information
                  without explicit consent sought, given or accepted where (i)
                  it is necessary for entering into or performance of a
                  contract; (ii) it is authorized or required by law (which also
                  provides safeguards for You); or (iii) there are circumstances
                  that may engender direct or indirect propagation of criminal
                  acts and anti-social conducts.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">
                  COLLECTION OF INFORMATION
                </p>
                <p className="font-bold pt-2 ">
                  Information We Collect Directly from You
                </p>
                <p className="font-normal ">
                  Revve collects Information from you when you subscribe to our
                  service. The type of Information that we collect from you
                  depends on the service you require from Revve.
                  <br /> We may also collect information you provide us
                  including but not limited to information on web forms, account
                  update information and correspondence with the Platform
                  support services team. Information obtained through voluntary
                  submissions (e.g., responses to surveys, requests for
                  information on Revve&apos;s Platform or those of Revve&apos;s
                  advertisers/marketing partners) and review of Platform usage
                  patterns survey responses, customer enquiries and other means
                  may also be collected and used by us. Revve will only collect
                  information that is necessary for the provision of the product
                  or service that you have subscribed to.
                </p>

                <p className="font-bold pt-4 ">
                  Information We Collect Automatically
                </p>
                <p className="font-normal  ">
                  Revve may use cookies, web beacons, and other tracking
                  technologies to collect information about you automatically as
                  you use our Platform. This includes information sent to us by
                  your computer, mobile phone, or other electronic access
                  devices.
                </p>
                <p className="pt-4">
                  The automatically collected information includes but is not
                  limited to data about the pages you access, computer IP
                  address, device ID or unique identifier, device type,
                  geo-location information, computer and connection information,
                  mobile network information, statistics on page views, ad data,
                  the dates and times of your use of the Platformand standard
                  web log data. We may combine this information with other
                  information that we collect from you. Revve may engage in
                  activities which involve the automated processing and/or
                  profiling of information you provide us where (i) it is
                  necessary for entering into or performance of a contract; (ii)
                  it is authorized by law (which also provides safeguards for
                  you); or (iii) it is the subject of explicit consent from you.
                </p>
                <p className=" pt-4 ">
                  You hereby consent that in the circumstances not covered above
                  Revve can engage in activities which involve the automated
                  processing and/or profiling of your information in respect of
                  the services for which you provided the Personal Data.
                </p>
              </div>

              <div>
                <p className="font-bold pt-4 ">
                  How Revve uses Information it Collects
                </p>
                <p>
                  We primarily use your Information to provide Services to you
                  and to respond to your inquiries. We also may use your
                  Information as follows:
                </p>
                <ol className=" list-decimal pl-6 space-y-1.5">
                  <li>
                    To communicate with you, including to respond to your
                    comments or requests for information, to request feedback on
                    our products and services, and to notify you about changes
                    to the services you use.
                  </li>
                  <li>
                    To help Revve understand you, to tailor and enhance our
                    product and service offerings, anticipate and resolve
                    problems with any products or services supplied to you,
                    create products or services that may meet your needs.
                  </li>
                  <li>
                    To provide access to restricted pages or contents of the
                    Platform.
                  </li>
                  <li>
                    To comply with legal and/or regulatory requirements and
                    cooperate with regulators and law enforcement bodies.
                  </li>
                  <li>
                    To send you marketing communications and advertising in line
                    with your communications preferences and where permitted by
                    applicable law about products, services and opportunities
                    that we believe would be of interest to you, including
                    products and services offered by third parties.
                  </li>
                  <li>
                    To protect our rights, your rights, and the rights of
                    others, and to meet our own high standards of business
                    practice.
                  </li>
                </ol>
                <p className="pt-4">
                  The services of third party may be employed to help us in
                  certain areas, such as website hosting, marketing and market
                  researching. In some cases that third party may receive your
                  information. However, at all times we will endeavor to keep
                  control and be responsible for the use of your information.
                </p>
                <p className="pt-4">
                  Each time you provide us with Information we aim to let you
                  know how we intend to use it and ask you to give your consent
                  to such use.
                </p>
                <p className="pt-4">
                  Revve may assign its obligations and rights under this Policy
                  to an Affiliate or a successor entity and your Information as
                  well as the use and processing of such Information may be
                  among the assets transferred by Revve. You acknowledge and
                  consent that such transfers may occur and are permitted by
                  this Privacy Policy.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold uppercase pt-8 ">
                SECURITY AND PROTECTION
              </p>
              <p className="font-normal ">
                Information collected will be held securely and will only be
                kept for as long as is reasonably necessary for as long as you
                use the service or product that you are subscribed to, unless
                you have provided us with your consent to use the data for any
                additional purposes. We take the security of the information you
                provide very seriously, and we will take all appropriate
                technical, administrative and physical safeguards/measures using
                recognized security procedures and tools in accordance with good
                industry practice to protect your Information.
              </p>
              <p className="pt-4">
                We have reasonable security measures in place to protect against
                the loss, misuse and interception by third parties of the
                information under our control, but, to the extent allowed by
                law, Revve assumes no liability for any damage you may suffer as
                a result of interception, alteration or misuse of information
                transmitted over the Internet. Whilst we use all reasonable
                endeavors to protect your security in the manner described
                above, we consider that it is only appropriate to advise users
                that data transmission over the Internet and the World Wide Web
                cannot be guaranteed as 100% secure.
              </p>
            </div>

            <div>
              <p className="font-bold pt-4 uppercase">
                REVVE OBLIGATIONS TO RETAIN YOUR INFORMATION AND YOUR ACCESS TO
                AND CONTROL OF SUCH INFORMATION
              </p>
              <p>
                Revve keeps your Information in line with set periods calculated
                using the following applicable criteria:
              </p>
              <ol className=" list-decimal pl-6 space-y-1.5">
                <li>
                  How long you have been a customer with us, the types products
                  or services offering we provide you, and when you will stop
                  being our customer.
                </li>
                <li>
                  After you have stopped being our customer, for how long it is
                  reasonable for us to retain your records to show we have met
                  the obligations we have to you and by law.
                </li>
                <li>Any time limits for making a claim</li>
                <li>
                  Any period for keeping your Information which are set by law
                  or recommended by the relevant regulators, professional bodies
                  or associations or is in line with best practice.
                </li>
                <li>The nature of any contract we have in place with you.</li>
                <li>The terms of any consent given by you.</li>
                <li>Any relevant proceedings that apply.</li>
                <li>Our legitimate interests as a business.</li>
              </ol>
              <p className="pt-4">
                The retention period is to enable Revve use the data for the
                necessary legitimate purposes identified in full compliance with
                the legal requirements. When Revve no longer needs to use your
                Information, we will delete it from our systems and records.
              </p>

              <p className="pt-8 font-bold">
                Access to and Control over Information
              </p>
              <p className="pt-2">
                In respect of your Information with us you can do at any time
                the following by contacting us:
              </p>
              <ol className=" list-disc pl-6 space-y-1.5">
                <li>
                  If allowable, see what Information we have about you, if any.
                </li>
                <li>
                  Change/correct any Information we have about you after
                  providing the required documentation and if it is within your
                  purview to change/correct.
                </li>
                <li>
                  If allowable, and subject to points a – h above, have us
                  delete any Information we have about you.
                </li>
                <li>
                  If allowable, request for the purpose of the processing as
                  well as the legal basis for processing.
                </li>
                <li>
                  If allowable, request for the categories of personal data
                  collected, stored and processed.
                </li>
                <li>
                  If allowable, request for recipient(s) or categories of
                  recipients that the data is/will be disclosed to.
                </li>
                <li>Request for the duration of data retention.</li>
                <li>
                  Request for details and information of automated decision
                  making, such as profiling, and any meaningful information
                  about the logic involved, as well as the significance and
                  expected consequences of such processing and express any
                  concern about our use of your Information.
                </li>
              </ol>
            </div>

            <p className="pt-8 font-bold uppercase">DO WE USE COOKIES?</p>
            <p className="pt-2">
              Yes. A cookie is a small file which asks permission to be placed
              on your computer&apos;s hard drive. Once you agree, the file is
              added, and the cookie helps analyze web traffic or lets you know
              when you visit a particular site. Cookies allow web applications
              to respond to you as an individual. The web application can tailor
              its operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences. Cookies are
              features included in your browser and will store small amounts of
              data on your computer about your visit to the Website, in
              particular when you complete any form on the Website.
            </p>
            <p className="pt-4">
              However, a cookie does not provide us with any Information.
              Therefore, if you have not supplied us with any Information, you
              can still browse our site anonymously. This information is used
              only for administration of the site system and in the compilation
              of statistics used by Revve. Cookies may be required to allow you
              to access and participate in certain areas of our Website. The
              majority of browsers will allow you to alter the settings used for
              cookies and to disable and enable them as you require.
            </p>
            <p className="pt-8 font-bold uppercase">
              CONTROLLING YOUR INFORMATION
            </p>
            <p className="">
              We will not sell, distribute or lease your Information to third
              parties unless we have your permission or are required by law to
              do so.
            </p>
            <p className="pt-6 font-bold uppercase">
              REMEDIES FOR VIOLATION OF THIS PRIVACY POLICY
            </p>
            <p className="">
              Any person subject to this Privacy Policy who is found to be in
              breach of this privacy policy by:
            </p>
            <ol className=" list-decimal pl-6 space-y-1.5">
              <li>
                failure to implement safeguards required by any data protection
                laws or any of the security measures provided in this Policy;
              </li>
              <li>failure to mitigate the damage once it has occurred; or</li>
              <li>failure to timely notify the affected individuals</li>
            </ol>
            <p>
              shall be liable, in addition to any other civil liabilities, to
              any penalties provided in such data protection laws.
            </p>

            <p className="pt-8 font-bold uppercase">CONTACTING REVVE</p>
            <p className="">
              Our customer contact is{" "}
              <a
                className="font-semibold"
                href="mailto:hello@revveme.com"
                target="_blank"
              >
                hello@revveme.com.
              </a>{" "}
              We shall endeavour to respond to enquiries/issues sent to/made to
              these service contacts within 48 hours.
            </p>
            <p className="pt-8 font-bold uppercase">
              GOVERNING LAW AND JURISDICTION
            </p>
            <p className="">
              By accessing the services of Revve on any platform, you agree to
              be governed by the laws of Canada. The laws of Canada will govern
              all matters relating to this Privacy Policy and shall apply
              without regard to the principles of conflict of laws. You agree to
              submit to the exclusive jurisdiction and venue of the Courts in
              Canada.
            </p>

            <p className="pt-6">
              Copyright ©{new Date().getFullYear()} [Revve]. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <Contactsection />
      </div>
    </>
  );
};

export default Page;
