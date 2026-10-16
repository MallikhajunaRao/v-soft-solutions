import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with latest technologies. Custom solutions tailored to your business needs.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Scalable Architecture']
    },
    {
      icon: '📱',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Deployment']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Secure cloud infrastructure and migration services to modernize your IT infrastructure and reduce costs.',
      features: ['AWS Solutions', 'Azure Cloud', 'Cloud Migration', 'Infrastructure as Code']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Visualization', 'BI Dashboard', 'Predictive Analytics', 'Real-time Reporting']
    },
    {
      icon: '🤖',
      title: 'AI & ML Solutions',
      description: 'Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.',
      features: ['Machine Learning Models', 'AI Automation', 'Natural Language Processing', 'Computer Vision']
    },
    {
      icon: '💼',
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align your technology with business goals and drive digital transformation.',
      features: ['Digital Strategy', 'Tech Stack Selection', 'Process Optimization', 'Change Management']
    }
  ];
}
