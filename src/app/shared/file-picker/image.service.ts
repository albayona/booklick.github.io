import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";


interface ImageInfo {
  title: string;
  description: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = '565dafda36e454b';


  constructor(private http: HttpClient) {
  }

  uploadImage(imageFile: File, infoObject: {}): Observable<Object> {
    let formData = new FormData();
    formData.append('image', imageFile, imageFile.name);

    let header = new HttpHeaders({
      "authorization": 'Client-ID ' + this.clientId
    });

    return this.http.post(this.url, formData, {headers: header});
    // this.imageLink = imageData['data'].link;

  }

  // post(imageFile: File, infoObject: {}): Promise<string> {
  //
  //   return new Promise<string>((resolve) => {
  //
  //     let formData = new FormData();
  //     formData.append('image', imageFile, imageFile.name);
  //
  //     let header = new HttpHeaders({
  //       "authorization": 'Client-ID ' + this.clientId
  //     });
  //
  //     const imageData = await this.http.post(this.url, formData, {headers: header}).toPromise();
  //     this.imageLink = imageData['data'].link;
  //     console.log("image----" + this.imageLink)
  //
  //     let newImageObject: ImageInfo = {
  //       title: infoObject["title"],
  //       description: infoObject["description"],
  //       link: this.imageLink
  //     };
  //
  //     this.images.unshift(newImageObject);
  //
  //     var savedPackage: string = this.imageLink;
  //
  //     setTimeout(() => {
  //       resolve(savedPackage);
  //     }, 1500);
  //   });
  //
  // }

}
