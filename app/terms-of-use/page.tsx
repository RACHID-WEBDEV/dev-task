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
              <h1 className=" text-3xl lg:text-4xl">
                REVVE TERMS AND CONDITIONS
              </h1>
              <div className=" space-y-2">
                <p className="text-lg font-bold uppercase ">Introduction</p>
                <p className="font-normal ">
                  Welcome to Linearsend Inc product (&ldquo;Revve&ldquo;),
                  hereinafter referred to as &ldquo;Platform&ldquo; (which
                  expression shall where the context so admits, include its
                  successors–in-title and assigns).
                </p>
                <p>
                  By using this Platform, You are acknowledging and agreeing to
                  comply with and be bound by the following terms and conditions
                  of use governing Revve&apos;s relationship with You in
                  relation to this Platform. These Terms and Conditions are for
                  an indefinite term and legally binding, so please read them
                  through carefully before accessing this Platform. The onus is
                  on You to access these Terms and Conditions, as well as any
                  amendments made thereto. If You are not agreeable to these
                  Terms and Conditions, You may not access this Platform.
                </p>
                <p>
                  These Terms and Conditions are specific and apply to Your use
                  of this Platform. Any changes to these Terms and Conditions
                  will be updated on this Platform and will be displayed when
                  You access it.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">Definitions</p>
                <p className="font-normal ">
                  Wherever the following words and phrases appear in these Terms
                  and Conditions they will always have the following meanings:
                </p>
                <ol className=" list-decimal pl-6 pt-2">
                  <li>
                    <b>Data Subject</b> means an identifiable person. One who
                    can be identified directly or indirectly by reference to an
                    identification number or to specific information provided by
                    him or her in accordance with the provisions of these Terms
                    and Conditions.
                  </li>
                  <li>
                    <b>Personal Information</b> means the data relating to a
                    Data Subject which is collected to enable You to use the
                    Platform, and includes Bank Verification Number (BVN) data
                    collected for the purpose of effecting a transaction on the
                    Platform;
                  </li>
                  <li>
                    <b>Platform</b> means this electronic Portal or Revve App.
                  </li>
                  <li>
                    <b>Terms and Conditions</b> mean the terms and conditions
                    contained within this electronic document You are reading
                    now;
                  </li>
                  <li>
                    <b>You</b> means the person using this Platform in
                    accordance with these Terms and Conditions and
                    &apos;your&apos; shall be construed accordingly.
                  </li>
                  <li>
                    <b>Eligibility</b> <br />
                    To use this Platform, You must:
                    <ol className=" list-decimal pl-6 space-y-1">
                      <li>
                        Be 18 years of age or above. In the event that You are
                        below 18 years of age, You are visiting the Platform at
                        your own risk and warrant that You have been advised
                        accordingly and are acting with the direction of your
                        parents or guardian;
                      </li>
                      <li>
                        Have a valid email address and contact telephone number;
                      </li>
                      <li>
                        Be a resident in a jurisdiction where this Platform or
                        any part therein is not <b>restricted.</b>
                      </li>
                      <li>
                        In the case of corporate entity, be a company registered
                        under the laws of the jurisdiction where the Platform is
                        being used.
                      </li>
                    </ol>
                  </li>
                </ol>
                <p className=" pt-2">
                  You hereby confirm that in consideration of Revve providing
                  You access to the Platform, You have read, understood and
                  agreed to be bound by these Terms and Conditions each time You
                  access this Platform.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">
                  Registrations and Confirmation
                </p>
                <p className="font-normal ">
                  By registering on this Platform, You warrant to Revve that all
                  the information provided by You are true, complete and
                  accurate in all respects. Revve will take all information
                  supplied via this Platform at face value and shall not be
                  responsible for any inaccurate, untrue or false information or
                  any information supplied under false pretences.
                </p>
              </div>
              <div>
                <p className="text-lg font-bold uppercase ">
                  Application for and Use of the Platform
                </p>
                <p className=" pt-2 ">
                  If your registration application is accepted, You agree to
                  receive marketing and promotional materials via an email
                  broadcast unless You have selected not to receive these
                  materials; and consent that your registration details will be
                  utilised by Revve in relation to the activities enumerated in
                  this Platform.
                </p>
                <p className="font-normal pt-1 ">
                  Your consent to receive marketing and promotional materials
                  electronically will remain in effect until You revoke such
                  consent. To unsubscribe or revoke your consent to receive
                  these Electronic notifications, You will need to apply the
                  unsubscribe option made available within this Platform. Please
                  note that it may take some time for us to update our records
                  to ensure your new choices are respected.
                </p>
                <p>
                  You must ensure that You update your details (including any
                  change in your email address) on the Platform immediately
                  whenever any such change occurs.
                </p>
                <p className="font-bold pt-4 ">Revve&apos;s Obligations</p>
                <p className="font-normal  ">
                  Revve keeps your Personal Information in line with set periods
                  calculated using the following applicable criteria:
                </p>
                <ul className="space-y-2 list-decimal pl-10">
                  <li>
                    How long You have been using the Platform, the types
                    products or services offering we provide You, and when You
                    will stop being our customer.
                  </li>
                  <li>
                    After You have stopped using the Platform, for how long it
                    is reasonable for us to retain your records to show we have
                    met the obligations we have to You and by law.
                  </li>
                  <li>Any time limits for making a claim</li>
                  <li>
                    Any period for keeping your personal information which are
                    set by law or recommended by the relevant regulators,
                    professional bodies or associations or is in line with best
                    practice.
                  </li>
                  <li>The nature of any contract we have in place with You.</li>
                  <li>The terms of any consent given by You.</li>
                  <li>Any relevant proceedings that apply.</li>
                  <li>Our legitimate interests as a business.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold pt-4 ">
                  Access to and Control over Information
                </p>
                <p>
                  In respect of your Personal Information with us, You can do at
                  any time the following by contacting us:
                </p>
                <ol className=" list-decimal pl-6 space-y-1.5">
                  <li>
                    If allowable, see what Personal Information we have about
                    You, if any.
                  </li>
                  <li>
                    Change/correct any Personal Information we have about You
                    after providing the required documentation and if it is
                    within your purview to change/correct.
                  </li>
                  <li>
                    If allowable, and subject to points a – h above, have us
                    delete any Personal Information we have about You.
                  </li>
                  <li>
                    Request for contact details of the data protection officer,
                    where applicable.
                  </li>
                  <li>
                    If allowable, request for the purpose of the processing as
                    well as the legal basis for processing.
                  </li>
                  <li>
                    If allowable, request for information about interests, if
                    the processing is based on the legitimate interests of Revve
                    or a third party.
                  </li>
                </ol>
                <p className="pt-4 font-bold">
                  You are responsible for the following…
                </p>
                <ul className=" list-disc pl-6 pt-4">
                  <li>
                    You confirm that You have read these Terms and Conditions
                    and the Privacy Notice and agree to be bound by them every
                    time You access this Platform;
                  </li>
                  <li>
                    You shall not, and shall not attempt to decompile,
                    reverse-engineer, translate, convert, adapt, alter, modify,
                    enhance, add to, delete or in any way tamper with, or gain
                    access to, any part of this Platform or any services in
                    relation thereto, or any software comprised in them.
                  </li>
                  <li>
                    You shall not, and shall not attempt to, copy, reproduce,
                    republish, frame, upload to a third party, transmit or
                    distribute the whole or any part of this Platform.
                  </li>
                  <li>
                    You shall not send, submit, post or otherwise transmit,
                    material or messages that contain software virus or any
                    other files that are designed to interrupt, destroy, and
                    negatively affect in any manner whatsoever, any electronic
                    equipment in connection with the use of the Platform or
                    other User&apos;s ability to use the Platform.
                  </li>
                  <li>
                    You shall not conduct any systematic or automated data
                    collection activities (including scraping, data mining, data
                    extraction and data harvesting) on or in relation to the
                    Platform without Revve&apos;s express written consent;
                  </li>
                  <li>
                    <b>Liabilities</b>
                  </li>
                  <li>
                    Revve shall not be liable to You for any loss or damage You
                    may suffer or incur as a result of your use of the Platform
                    unless such a loss or damage results directly from the fraud
                    or wilful default of Revve.
                  </li>
                  <li>
                    In the event that You do not comply with any provision of
                    these Terms and Conditions and such non-compliance results
                    in any loss or damage to Revve, You agree and undertake to
                    compensate Revve for such loss and/or damage.
                  </li>
                  <li>
                    Any limitation or exclusion of liability under these Terms
                    and Conditions shall only be valid to the full extent
                    permitted by law.
                  </li>
                  <li>
                    <b>Security and Confidentiality</b> <br />
                    You understand and agree that you are responsible for
                    maintaining the confidentiality of your User ID and password
                    at all times.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold uppercase pt-8 ">
                Changes and Operation of the Platform
              </p>
              <p className="font-normal ">
                Revve reserves the right to make changes to any part of the
                Platform, suspend or terminate the operation of the Platform at
                any time for the purposes of support and maintenance or to
                update the information contained on the Platform and the
                Information or these Terms and Conditions in order to improve or
                streamline the services which it offers. Should these Terms and
                Conditions be amended, Revve will publish details of the
                amendments on the Platform.
              </p>
              <p className="pt-4">
                By using this Platform, You agree to be bound by and You agree
                to periodically visit the Platform to determine the then current
                terms of use to which You are bound.
              </p>
            </div>

            <div>
              <p className="font-bold pt-4 uppercase">Validity</p>

              <ol className="  pl-6 space-y-1.5">
                <li>
                  If one, or part of these Terms and Conditions proves to be
                  legally unsound or unenforceable in any way, this will not
                  affect the validity of the remaining terms in any way.
                </li>
                <li>
                  If we relax any of these Terms and Conditions once, this may
                  be on a temporary basis or as a special case; it will not
                  affect our right to enforce that term strictly again at any
                  time.
                </li>
              </ol>
              <p className="font-bold pt-4 uppercase">Indemnity</p>
              <p className="pt-4">
                You agree to indemnify and hold harmless Revve and its officers,
                agents, and employees from and against any and all claims,
                demands, costs, damages and or penalties arising out of any
                failure by You or any agent acting on your behalf to fully
                observe these Terms and Conditions or by reason of any use by
                You or such agent of any information or images provided on this
                Platform.
              </p>

              <p className="pt-8 font-bold">Intellectual Property Rights</p>

              <ol className="pl-6 space-y-1.5">
                <li>
                  The composition contained in this Platform (&ldquo;Revve
                  Content&ldquo;), including but not limited to, text, data,
                  audio, video, programming, functionality, software, source
                  code, graphics, photographs, databases, illustrations,
                  artwork, names, logos, designs, button icons, scripts,
                  trademarks, trade dress, service marks, domain names, service
                  names and the information contained in the Platform regarding
                  or connected to Revve and in respect of the activities of
                  Revve, whether registered or unregistered, are either owned by
                  and are the intellectual property of Revve or registered to
                  Revve, and are subject to copyright and other intellectual
                  property rights under the Laws of Canada and applicable
                  international conventions.
                </li>
                <li>
                  Unauthorised use/exploitation of Revve Content on the Platform
                  may violate copyright, trademark and other applicable
                  intellectual property and proprietary laws in force in Canada
                  and/or outside Canada and could result in criminal or civil
                  penalties.
                </li>
                <li>
                  All trademarks, service marks, logos and any other marks
                  whatsoever are used for the benefit of their respective owners
                  and are not intended to infringe the trademark of any such
                  person.
                </li>
              </ol>
            </div>

            <p className="pt-8 font-bold uppercase">Third party advertising</p>
            <p className="pt-2">
              Revve may allow third parties to place advertisements on the
              Platform. Third party advertisements are clearly labelled as such
              and may be chargeable. Revve does not endorse and is not
              responsible for the content of any third-party advertisement on
              this Platform or otherwise.
            </p>

            <p className="pt-8 font-bold uppercase">
              Restrictions of Access to this Platform
            </p>

            <p className="pt-4 font-bold uppercase">
              ACCESS TO THIS PLATFORM OR ANY PART OF IT MAY BE RESTRICTED UNDER
              RELEVANT LAWS IN CERTAIN JURISDICTIONS. BY YOUR USE OF THIS
              PLATFORM, YOU CONFIRM CERTAIN MATTERS (INCLUDING THAT YOU ARE NOT
              RESIDENT IN SUCH A JURISDICTION), BEFORE YOU MAY OBTAIN ACCESS TO
              THE INFORMATION ON THIS PLATFORM OR ANY AREA OF THE PLATFORM.
            </p>
            <p className=" pt-4 font-bold">
              Automated Processing of Personal Data
            </p>
            <p>
              Revve may engage in activities which involve the automated
              processing and/or profiling of information You provide us and{" "}
              <b>
                You hereby consent that in the circumstances not covered above
                Revve can engage in activities which involve the automated
                processing and/or profiling of your information in respect of
                the services for which You provided the Personal Data.
              </b>
            </p>
            <p className=" pt-6 font-bold"> Referral Policy</p>
            <ol className=" list-disc pl-6 space-y-2">
              <li>
                <b>Referral Program Overview</b> Our referral program allows
                users to earn referral bonuses and transfer rewards by inviting
                new customers to use our app. The referral costs and bonuses are
                as outlined on the referral page of the Mobile App. These
                bonuses and rewards are subject to the specific terms outlined
                in this policy and any additional terms published on the
                Platform. The value, method of distribution, and conditions for
                earning these rewards are determined solely at our discretion
                and may vary from time to time.
              </li>
              <li>
                <b>Eligibility </b> Participation in the referral program is
                subject to the eligibility criteria set out by us. We reserve
                the right to verify participants and the validity of referred
                customers before issuing referral bonuses and transfer rewards.
              </li>
              <li>
                <b>Program Modifications</b> We reserve the right to modify,
                suspend, or terminate the referral program at any time, with or
                without prior notice. This includes the ability to change the
                value of referral bonuses and transfer rewards, adjust
                eligibility criteria, or cease offering rewards entirely.
              </li>
              <li>
                <b>Fraud and Abuse</b> Any attempt to manipulate, exploit, or
                abuse the referral program may result in disqualification from
                the program, forfeiture of rewards, and potential suspension or
                termination of your account.
              </li>
              <li>
                <b>No Guarantee of Payment Referral </b> bonuses and transfer
                rewards are not guaranteed and are subject to verification by
                us. We may withhold or revoke rewards if we determine that they
                were earned in violation of these terms or through fraudulent or
                deceptive means.
              </li>
              <li>
                <b>Acceptance of Terms</b> By participating in the referral
                program, you agree to these terms and conditions, as well as any
                modifications or updates we may make. Continued participation
                after changes to the referral program constitutes acceptance of
                those changes.
              </li>
            </ol>

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
          </div>
        </div>

        <Contactsection />
      </div>
    </>
  );
};

export default Page;
