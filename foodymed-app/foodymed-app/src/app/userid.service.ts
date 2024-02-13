import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseridService {

  constructor() { }

  public formDataId: number | null = null;

  setFormDataId(id: number): void {
    this.formDataId = id;
  }

  getFormDataId(): number | null {
    return this.formDataId;
  }
}
