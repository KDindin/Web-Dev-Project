import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Album} from "../album";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  albumId!: number;
  photos!: any[];
  album!: Album;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.albumId = +this.route.snapshot.paramMap.get('id');
    this.albumService.getPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
    });

    this.albumService.getAlbum(this.albumId).subscribe(album => {
      this.album = album;
    });
  }
}
