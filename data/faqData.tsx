// FAQ content
export const faqContent = [
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
