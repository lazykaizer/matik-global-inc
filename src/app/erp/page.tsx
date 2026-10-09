import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { Briefcase, ArrowRightLeft, Headset, HardDrive, LayoutDashboard, Cog } from 'lucide-react';

export default function ERP() {
  return (
    <ServicePageTemplate 
      title="ERP"
      intro="Streamline operations and improve financial visibility across NetSuite, Infor JD Edwards, SAP, and MS Dynamics. We align your enterprise resource planning systems with your strategic growth objectives."
      bgImageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      technologies={['NetSuite', 'SAP S/4HANA', 'Microsoft Dynamics 365', 'Infor JD Edwards', 'Oracle Cloud ERP', 'Workday', 'MuleSoft', 'Dell Boomi']}
      relatedSlugs={['accountingtax', 'cloudstrategy', 'aiml']}
      offers={[
        {
          icon: <Briefcase />,
          title: "ERP Selection & Strategy",
          description: "Unbiased consulting to evaluate and select the optimal ERP platform tailored to your industry and growth trajectory."
        },
        {
          icon: <Cog />,
          title: "System Implementation",
          description: "End-to-end implementation focusing on risk mitigation, user adoption, and aligning the software to your business processes."
        },
        {
          icon: <ArrowRightLeft />,
          title: "Migration & Upgrades",
          description: "Seamless data migration and version upgrades from legacy on-premise systems to modern cloud ERP environments."
        },
        {
          icon: <HardDrive />,
          title: "Integration Services",
          description: "Connecting your ERP with CRM, HRIS, and proprietary systems using robust middleware solutions like MuleSoft or Boomi."
        },
        {
          icon: <LayoutDashboard />,
          title: "Customization & Analytics",
          description: "Developing custom modules and advanced BI dashboards to extract actionable intelligence from your ERP data."
        },
        {
          icon: <Headset />,
          title: "Managed Support",
          description: "Post-go-live optimization, functional support, and continuous improvement to maximize your ERP investment."
        }
      ]}
    />
  );
}
