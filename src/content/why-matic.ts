export interface WhyMaticItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyMaticStat {
  value: string;
  label: string;
  icon: 'Award' | 'Layers' | 'Calendar' | 'TrendingUp';
  isPlaceholder?: boolean;
}

export interface WhyMaticContent {
  flags: {
    /**
     * Controls visibility of the 4-card statistics row.
     * TODO: Must be set to false before launch unless real numbers are filled.
     */
    SHOW_STATS: boolean;
    /**
     * Controls visibility of the bottom CTA band.
     * Defaults to false because the Home page already ends with a primary CTA banner.
     */
    SHOW_CTA: boolean;
  };
  header: {
    label?: string;
    title: string;
    intro: string;
  };
  image: {
    src: string;
    alt: string;
    ctaText: string;
    ctaHref: string;
  };
  items: WhyMaticItem[];
  stats: WhyMaticStat[];
  cta: {
    heading: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const whyMaticContent: WhyMaticContent = {
  flags: {
    SHOW_STATS: false,
    SHOW_CTA: false,
  },
  header: {
    title: "Why Matic",
    intro:
      "Most growth-stage companies hire separate vendors for technology, compliance and finance, then spend their time keeping them aligned. We work as one team, so your systems, controls and books stay consistent from the start.",
  },
  image: {
    src: "/images/why_matic_strategy.jpg",
    alt: "Matic Global unified advisory team aligning enterprise technology, compliance, and financial operations",
    ctaText: "Our Company",
    ctaHref: "/ourcompany",
  },
  items: [
    {
      number: "01",
      title: "Regulation shapes the design.",
      description:
        "Compliance requirements guide every system we build, instead of arriving as a review at the end. Decisions are documented as we go, so you can explain them later.",
      icon: "Scale",
    },
    {
      number: "02",
      title: "AI where it pays off.",
      description:
        "We start from a business use case and governed data, not from a tool. Every model is validated against your acceptance criteria before it goes live.",
      icon: "Cpu",
    },
    {
      number: "03",
      title: "One team, not five vendors.",
      description:
        "Technology, compliance and finance work together, so your ERP, controls and books agree. One plan, one point of accountability.",
      icon: "GitMerge",
    },
    {
      number: "04",
      title: "Built for growth-stage teams.",
      description:
        "You may not have a large IT or compliance department yet. We size our team and delivery cycles to where you are today.",
      icon: "SlidersHorizontal",
    },
    {
      number: "05",
      title: "Audit-ready by default.",
      description:
        "Access controls, documentation and evidence are created while we build, so a review never turns into a scramble.",
      icon: "Fingerprint",
    },
    {
      number: "06",
      title: "Your team, extended.",
      description:
        "We work alongside your people and share what we build and why, so you are never dependent on us after go-live.",
      icon: "Handshake",
    },
  ],
  stats: [
    {
      value: "00+",
      label: "Projects delivered",
      icon: "Award",
      isPlaceholder: true,
    },
    {
      value: "00+",
      label: "Years of experience",
      icon: "Layers",
      isPlaceholder: true,
    },
    {
      value: "00+",
      label: "Industries served",
      icon: "Calendar",
      isPlaceholder: true,
    },
    {
      value: "00%",
      label: "Client retention",
      icon: "TrendingUp",
      isPlaceholder: true,
    },
  ],
  cta: {
    heading: "Planning your next stage of growth? Talk to us first.",
    buttonText: "Book a Consultation",
    buttonHref: "/contactus?type=business",
  },
};

