import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_CONTENT } from './data/mock-content';
import { IContent } from './models/Icontent';



@Injectable({
  providedIn: 'root'
})
export class LaptopContentService {
  private contents: IContent[] = MOCK_CONTENT;

  constructor() {}
  
  getAllContent(): Observable<IContent[]> {
    return of(this.contents); 
  }


  getAll(): IContent[] {
    return this.contents;
  }

  getById(id: number): IContent | undefined {
    return this.contents.find(content => content.id === id);
  }

  add(content: IContent): void {
    this.contents.push(content);
  }

  update(content: IContent): void {
    const index = this.contents.findIndex((c: IContent) => c.id === content.id);
    if (index > -1) {
      this.contents[index] = content;
    }
  }

  delete(id: number): void {
    this.contents = this.contents.filter((content: IContent) => content.id !== id);
  }
}
