import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ];

  contactDetails = {
    phone1: '+91 9505-562-6509',
    phone2: '+91 8850-160-16633',
    phone3: '+91 7032-710-886',
    email1: 'info@vmfuturetech.com',
    email2: 'support@vmfuturetech.com',
    address: 'Andrapradesh, India - 522413',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM IST'
  };

  social = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '🔗', label: 'LinkedIn', href: '#' }
  ];
}
