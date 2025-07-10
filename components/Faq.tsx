// "use client";
// import { useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// function Icon({ id, open }: any) {
//   return (
//     <svg
//       width={26}
//       height={26}
//       viewBox="0 0 26 26"
//       className={`${
//         id === open ? "rotate-45" : ""
//       } transition-transform size-4 lg:size-[26px]`}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M26 10.2002C26 9.88028 25.8801 9.57635 25.6563 9.35236C25.4243 9.12836 25.1199 9.0002 24.8 9.0002L17.2 9.00844V1.4002C17.2 1.08828 17.0801 0.776355 16.8563 0.552355C16.6243 0.328355 16.3199 0.200195 16 0.200195L10.4079 0.208435C9.74418 0.208435 9.20786 0.744355 9.20786 1.40844V9.0002H1.60002C1.28794 9.0002 0.984024 9.12836 0.751944 9.35236C0.528184 9.57635 0.400024 9.88028 0.400024 10.2002V15.8084C0.400024 16.4723 0.944184 17.0084 1.60002 17.0084H9.20786L9.20002 24.6002C9.20002 24.9203 9.32819 25.2244 9.55194 25.4483C9.77619 25.6803 10.0801 25.8002 10.4 25.8002H16C16.6641 25.8002 17.2 25.2643 17.2 24.6002V17.0002H24.8C25.4641 17.0002 26 16.4643 26 15.8002V10.2002Z"
//         fill="#CA92E3"
//       />
//     </svg>
//   );
// }

// const itemContent = [
//   {
//     id: 1,
//     title: "How does Revve work?",
//     descriptions: ` Revve simplifies financial transactions with its intuitive mobile app. Users can easily send money across borders, pay bills instantly, and shop online without hassle. Our platform prioritizes security, trust, and innovation to ensure seamless experiences for individuals and businesses alike. Whether you're sending love to your family or expanding your business globally, Revve is your reliable partner in navigating the world of finance.`,
//   },
//   {
//     id: 2,
//     title: " Where is Revve available?",
//     descriptions: ` Revve's services are currently available in Nigeria, and Canada. We are continually expanding to serve more regions and provide seamless financial solutions to customers globally.`,
//   },
//   {
//     id: 3,
//     title: " Is Revve a bank?",
//     descriptions: ` No, Revve is not a bank. We are a fintech company that specializes in providing innovative solutions for cross-border transactions and financial connectivity. While we offer services that may resemble those of a bank, such as remittance, bill payments, and online shopping, we operate as a platform designed to facilitate these transactions seamlessly and securely, transcending the traditional banking model.`,
//   },
//   {
//     id: 4,
//     title: "Is my money safe with Revve?",
//     descriptions: ` Yes, your money is secure. Revve employs industry-standard encryption and complies with all regulatory requirements to ensure the safety of your funds and personal information.`,
//   },
//   {
//     id: 5,
//     title: " What document do I need for verification?",
//     descriptions: (
//       <div>
//         <ol className="list-decimal pl-6 space-y-1.5">
//           <li>Driver&apos;s License</li>
//           <li>National Identification Number (NIN)</li>
//           <li>Resident Permit</li>
//           <li>Passport Page</li>
//         </ol>
//         <p className="pt-4">
//           Once submitted, your documents will be reviewed, and you’ll be
//           notified upon completion.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 6,
//     title: "What should I do if my transaction is delayed or fails?",
//     descriptions: (
//       <div>
//         <ul className="list-disc pl-6 space-y-1.5">
//           <li>
//             Verification Checks: Transactions may undergo verification checks,
//             which typically happen within seconds. If delayed for more than 5
//             minutes, please contact our support team.{" "}
//           </li>
//           <li>
//             Beneficiary Bank Delays: Some banks may delay confirming
//             transactions. If delayed for more than 30 minutes, please contact
//             our support team.{" "}
//           </li>
//           <li>
//             AML Check Failure: Transactions may fail AML (Anti-Money Laundering)
//             checks if either you or your beneficiary fails screening. Please
//             contact our support team for further detail.
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 7,
//     title: "Can I transfer money within the same currency?",
//     descriptions: ` No, you can't transfer from CAD to CAD or NGN to NGN. You can only withdraw your funds from the same currency to your bank account.`,
//   },
// ];

// const FaqAccordion = () => {
//   const [open, setOpen] = useState(0);

//   const handleOpen = (value: any) => {
//     setOpen(open === value ? 0 : value);
//   };

