import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { FileCheck, BookOpen, ScrollText, CheckCircle, Search, Scale } from 'lucide-react';

export default function Compliances() {
  return (
    <ServicePageTemplate 
      title="Compliances"
      intro="Guide your organization through complex GDPR, GRC, and ever-evolving global regulatory requirements safely. We translate complex legal and industry frameworks into actionable, operationalized IT controls."
      bgImageUrl="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
      technologies={['OneTrust', 'ServiceNow GRC', 'RSA Archer', 'AuditBoard', 'Vanta', 'Drata']}
      relatedSlugs={['cybersecurity', 'accountingtax', 'erp']}
      offers={[
        {
          icon: <FileCheck />,
          title: "Regulatory Readiness",
          description: "Gap assessments and readiness programs for GDPR, CCPA, HIPAA, SOC 2, and ISO 27001."
        },
        {
          icon: <ScrollText />,
          title: "Governance, Risk & Compliance (GRC)",
          description: "Implement unified GRC platforms to manage enterprise risk, policies, and internal controls centrally."
        },
        {
          icon: <CheckCircle />,
          title: "Audit Support",
          description: "End-to-end support during external audits, reducing organizational stress and ensuring successful outcomes."
        },
        {
          icon: <BookOpen />,
          title: "Policy Development",
          description: "Drafting, updating, and operationalizing corporate security and data privacy policies aligned with best practices."
        },
        {
          icon: <Scale />,
          title: "Data Privacy Programs",
          description: "Designing data mapping, consent management, and subject access request (DSAR) workflows."
        },
        {
          icon: <Search />,
          title: "Third-Party Risk Management",
          description: "Evaluating and monitoring vendor security postures to ensure your supply chain remains compliant."
        }
      ]}
    />
  );
}
