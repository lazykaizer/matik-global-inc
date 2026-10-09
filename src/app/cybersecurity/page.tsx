import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { Shield, Lock, Search, Network, UserCheck, AlertTriangle } from 'lucide-react';

export default function Cybersecurity() {
  return (
    <ServicePageTemplate 
      title="Cybersecurity"
      intro="Ensure risk-based, robust protection aligned to NIST, CASB, SIEM, and modern SOC practices. We secure your digital footprint so you can innovate without compromising data integrity or regulatory standing."
      bgImageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      technologies={['Splunk', 'CrowdStrike', 'Palo Alto Networks', 'Zscaler', 'Okta', 'Microsoft Sentinel', 'Tenable', 'CyberArk']}
      relatedSlugs={['compliances', 'cloudstrategy', 'applications']}
      offers={[
        {
          icon: <Shield />,
          title: "NIST Alignment & Strategy",
          description: "Assess and align your security posture against the NIST Cybersecurity Framework to build a resilient defense strategy."
        },
        {
          icon: <Network />,
          title: "Cloud Security & CASB",
          description: "Secure your cloud environments and SaaS applications with Cloud Access Security Brokers and zero-trust architectures."
        },
        {
          icon: <Search />,
          title: "SIEM & SOC Operations",
          description: "24/7 threat monitoring, detection, and rapid incident response through advanced Security Information and Event Management."
        },
        {
          icon: <AlertTriangle />,
          title: "Vulnerability Management",
          description: "Continuous scanning and penetration testing to proactively identify and remediate weaknesses in your infrastructure."
        },
        {
          icon: <UserCheck />,
          title: "Identity & Access Management",
          description: "Implement robust IAM solutions including MFA and SSO to ensure only authorized personnel access critical data."
        },
        {
          icon: <Lock />,
          title: "Data Privacy & Encryption",
          description: "End-to-end encryption and Data Loss Prevention (DLP) strategies to safeguard sensitive intellectual property and PHI."
        }
      ]}
    />
  );
}
