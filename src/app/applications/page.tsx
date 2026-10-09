import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { Code, Smartphone, Blocks, Wrench, ShieldCheck, Database } from 'lucide-react';

export default function Applications() {
  return (
    <ServicePageTemplate 
      title="Application Development"
      intro="We deliver scalable, secure, and high-performance custom web, mobile, and software solutions for your enterprise. Our application development services bridge the gap between complex regulatory requirements and modern digital experiences."
      bgImageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
      technologies={['React', 'Next.js', 'Node.js', 'Python', 'Java', 'Swift', 'Kotlin', 'GraphQL', 'Docker', 'Kubernetes']}
      relatedSlugs={['aiml', 'cloudstrategy', 'cybersecurity']}
      offers={[
        {
          icon: <Code />,
          title: "Custom Web Applications",
          description: "End-to-end development of responsive, accessible, and high-performance web applications tailored to your specific operational needs."
        },
        {
          icon: <Smartphone />,
          title: "Mobile App Development",
          description: "Native and cross-platform mobile experiences that empower your workforce and engage your customers securely."
        },
        {
          icon: <Blocks />,
          title: "API Development & Integration",
          description: "Robust, secure APIs that seamlessly connect your disparate systems, creating a unified digital ecosystem."
        },
        {
          icon: <Database />,
          title: "Legacy Modernization",
          description: "Transform monolithic, outdated systems into agile, cloud-native architectures without disrupting core business workflows."
        },
        {
          icon: <ShieldCheck />,
          title: "Secure by Design",
          description: "Integrating DevSecOps from day one to ensure compliance with stringent industry standards like HIPAA and GDPR."
        },
        {
          icon: <Wrench />,
          title: "QA & DevOps",
          description: "Automated testing, continuous integration, and continuous deployment pipelines to accelerate delivery and ensure reliability."
        }
      ]}
    />
  );
}
