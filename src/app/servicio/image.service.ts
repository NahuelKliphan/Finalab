import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public uploadImage(image: File): Observable<Response>{
    const formData = new FormData();
    formData.append('image', image);

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

    return this.http.post<any>('gs://finalab-8a970.appspot.com', formData, {headers: headers});
  }
}
