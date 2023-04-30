import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`)
  }

  getAlbum(id: any): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  getPhotos(albumId: number): Observable<any>{
    return this.client.get<any[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }

  deleteAlbum(albumId: number): Observable<any>{
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  updateAlbum(album: Album): Observable<Album>{
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`, album)
  }
}
