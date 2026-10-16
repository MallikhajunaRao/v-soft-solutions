import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  activeSlide = 0;
  autoplayPaused = false;
  private slideTimer?: ReturnType<typeof setInterval>;

  slides = [
    {
      eyebrow: 'Technology that moves business forward',
      title: 'Build what comes next.',
      description: 'Thoughtful software, dependable engineering, and a team that stays with you from first idea to launch.',
      image: '/assets/office1.jpg',
      imageAlt: 'A modern software development workspace'
    },
    {
      eyebrow: 'People-first, product-minded',
      title: 'Make every idea useful.',
      description: 'We turn ambitious plans into clear, intuitive digital experiences your customers will want to use.',
      image: '/assets/office2.jpeg',
      imageAlt: 'A team collaborating around a project'
    },
    {
      eyebrow: 'Your technology partner',
      title: 'Grow with confidence.',
      description: 'From web and mobile to cloud and data, get practical solutions designed around the way your business works.',
      image: '/assets/developer-pics.jpg',
      imageAlt: 'Developers working together on a digital product'
    }
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  showSlide(index: number) {
    this.activeSlide = (index + this.slides.length) % this.slides.length;
  }

  toggleAutoplay() {
    this.autoplayPaused = !this.autoplayPaused;
    this.autoplayPaused ? this.stopAutoplay() : this.startAutoplay();
  }

  private startAutoplay() {
    this.stopAutoplay();
    if (!this.autoplayPaused) {
      this.slideTimer = setInterval(() => this.showSlide(this.activeSlide + 1), 6000);
    }
  }

  private stopAutoplay() {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = undefined;
    }
  }

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
