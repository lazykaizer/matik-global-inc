import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { Calculator, BarChart3, PieChart, Landmark, TrendingDown, Receipt } from 'lucide-react';

export default function AccountingTax() {
  return (
    <ServicePageTemplate 
      title="Accounting and Taxation"
      intro="Expert financial management covering GAAP/IFRS reporting, rigorous cost optimization, and comprehensive tax advisory to sustain bottom-line health while you focus on scaling."
      bgImageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      technologies={['QuickBooks Online', 'Xero', 'BlackLine', 'Thomson Reuters ONESOURCE', 'CCH Axcess', 'Tableau']}
      relatedSlugs={['erp', 'compliances', 'cloudstrategy']}
      offers={[
        {
          icon: <Calculator />,
          title: "GAAP & IFRS Reporting",
          description: "Accurate, compliant financial statement preparation and conversion services for global operations."
        },
        {
          icon: <Landmark />,
          title: "Tax Planning & Advisory",
          description: "Strategic corporate tax planning to minimize liability and maximize incentives like R&D tax credits."
        },
        {
          icon: <BarChart3 />,
          title: "Financial Close Optimization",
          description: "Streamlining month-end and year-end close processes to ensure speed, accuracy, and reduced manual effort."
        },
        {
          icon: <TrendingDown />,
          title: "Cost Optimization",
          description: "Deep dive analysis of OPEX and CAPEX to identify waste and implement sustainable cost-reduction strategies."
        },
        {
          icon: <Receipt />,
          title: "Compliance & Filing",
          description: "Timely and accurate preparation and filing of local, state, federal, and international tax returns."
        },
        {
          icon: <PieChart />,
          title: "Virtual CFO Services",
          description: "Strategic financial leadership, cash flow forecasting, and board-level reporting for growth-stage companies."
        }
      ]}
    />
  );
}
