import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject<Array<Place>>([
    new Place(
      'place-5',
      'Memorial of Rio de Janeiro',
      'Rest in Peace folks with Memorial of Rio de Janeiro',
      'https://www.memorialdorio.com.br/assets/img/galeria-sobre/2.jpg',
      1000.0,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'place-1',
      'Manhattan Mansion',
      'In the heart of Nem York City',
      'https://66.media.tumblr.com/36f52e49f2045e16b109fd49710d1f92/tumblr_mjulf1vdfs1rmi2s2o1_500.jpg',
      149.99,
      new Date('2015-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'place-1',
      'Manhattan Mansion',
      'In the heart of Nem York City',
      'https://66.media.tumblr.com/36f52e49f2045e16b109fd49710d1f92/tumblr_mjulf1vdfs1rmi2s2o1_500.jpg',
      149.99,
      new Date('2015-01-01'),
      new Date('2019-12-31'),
      'abc'
    ),
    new Place(
      'place-2',
      '\'L\' Amour Toujours',
      'A romantic place in Paris!',
      'https://www.ahstatic.com/photos/0351_ro_01_p_2048x1536.jpg',
      249.99,
      new Date('2019-01-01'),
      new Date('2022-12-31'),
      'abc'
    ),
    new Place(
      'place-3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://s-ec.bstatic.com/images/hotel/max1024x768/180/180082956.jpg',
      500.99,
      new Date('2019-01-01'),
      new Date('2025-12-31'),
      'abc'
    ),
    new Place(
      'p-5',
      'The beach of Brazil paradise',
      'Rest in a beautiful beach in Brazil summer!',
      'https://guiaestilomasculino.com/wp-content/uploads/2018/04/Essenza-hotel-min.jpg',
      160.99,
      new Date('2019-10-01'),
      new Date('2023-07-25'),
      'abc'
    ),
    new Place(
      'p-6',
      'Copacabana Hotel',
      'Orla Copacabana Hotel em Rio de Janeiro - Hoteis.com',
      'https://thumbnails.trvl-media.com/wcEWKedK7hqrWlquEZwN_C97Rk4=' +
        '/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/1000000/890000/889700/889673/479dd455_z.jpg',
      160.99,
      new Date('2019-10-01'),
      new Date('2023-07-25'),
      'abc'
    )
  ]);

  constructor(private authService: AuthService) {}

  get places() {
    return this._places.asObservable();
  }

  getPlaceById(id: string) {
    return this._places.pipe(
      take(1),
      map(places => {
        return {...places.find(p => p.id === id)};
      })
    );
  }

  addPlaces(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://guiaestilomasculino.com/wp-content/uploads/2018/04/Essenza-hotel-min.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );

    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace));
    });
  }
}
