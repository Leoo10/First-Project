import { Component } from '@angular/core';

interface LinkIconItem {
  href: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  link_icon_container: LinkIconItem[] = [
    { href: 'https://www.instagram.com/arminvanbuuren/' },
    { href: 'https://www.youtube.com/@arminvanbuuren' },
    { href: 'https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5' },
    { href: 'https://www.facebook.com/arminvanbuuren' },
    { href: 'https://www.tiktok.com/@arminvanbuuren' },
    { href: 'https://twitter.com/arminvanbuuren' },
    { href: 'https://music.apple.com/us/artist/armin-van-buuren/17976294' }
  ];

}

