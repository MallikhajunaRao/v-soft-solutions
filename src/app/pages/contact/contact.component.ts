import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;
  submitting = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitting = true;
      this.errorMessage = '';

      this.http.post('/api/send-email', this.formData).subscribe({
        next: (response: any) => {
          this.submitted = true;
          this.submitting = false;
          this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
          
          setTimeout(() => {
            this.submitted = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Email error:', error);
          this.submitting = false;
          this.errorMessage = error.error?.error || 'Failed to send email. Please try again.';
          
          setTimeout(() => {
            this.errorMessage = '';
          }, 5000);
        }
      });
    }
  }

  contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: 'Andrapradesh, India - 522413'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 9505-562-650'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'hr@vmfuturetechcom.com | support@vmfuturetechcom.com'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM IST'
    }
  ];
}
