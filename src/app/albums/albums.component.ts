import { Component, OnInit } from '@angular/core';
import {Album} from "../album";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

}
