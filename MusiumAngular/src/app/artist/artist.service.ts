import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getAll(){}

  getById(id: number){}
  
  add(artistForm: FormGroup){}
}
