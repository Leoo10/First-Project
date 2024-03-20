import { Component } from '@angular/core';

interface MusicItem {
  img: string;
  href: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  img_container: MusicItem[] = [
    {
      img: 'https://lastfm.freetls.fastly.net/i/u/ar0/b56326fcfb78d6e933dda9f6f1f63852.jpg',
      href: 'https://youtu.be/jJvPWiTE9OI'
    },
    {
      img: 'https://i1.sndcdn.com/artworks-7b2de776-70df-4fa1-858c-3b0ee7f97746-0-t500x500.jpg',
      href: 'https://youtu.be/B1JOlfzTSMo'
    },
    {
      img: 'https://cdns-images.dzcdn.net/images/cover/8c11a0aa8f4bf63c10a86ff32942e9e2/350x350.jpg',
      href: 'https://youtu.be/BR_DFMUzX4E'
    }
  ];

  button_arminVanBurren_playlist = 'https://www.youtube.com/@arminvanbuuren/playlists';

  armin_presentation_img: string = 'https://images.mubicdn.net/images/cast_member/824300/cache-603345-1603914453/image-w856.jpg?size=800x';
}
