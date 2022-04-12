import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Cute Birds';
  image1 = 'https://www.tracyvets.com/files/HyacinthMacaw-2.jpeg'
  image2 = 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/78996-istock-682216682-a84e814e7edb9e8457cb94cf0d8cd613.jpg';
  image3 = 'https://www.tracyvets.com/files/PionusParrot.jpeg';

  constructor() { }

  ngOnInit() {
  }

}