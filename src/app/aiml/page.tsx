import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePage';
import { BrainCircuit, LineChart, MessageSquareText, Settings2, Cpu, Eye } from 'lucide-react';

export default function AIML() {
  return (
    <ServicePageTemplate 
      title="AI and ML"
      intro="Transform your operations with predictive analytics, NLP, and advanced MLOps designed for high-growth sectors. We build intelligent systems that turn raw data into strategic foresight and operational automation."
      bgImageUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop"
      technologies={['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'LangChain', 'Hugging Face', 'Databricks', 'Snowflake', 'MLflow', 'Spark']}
      relatedSlugs={['applications', 'cloudstrategy', 'erp']}
      offers={[
        {
          icon: <BrainCircuit />,
          title: "Generative AI Solutions",
          description: "Custom LLMs and generative models tailored to your proprietary data to automate content creation and complex problem solving."
        },
        {
          icon: <LineChart />,
          title: "Predictive Analytics",
          description: "Forecast market trends, optimize supply chains, and predict patient or customer outcomes using historical data."
        },
        {
          icon: <MessageSquareText />,
          title: "Natural Language Processing",
          description: "Automate document processing, sentiment analysis, and intelligent virtual assistants for enhanced customer support."
        },
        {
          icon: <Settings2 />,
          title: "MLOps & Engineering",
          description: "End-to-end lifecycle management of machine learning models ensuring scalable deployment and continuous monitoring."
        },
        {
          icon: <Cpu />,
          title: "Intelligent Automation",
          description: "RPA combined with machine learning to automate complex, unstructured workflows and reduce manual overhead."
        },
        {
          icon: <Eye />,
          title: "Computer Vision",
          description: "Advanced image and video analysis for manufacturing quality control, medical imaging, and security."
        }
      ]}
    />
  );
}
