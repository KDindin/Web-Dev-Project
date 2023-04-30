import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  newTitle!: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    const albumId = +this.route.snapshot.paramMap.get('id');
    this.albumService.getAlbum(albumId).subscribe(album => {
      this.album = album;
      this.newTitle = album.title;
    });
  }

  saveTitle(): void {
    this.album.title = this.newTitle;
    this.albumService.updateAlbum(this.album).subscribe(() => {
      console.log('Album title updated');
    });
  }
}
