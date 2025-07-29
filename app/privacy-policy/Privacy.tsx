"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Contactsection from "@/components/Contactsection";
import Link from "next/link";
import Header from "@/components/Header";

const PrivacyPage = () => {
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
              <Link href={"/terms-of-use"}>Terms of use</Link>
            </h1>
          </div>
          <div className="col-span-2">
            <div className=" space-y-6">
              <div>
                <p className="text-lg font-bold uppercase ">Introduction</p>
                <p className="font-normal ">
                  This Privacy Policy applies to Linearsend Inc product (Revve)
                  and sets out how it collects, uses, stores, shares, and
                  protects any information that you give Revve when you
                  subscribe to its services. Revve is committed to ensuring that
                  your privacy is protected. Should we ask you to provide
                  certain information when subscribing to our services, you can
                  be assured that it will only be used following this Privacy
                  Policy.
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
                  without explicit consent sought, given or accepted where:
                </p>
                <ul className=" space-y-1">
                  <li>
                    - It is necessary for entering into or performing a
                    contract,
                  </li>
                  <li>
                    - It is authorised or required by law (which also provides
                    safeguards for you), or{" "}
                  </li>
                  <li>
                    - Some circumstances may engender direct or indirect
                    propagation of criminal acts and anti-social conducts.
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">
                  COLLECTION OF INFORMATION
                </p>
                <p className="font-bold pt-2 ">
                  Information We Collect Directly from You
                </p>
                <div className=" space-y-1">
                  <p className="font-normal ">
                    When you subscribe to a Revve service, we collect personal
                    information relevant to the specific product or service
                    requested. This includes, but is not limited to, details
                    entered on web forms, account modification data, and
                    correspondence with our support team.
                  </p>
                  <p>
                    Additional data may be gathered from voluntary submissions,
                    such as survey responses, product feedback, or requests for
                    more information about Revve or our partners. We may also
                    analyse platform usage patterns to improve our services.
                  </p>
                  <p>
                    Revve is committed to collecting only the information
                    necessary to provide the product or service in question and
                    to enhance user experience.
                  </p>
                </div>

                <p className="font-bold pt-4 ">
                  Information We Collect Automatically
                </p>
                <p className="font-normal  ">
                  Revve may use cookies, web beacons, and other tracking
                  technologies to collect information about you automatically as
                  you use our Platform. This includes information sent to us by
                  your computer, mobile phone, or other electronic access
                  devices.Revve may use cookies, web beacons, and other tracking
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
                  profiling of information you provide us, where:
                </p>
                <ul className=" space-y-1 pt-2">
                  <li>
                    - It is necessary for entering into or performing a
                    contract,
                  </li>
                  <li>
                    - It is authorised by law (which also provides safeguards
                    for you), or{" "}
                  </li>
                  <li>- It is the subject of explicit consent from you.</li>
                </ul>
                <p className=" pt-4 ">
                  In cases not covered by the above, you consent that Revve may
                  carry out automated processing or profiling where it is
                  required to provide the services you have signed up for. We
                  ensure that all such processing is conducted in line with
                  applicable data protection laws and with your privacy in mind.
                </p>
              </div>

              <div>
                <p className="font-bold pt-4 ">How We Use Your Information</p>
                <p>
                  We primarily use the information we collect to deliver
                  services to you and respond to your inquiries. In addition,
                  your information may be used for the following purposes:
                </p>
                <ol className=" list-disc pl-6 space-y-1.5">
                  <li>
                    To communicate with you, including responding to your
                    messages or requests, gathering feedback, and notifying you
                    about changes to our services.
                  </li>
                  <li>
                    To personalize and improve our services, by understanding
                    your needs and preferences, enhancing your experience, and
                    developing features that serve you better.
                  </li>
                  <li>
                    To provide access to secure areas of the Revve Platform or
                    restricted content.
                  </li>
                  <li>
                    To meet legal and regulatory obligations, including
                    cooperation with law enforcement and compliance with
                    applicable laws and regulations.
                  </li>
                  <li>
                    For marketing purposes, where permitted by law and in
                    accordance with your preferences, we may send you updates
                    about Revve products, services, or third-party offers that
                    may interest you.
                  </li>
                  <li>
                    To protect rights and ensure safety, including our rights,
                    your rights, and the rights of others, as well as to uphold
                    high standards of business conduct.
                  </li>
                  <li>
                    With third-party service providers, such as website hosting,
                    marketing, and market research partners. These partners may
                    access your information only to perform services on our
                    behalf, and we remain responsible for their handling of your
                    data.
                  </li>
                </ol>
                <p className="pt-4">
                  Each time we collect personal information, we aim to inform
                  you how it will be used and request your consent where
                  necessary.
                </p>
                <p className="text-lg font-bold uppercase pt-8">
                  Data Transfers and Corporate Changes
                </p>
                <p className="pt-4">
                  Revve may assign its rights and obligations under this Privacy
                  Policy to an affiliate or a successor entity. If ownership of
                  our business changes (through a merger, acquisition, or sale
                  of assets), your information may be transferred as part of
                  that transaction. By using our services, you acknowledge and
                  consent to such transfers as permitted under this policy.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold uppercase pt-8 ">
                Security and Data Protection
              </p>
              <p className="font-normal ">
                We are committed to protecting your personal information. All
                information collected is stored securely and retained only for
                as long as necessary to provide the services you subscribe to,
                or longer where required by law or with your consent.
              </p>
              <p className="pt-4">
                We use recognised industry standards and employ a combination of
                technical, administrative, and physical safeguards to protect
                your data. These include:
              </p>
              <ul className=" list-disc pl-6 pt-2 space-y-1.5">
                <li> Encrypted data transmission</li>
                <li> Secure servers and access controls</li>
                <li>Ongoing monitoring and compliance procedures</li>
              </ul>
              <p className=" pt-2">
                While we take every reasonable step to secure your information,
                please note that no internet transmission is ever 100% secure.
                Therefore, we cannot guarantee the absolute security of data
                transmitted online. You acknowledge that the transmission of
                information over the internet is at your own risk.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold uppercase pt-8 ">
                Security and Protection
              </p>
              <p className=" pt-4">
                Information collected will be held securely and will only be
                retained for as long as is reasonably necessary while you use
                the service or product to which you are subscribed, unless you
                have provided us with your consent to use the data for
                additional purposes. We take the security of the information you
                provide very seriously and will implement all appropriate
                technical, administrative, and physical safeguards using
                recognised security procedures and tools, under good industry
                practice, to protect your information.
              </p>
              <p className=" pt-4">
                We have reasonable security measures in place to protect against
                the loss, misuse, and interception by third parties of the
                information under our control. However, to the extent permitted
                by law, Revve assumes no liability for any damage you may suffer
                as a result of interception, alteration, or misuse of
                information transmitted over the Internet. While we use all
                reasonable efforts to protect your security in the manner
                described above, we consider it appropriate to advise users that
                data transmission over the Internet and the World Wide Web
                cannot be guaranteed to be 100% secure.
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
                With respect to your information held by us, you may, at any
                time, do the following by contacting us:
              </p>
              <ol className=" list-decimal  pl-6 space-y-1.5">
                <li>
                  <b>Access</b> – If permissible, request to see the information
                  we hold about you, if any.
                </li>
                <li>
                  <b>Correction</b> – Request to change or correct any
                  information we have about you, subject to the provision of
                  required documentation and where it falls within your rights
                  to do so.
                </li>
                <li>
                  <b>Deletion</b> – If allowable and subject to conditions
                  outlined in points (a)–(h) above, request that we delete any
                  information we have about you.
                </li>
                <li>
                  <b>Purpose and Legal Basis</b> – If permissible, request
                  information on the purpose of processing your data and the
                  legal basis for such processing.
                </li>
                <li>
                  <b> Data Categories</b> – If allowable, request details on the
                  categories of personal data collected, stored, and processed.
                </li>
                <li>
                  <b>Data Recipients</b> – If allowable, request information
                  about the recipient(s) or categories of recipients to whom the
                  data has been or will be disclosed.
                </li>
                <li>
                  <b> Retention Duration</b> – Request information on the
                  duration for which your data will be retained.
                </li>
                <li>
                  <b>Automated Decision-Making</b> – Request details about any
                  automated decision-making processes, including profiling, and
                  obtain meaningful information about the logic involved, as
                  well as the significance and potential consequences of such
                  processing. You may also express any concerns about how your
                  information is being used.
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
              We will not sell, distribute, or lease your information to third
              parties unless we have your permission or are legally required to
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

export default PrivacyPage;
