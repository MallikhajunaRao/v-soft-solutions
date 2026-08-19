import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Venkata Nageswara Rao',
      role: 'Director 1',
      icon: '💻',
      image: '/assets/nageswarao.jpeg',
      width: '40px',
      height: '40px'
    },
    {
      name: 'Venkatramaiah Naidu',
      role: 'Director 2',
      icon: '🛠️',
      image: '/assets/venkaramaih.png',
    },
    {
      name: 'Mallikharjuna Rao',
      role: 'Director 3',
      icon: '👔',
      image: '/assets/WhatsApp Image 2026-06-12 at 12.13.15 PM.jpeg'
    }
  ];

  galleryImages = [
    { src: '/assets/office1.jpg', alt: 'Development Hub', title: 'Development Hub', description: 'State-of-the-art development workspace with modern infrastructure' },
    { src: '/assets/office2.jpeg', alt: 'Team Collaboration', title: 'Team Collaboration', description: 'Collaborative environment where ideas come to life' },
    { src: '/assets/developer-pics.jpg', alt: 'Innovation Lab', title: 'Innovation Lab', description: 'Cutting-edge technology and research facilities' },
    { src: '/assets/developer-pics2.jpg', alt: 'Developer Team', title: 'Developer Team', description: 'Expert developers working on world-class solutions' }
  ];

  selectedGalleryIndex: number | null = null;

  openGalleryModal(index: number) {
    this.selectedGalleryIndex = index;
  }

  closeGalleryModal() {
    this.selectedGalleryIndex = null;
  }

  nextImage() {
    if (this.selectedGalleryIndex !== null && this.selectedGalleryIndex < this.galleryImages.length - 1) {
      this.selectedGalleryIndex++;
    }
  }

  prevImage() {
    if (this.selectedGalleryIndex !== null && this.selectedGalleryIndex > 0) {
      this.selectedGalleryIndex--;
    }
  }
}
