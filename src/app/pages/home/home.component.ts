import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      icon: '🚀',
      title: 'Fast & Responsive',
      description: 'Lightning-fast performance with responsive design for all devices'
    },
    {
      icon: '🔒',
      title: 'Secure Solutions',
      description: 'Enterprise-grade security to protect your valuable data'
    },
    {
      icon: '💡',
      title: 'Innovative Tech',
      description: 'Cutting-edge technologies and modern development practices'
    },
    {
      icon: '🤝',
      title: 'Expert Support',
      description: '24/7 dedicated support team to assist your business needs'
    }
  ];

  services = [
    { name: 'Web Development', icon: '🌐' },
    { name: 'Mobile Apps', icon: '📱' },
    { name: 'Cloud Solutions', icon: '☁️' },
    { name: 'Data Analytics', icon: '📊' },
    { name: 'AI & Machine Learning', icon: '🤖' },
    { name: 'Consulting', icon: '💼' }
  ];

  clients = [
    { name: 'TechCorp', logo: '💼', industry: 'Enterprise Software' },
    { name: 'StartupHub', logo: '🚀', industry: 'SaaS Platform' },
    { name: 'FinanceFlow', logo: '💰', industry: 'Financial Services' },
    { name: 'HealthPlus', logo: '🏥', industry: 'Healthcare' },
    { name: 'RetailMax', logo: '🛍️', industry: 'E-Commerce' },
    { name: 'EduSmart', logo: '📚', industry: 'Education Tech' },
    { name: 'LogisticsPro', logo: '📦', industry: 'Supply Chain' },
    { name: 'MediaFlow', logo: '🎬', industry: 'Media & Entertainment' }
  ];
}