//   return (
//     <>
//       {itemContent.map((item) => (
//         <Accordion
//           className={`accordion-item mb-5 overflow-hidden  ${
//             item?.id === open ? "pb-3" : ""
//           } border-b-[3px]  border-[#5D0186] h-auto`}
//           key={item.id}
//           open={open === item.id}
//           icon={<Icon id={item.id} open={open} />}
//         >
//           <AccordionHeader
//             className="accordion-button collapsed border-none relative flex w-full items-center justify-between px-4 py-3 text-left  "
//             onClick={() => handleOpen(item.id)}
//           >
//             <h4 className="text-[#CA92E3] text-base lg:text-3xl">
//               {item.title}
//             </h4>
//           </AccordionHeader>
//           <div className="hidden-style pt-2">
//             <AccordionBody className="accordion-body rounded-xl bg-[#460065] p-4 text-white">
//               {item.descriptions}
//             </AccordionBody>
//           </div>
//         </Accordion>
//       ))}
//     </>
//   );
// };

// export default FaqAccordion;

"use client";

import { useState, ReactNode } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

// Properly typed icon component
type IconProps = {
  id: number;
  openId: number | null;
};

function Icon({ id, openId }: IconProps): ReactNode {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      className={`${
        id === openId ? "rotate-45" : ""
      } transition-transform size-4 lg:size-[26px]`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 10.2002C26 9.88028 25.8801 9.57635 25.6563 9.35236C25.4243 9.12836 25.1199 9.0002 24.8 9.0002L17.2 9.00844V1.4002C17.2 1.08828 17.0801 0.776355 16.8563 0.552355C16.6243 0.328355 16.3199 0.200195 16 0.200195L10.4079 0.208435C9.74418 0.208435 9.20786 0.744355 9.20786 1.40844V9.0002H1.60002C1.28794 9.0002 0.984024 9.12836 0.751944 9.35236C0.528184 9.57635 0.400024 9.88028 0.400024 10.2002V15.8084C0.400024 16.4723 0.944184 17.0084 1.60002 17.0084H9.20786L9.20002 24.6002C9.20002 24.9203 9.32819 25.2244 9.55194 25.4483C9.77619 25.6803 10.0801 25.8002 10.4 25.8002H16C16.6641 25.8002 17.2 25.2643 17.2 24.6002V17.0002H24.8C25.4641 17.0002 26 16.4643 26 15.8002V10.2002Z"
        fill="#CA92E3"
      />
    </svg>
  );
}

// FAQ content
const itemContent = [
  {
    id: 1,
    title: "How does Revve work?",
    descriptions: `Revve simplifies financial transactions with its intuitive mobile app. Users can easily send money across borders, pay bills instantly, and shop online without hassle.`,
  },
  {
    id: 2,
    title: "Where is Revve available?",
    descriptions: `Revve's services are currently available in Nigeria and Canada. We are continually expanding to serve more regions.`,
  },
  {
    id: 3,
    title: "Is Revve a bank?",
    descriptions: `No, Revve is not a bank. We are a fintech company that provides cross-border financial solutions.`,
  },
  {
    id: 4,
    title: "Is my money safe with Revve?",
    descriptions: `Yes, your money is secure. Revve employs industry-standard encryption and complies with all regulatory requirements.`,
  },
  {
    id: 5,
    title: "What document do I need for verification?",
    descriptions: (
      <div>
        <ol className="list-decimal pl-6 space-y-1.5">
          <li>Driver&apos;s License</li>
          <li>National Identification Number (NIN)</li>
          <li>Resident Permit</li>
          <li>Passport Page</li>
        </ol>
        <p className="pt-4">
          Once submitted, your documents will be reviewed, and you’ll be
          notified upon completion.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "What should I do if my transaction is delayed or fails?",
    descriptions: (
      <ul className="list-disc pl-6 space-y-1.5">
        <li>
          <strong>Verification Checks:</strong> If delayed more than 5 minutes,
          please contact our support team.
        </li>
        <li>
          <strong>Beneficiary Bank Delays:</strong> If delayed over 30 minutes,
          please contact support.
        </li>
        <li>
          <strong>AML Check Failure:</strong> Contact support for further
          detail.
        </li>
      </ul>
    ),
  },
  {
    id: 7,
    title: "Can I transfer money within the same currency?",
    descriptions: `No, you can't transfer from CAD to CAD or NGN to NGN. You can only withdraw your funds to your bank account.`,
  },
];

const FaqAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {itemContent.map((item) => (
        <Accordion
          key={item.id}
          open={openId === item.id}
          icon={<Icon id={item.id} openId={openId} />}
          className={`accordion-item mb-5 pb-4 overflow-hidden ${
            item.id === openId ? "pb-3" : ""
          } border-b-[3px] border-[#5D0186] h-auto`}
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className="accordion-button collapsed border-none flex items-center justify-between px-4 py-3 text-left"
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <h4 className="text-[#CA92E3] text-base lg:text-4xl">
              {item.title}
            </h4>
          </AccordionHeader>
          <AccordionBody className="rounded-xl bg-[#460065] p-4 text-white">
            {item.descriptions}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;
