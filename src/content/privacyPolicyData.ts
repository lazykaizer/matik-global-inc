/**
 * Privacy Policy Content Architecture
 * Centralized legal copy for Matic Global Solutions Inc.
 * Edit this file to modify wording without changing UI components.
 */

export const SHOW_PLACEHOLDER_STYLING = true;

export interface ShortVersionCard {
  id: string;
  title: string;
  description: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface RegionTabData {
  id: string;
  label: string;
  content: string;
}

export interface ContentBlock {
  type: 'paragraph' | 'list' | 'table' | 'cardGrid' | 'regionTabs' | 'callout' | 'buttonAction';
  subtitle?: string;
  text?: string;
  items?: string[];
  table?: TableData;
  cards?: { title: string; description: string }[];
  callout?: { title?: string; text: string };
  regionTabs?: RegionTabData[];
  button?: {
    label: string;
    action: 'manageCookies' | 'contactEmail';
    href?: string;
  };
  helpLinks?: { label: string; url: string }[];
}

export interface PrivacySection {
  id: string;
  number: number;
  title: string;
  blocks: ContentBlock[];
}

export const PRIVACY_POLICY_HERO = {
  label: 'LEGAL',
  title: 'Privacy Policy',
  chips: [
    { label: 'Last updated', value: '[[Date]]' },
    { label: 'Effective', value: '[[Date]]' },
  ],
  intro: 'How Matic Global Solutions Inc. collects, uses and protects personal information, and the choices you have.',
};

export const SHORT_VERSION_DATA: {
  cards: ShortVersionCard[];
  note: string;
} = {
  cards: [
    {
      id: 'what-we-collect',
      title: 'What we collect',
      description: 'Details you share with us, such as enquiries and job applications, plus basic technical data from your visit.',
    },
    {
      id: 'why-we-use-it',
      title: 'Why we use it',
      description: 'To reply to you, deliver our services, consider applicants, keep the Sites secure and meet legal duties.',
    },
    {
      id: 'who-sees-it',
      title: 'Who sees it',
      description: 'Our team, affiliates and carefully chosen service providers, and authorities when the law requires.',
    },
    {
      id: 'your-choices',
      title: 'Your choices',
      description: 'You can ask to access, correct or delete your data, opt out of marketing and manage cookies.',
    },
    {
      id: 'questions',
      title: 'Questions',
      description: 'Write to privacy@maticglobals.com.',
    },
  ],
  note: 'This summary is for convenience and does not replace the full policy below.',
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  // 1. WHO WE ARE AND WHAT THIS POLICY COVERS
  {
    id: 'who-we-are',
    number: 1,
    title: 'Who We Are and What This Policy Covers',
    blocks: [
      {
        type: 'paragraph',
        text: 'Matic Global Solutions Inc. and its affiliates ("Matic Global", "we", "us") provide AI and ML, ERP, application development, compliance, and accounting and taxation services. We operate from the United States and India.',
      },
      {
        type: 'paragraph',
        text: 'This policy applies to our websites, related mobile pages and any apps that link to it (the "Sites"), and to the personal information we handle when you contact us, apply to work with us, attend our events or do business with us. If we have signed a separate contract or data processing agreement with you or your employer, that agreement takes priority over this policy for the services it covers.',
      },
      {
        type: 'paragraph',
        text: 'By using the Sites you acknowledge this policy. If you do not agree with it, please stop using the Sites.',
      },
    ],
  },

  // 2. INFORMATION WE COLLECT
  {
    id: 'information-we-collect',
    number: 2,
    title: 'Information We Collect',
    blocks: [
      {
        type: 'list',
        subtitle: 'Information you give us',
        items: [
          'Contact and enquiry details: name, work email, phone number, company, job title, industry, company size, the service you are interested in, your message and any file you attach.',
          'Application details: name, contact details, location, LinkedIn or portfolio links, work history, skills, education, certifications, resume, cover letter, availability, notice period or rate expectations, and anything else you choose to include.',
          'Business relationship details: contact and billing details of client and vendor representatives, and the payment or tax information needed to pay or be paid for professional services.',
          'Communications: the content of emails, calls, surveys, event registrations and chat messages you send us, and your marketing preferences.',
        ],
      },
      {
        type: 'paragraph',
        subtitle: 'Information collected automatically',
        text: 'When you visit the Sites, our systems and cookies record technical data, including your IP address, device type, operating system, browser type and language, screen size, pages viewed, time spent, the page that referred you, access times and an approximate location derived from your IP address. We gather this through server logs, cookies, pixels and similar tools (see the Cookies section).',
      },
      {
        type: 'paragraph',
        subtitle: 'Information from other sources',
        text: 'We may receive information about you from clients and business partners, service providers, professional networks and public social media profiles, public records and government sources, industry associations and data providers. We may combine it with what you give us, for example to learn more about the organization you work for. [[Confirm whether purchased marketing lists are used. Remove this mention if they are not.]]',
      },
      {
        type: 'paragraph',
        subtitle: 'Chat assistant',
        text: 'If you use the Chat with AI assistant, we collect the messages you enter and related technical data so the assistant can respond and so we can maintain and improve the feature. Please do not enter confidential, sensitive or regulated information into the chat. [[Confirm how chat conversations are stored, who can access them, for how long, and whether any provider uses them to train models.]]',
      },
      {
        type: 'paragraph',
        subtitle: 'Sensitive information',
        text: 'Our forms do not ask for government ID numbers, health information, religion, ethnicity, date of birth, marital status or photographs. Please leave these out of any resume or message you send us unless we have specifically asked for them.',
      },
    ],
  },

  // 3. HOW WE USE INFORMATION
  {
    id: 'how-we-use',
    number: 3,
    title: 'How We Use Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We use personal information for the purposes below. Where the GDPR or UK GDPR applies, the last column shows the legal basis we rely on.',
      },
      {
        type: 'table',
        table: {
          headers: ['Purpose', 'What it involves', 'Legal basis'],
          rows: [
            [
              'Respond to enquiries and provide services',
              'Replying to messages, scoping and delivering projects, managing client and vendor relationships',
              'Contract or steps before a contract; legitimate interests',
            ],
            [
              'Operate and improve the Sites',
              'Running, securing, troubleshooting and improving the Sites and understanding how they are used',
              'Legitimate interests',
            ],
            [
              'Recruit and engage talent',
              'Reviewing applications, contacting candidates, assessing freelancers, keeping a talent network if you opt in',
              'Legitimate interests; consent for the talent network',
            ],
            [
              'Communicate and market',
              'Sending updates, insights and event invitations, and honoring your preferences',
              'Consent or legitimate interests, as the law requires',
            ],
            [
              'Security and fraud prevention',
              'Detecting abuse, protecting our systems, enforcing our terms',
              'Legitimate interests; legal obligation',
            ],
            [
              'Legal and regulatory compliance',
              'Responding to lawful requests, keeping required records, accounting and tax',
              'Legal obligation',
            ],
            [
              'Analytics with de-identified data',
              'Creating aggregated or de-identified data that cannot reasonably identify you',
              'Legitimate interests',
            ],
          ],
        },
      },
      {
        type: 'callout',
        callout: {
          title: 'Calls and text messages',
          text: 'We contact you about your enquiry by email, phone or text. We make marketing calls or send marketing texts, or use automated dialing, only where you have given any consent the law requires. You can opt out at any time, for example by replying STOP or emailing privacy@maticglobals.com. Message and data rates may apply. [[Confirm this wording with counsel.]]',
        },
      },
      {
        type: 'paragraph',
        text: 'Where we rely on your consent, you can withdraw it at any time. Withdrawing does not affect processing that took place before.',
      },
    ],
  },

  // 4. HOW WE SHARE INFORMATION
  {
    id: 'how-we-share',
    number: 4,
    title: 'How We Share Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We share personal information only as needed, and only in these ways:',
      },
      {
        type: 'list',
        items: [
          'Affiliates: Other companies in the Matic Global group, for the purposes in this policy.',
          'Service providers: Companies that act on our behalf, such as providers of hosting, data storage, analytics, email and messaging, customer relationship management, recruiting and applicant tracking, scheduling, payments and events. They may use the data only to provide services to us, under contract.',
          'Business partners: Partners we work with on joint offerings or projects, with your consent where the law requires it.',
          'Professional advisers: Lawyers, auditors, bankers and insurers who advise us.',
          'Authorities and safety: Government bodies, courts and law enforcement, and other parties, when we believe disclosure is required by law or necessary to enforce our terms, protect rights, safety or property, or prevent fraud and unlawful activity.',
          'Business changes: A buyer or other party involved in a merger, acquisition, financing, reorganization or sale of assets. We will ask the recipient to honor this policy.',
        ],
      },
      {
        type: 'paragraph',
        text: '[[Confirm: Matic Global does not sell personal information for money and does not share it for cross-context behavioral advertising. Review this statement together with the marketing cookies described below.]]',
      },
    ],
  },

  // 5. COOKIES AND SIMILAR TECHNOLOGIES
  {
    id: 'cookies',
    number: 5,
    title: 'Cookies and Similar Technologies',
    blocks: [
      {
        type: 'paragraph',
        text: 'Cookies are small files placed on your device. We and our providers use cookies, pixels, web beacons and similar tools to keep the Sites working, remember your choices and understand how the Sites perform.',
      },
      {
        type: 'cardGrid',
        cards: [
          {
            title: 'Strictly necessary',
            description: 'Keep the Sites secure and working. These cannot be switched off.',
          },
          {
            title: 'Functionality',
            description: 'Remember choices such as language, layout, text size, accessibility settings and location preference.',
          },
          {
            title: 'Performance and analytics',
            description: 'Show us how visitors reach and use the Sites so we can fix errors and improve content. Results are aggregated.',
          },
          {
            title: 'Marketing',
            description: 'We may use Google and Microsoft Bing marketing pixels to measure and improve our outreach. [[Confirm the current tools.]]',
          },
        ],
      },
      {
        type: 'paragraph',
        subtitle: 'Manage your choices',
        text: 'Use the Manage Cookies button below, or the link in the footer, to switch functionality, performance and marketing cookies on or off. You can also block or delete cookies in your browser settings. Blocking some cookies may affect how the Sites work.',
      },
      {
        type: 'buttonAction',
        button: {
          label: 'Manage Cookies',
          action: 'manageCookies',
        },
        helpLinks: [
          { label: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop' },
          { label: 'Microsoft Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' },
          { label: 'Mozilla Firefox', url: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
          { label: 'Apple Safari', url: 'https://support.apple.com/guide/safari/sfri11471/mac' },
        ],
      },
      {
        type: 'paragraph',
        subtitle: 'Do Not Track and Global Privacy Control',
        text: 'Some browsers send Do Not Track signals. There is no common standard for responding to them, so we do not currently respond to them. [[Confirm whether the Sites honor the Global Privacy Control signal, which some US state laws treat as a valid opt-out.]]',
      },
    ],
  },

  // 6. JOB APPLICANTS AND FREELANCERS
  {
    id: 'applicants',
    number: 6,
    title: 'Job Applicants and Freelancers',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you apply to work with us, whether full time, as a freelancer or contractor, or as an intern, we use your application data to assess your suitability, communicate with you, arrange interviews and, if you are engaged, set up the working relationship. Only people involved in hiring and engagement decisions, and the providers that host our recruiting tools, can access it.',
      },
      {
        type: 'paragraph',
        text: 'We keep applications for [[X months]] after a decision, then delete or anonymize them. If you join our talent network, we keep your details for up to [[X months]] so we can contact you about future roles, and you can ask us to remove them at any time.',
      },
      {
        type: 'paragraph',
        text: 'We may check the information you give us, for example by contacting references you name, and we will tell you before running any background check. [[Confirm.]] Please send only information about yourself, plus details of references who have agreed to be named.',
      },
    ],
  },

  // 7. INTERNATIONAL TRANSFERS
  {
    id: 'international-transfers',
    number: 7,
    title: 'International Transfers',
    blocks: [
      {
        type: 'paragraph',
        text: 'We are based in the United States and India, and our providers may operate in other countries. Your information may therefore be processed outside your own country or region, where data protection laws can differ from those where you live. Where the law requires it, we use appropriate safeguards for transfers, such as standard contractual clauses or other approved mechanisms. [[Confirm the safeguards actually used.]]',
      },
    ],
  },

  // 8. HOW LONG WE KEEP INFORMATION
  {
    id: 'retention',
    number: 8,
    title: 'How Long We Keep Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'We keep personal information only as long as needed for the purposes in this policy, to meet legal, tax, accounting and reporting requirements, or to resolve disputes, whichever is longer. We set periods by considering the nature and sensitivity of the data, the risk of harm from misuse, why we hold it and whether we could reach the same goal another way.',
      },
      {
        type: 'table',
        table: {
          headers: ['Data', 'Typical retention'],
          rows: [
            ['Business enquiries', '[[X months after last contact]]'],
            ['Unsuccessful applications', '[[X months]]'],
            ['Talent network', '[[X months, or until you ask us to remove you]]'],
            ['Client and vendor records, contracts and financial records', '[[As required by law, typically X years]]'],
            ['Marketing preferences', 'Until you unsubscribe, plus a record to honor your opt-out'],
            ['Website logs', '[[X months]]'],
            ['Chat conversations', '[[X months]]'],
          ],
        },
      },
    ],
  },

  // 9. SECURITY
  {
    id: 'security',
    number: 9,
    title: 'Security',
    blocks: [
      {
        type: 'paragraph',
        text: 'We use administrative, technical and physical safeguards that are reasonable for the kind of information we hold, including access controls that limit data to staff who need it for their work.',
      },
      {
        type: 'paragraph',
        text: 'No website or system is completely secure, and we cannot guarantee absolute security. If you suspect misuse of your information, or think your interaction with us is no longer secure, email privacy@maticglobals.com right away. Where the law requires, we notify affected individuals and regulators of a data breach.',
      },
    ],
  },

  // 10. YOUR RIGHTS AND CHOICES
  {
    id: 'your-rights',
    number: 10,
    title: 'Your Rights and Choices',
    blocks: [
      {
        type: 'list',
        text: 'Depending on where you live, you may have the right to:',
        items: [
          'Know whether we process your data and get a copy',
          'Correct inaccurate or incomplete data',
          'Delete data',
          'Restrict or object to some processing, including direct marketing',
          'Receive your data in a portable format',
          'Withdraw consent',
          'Opt out of marketing at any time',
          'Complain to your data protection authority',
        ],
      },
      {
        type: 'regionTabs',
        regionTabs: [
          {
            id: 'eea-uk',
            label: 'EEA, UK and similar',
            content: 'If the GDPR or UK GDPR applies to you, Matic Global Solutions Inc. is the controller of the personal information described in this policy. [[Confirm any EU or UK representative requirement.]] You can exercise the rights above and complain to your local supervisory authority.',
          },
          {
            id: 'us-states',
            label: 'US states',
            content: 'Residents of states with privacy laws, including California, may have the right to know, access, correct and delete personal information, to opt out of its sale or sharing for targeted advertising, and to be free from discrimination for exercising these rights. You may use an authorized agent to make a request, and you may appeal a refusal where your state law allows. We have collected the categories of information described in section 2 and disclosed them to the recipients described in section 4. [[Confirm the required category disclosures with counsel.]]',
          },
          {
            id: 'india',
            label: 'India',
            content: 'Under India\'s Digital Personal Data Protection Act, 2023, individuals may have the right to access information about their personal data, to have it corrected, completed or erased, to seek grievance redressal, and to nominate another person to exercise these rights in the event of death or incapacity. Contact our Grievance Officer: [[Name, email, address]]. [[Confirm applicability and the Rules in force with counsel.]]',
          },
        ],
      },
      {
        type: 'paragraph',
        subtitle: 'How to make a request',
        text: 'Email privacy@maticglobals.com or write to the address in section 14. Include your name, email address, the country or state where you live and what you are asking for. We may ask for details to confirm your identity. We respond within the time allowed by applicable law. Some information may be exempt from a request, for example where we must keep it to comply with law or to establish or defend legal claims, and we will explain if that applies.',
      },
      {
        type: 'paragraph',
        subtitle: 'Marketing emails',
        text: 'Use the unsubscribe link in any message. We may still send you service-related messages.',
      },
      {
        type: 'paragraph',
        subtitle: 'If you choose not to share information',
        text: 'You can browse the Sites without telling us who you are. If you do not provide information we need to reply to you or deliver a service, we may not be able to help.',
      },
    ],
  },

  // 11. CHILDREN
  {
    id: 'children',
    number: 11,
    title: 'Children',
    blocks: [
      {
        type: 'paragraph',
        text: 'The Sites are not directed to children, and we do not knowingly collect personal information from anyone under 18. [[Confirm the age threshold with counsel.]] If you believe a child has given us personal information, email privacy@maticglobals.com and we will take steps to delete it.',
      },
    ],
  },

  // 12. THIRD-PARTY LINKS AND PUBLIC CONTENT
  {
    id: 'third-party-links',
    number: 12,
    title: 'Third-Party Links and Public Content',
    blocks: [
      {
        type: 'paragraph',
        text: 'The Sites may link to websites, social platforms and content we do not own or control. Their privacy practices are their own, and a link is not an endorsement. We encourage you to read their policies.',
      },
      {
        type: 'paragraph',
        text: 'Information you post in public forums, comment sections, social networks or at in-person events can be seen and used by others, and we cannot control that.',
      },
    ],
  },

  // 13. CHANGES TO THIS POLICY
  {
    id: 'changes',
    number: 13,
    title: 'Changes to This Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed. If we make material changes, we will notify you by email or with a prominent notice on the Sites where the law requires. Please check back periodically.',
      },
    ],
  },

  // 14. CONTACT US
  {
    id: 'contact',
    number: 14,
    title: 'Contact Us',
    blocks: [
      {
        type: 'cardGrid',
        cards: [
          {
            title: 'Privacy Office, Matic Global Solutions Inc.',
            description: '254 Chapman Rd, Ste 208 #26802, Newark, Delaware 19702, United States\nEmail: privacy@maticglobals.com\nIndia office and Grievance Officer: [[Name, address, email]]',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'When you write, include your name, your email address and the state or country where you live so we can respond within the time your local law requires.',
      },
      {
        type: 'buttonAction',
        button: {
          label: 'Email the Privacy Office',
          action: 'contactEmail',
          href: 'mailto:privacy@maticglobals.com?subject=Privacy%20Enquiry%20-%20Matic%20Global',
        },
      },
    ],
  },
];
