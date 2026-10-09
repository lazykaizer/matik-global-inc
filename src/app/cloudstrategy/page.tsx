import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { Cloud, Server, ArrowUpRight, DollarSign, CloudLightning, Shield } from 'lucide-react';

export default function CloudStrategy() {
  return (
    <ServicePageTemplate 
      title="Cloud Strategy and Infrastructure"
      intro="Modernize IT, optimize cost, and build a future-ready, resilient roadmap on Azure, AWS, and GCP. We transform legacy infrastructure into scalable cloud ecosystems that drive business agility."
      bgImageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      technologies={['Microsoft Azure', 'AWS', 'Google Cloud Platform', 'Terraform', 'Kubernetes', 'Ansible', 'Datadog', 'Cloudflare']}
      relatedSlugs={['cybersecurity', 'applications', 'erp']}
      offers={[
        {
          icon: <Cloud />,
          title: "Cloud Readiness & Strategy",
          description: "Assess your current portfolio to define a comprehensive cloud migration roadmap that minimizes risk and downtime."
        },
        {
          icon: <ArrowUpRight />,
          title: "Cloud Migration",
          description: "Seamless execution of lift-and-shift, re-platforming, or complete cloud-native refactoring of your applications."
        },
        {
          icon: <Server />,
          title: "Landing Zones & Architecture",
          description: "Design secure, scalable, and compliant foundational architectures tailored for enterprise workloads."
        },
        {
          icon: <DollarSign />,
          title: "FinOps & Cost Optimization",
          description: "Implement strict financial governance and resource optimization to eliminate cloud waste and control spend."
        },
        {
          icon: <CloudLightning />,
          title: "Infrastructure as Code",
          description: "Automate provisioning and configuration using Terraform and Ansible for consistent, repeatable deployments."
        },
        {
          icon: <Shield />,
          title: "Disaster Recovery & Resilience",
          description: "Build highly available architectures with robust backup and disaster recovery plans to ensure business continuity."
        }
      ]}
    />
  );
}
