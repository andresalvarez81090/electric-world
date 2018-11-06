import { Festival } from '../components/festival.component';
import { FESTIVALS } from '../templates/mock-festivals';
import { Injectable } from '@angular/core';

@Injectable()
export class FestivalService {
  getFestivals() {
    return Promise.resolve(FESTIVALS);
  }

  getFestival(id: string) {
    return Promise.resolve(FESTIVALS).then(
      festivals => festivals.filter(festival => festival.id === id)[0]
    );
  }
}
