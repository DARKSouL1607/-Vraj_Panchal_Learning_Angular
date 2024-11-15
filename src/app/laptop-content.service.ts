import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContent } from './models/Icontent';
import { MOCK_CONTENT } from './data/mock-content'; 

@Injectable({
  providedIn: 'root'
})
export class LaptopContentService {

  private contentList: IContent[] = MOCK_CONTENT;

  constructor() {}

  getAllContent(): Observable<IContent[]> {
    return of(this.contentList);
  }

  getContentById(id: number): Observable<IContent | undefined> {
    const content = this.contentList.find(item => item.id === id);
    return of(content);
  }

  addContent(newContent: IContent): Observable<IContent[]> {
    this.contentList.push(newContent);
    return of(this.contentList);
  }

  updateContent(updatedContent: IContent): Observable<IContent[]> {
    const index = this.contentList.findIndex(item => item.id === updatedContent.id);
    if (index !== -1) {
      this.contentList[index] = updatedContent;
    }
    return of(this.contentList);
  }

  removeContentById(id: number): Observable<IContent | undefined> {
    const index = this.contentList.findIndex(item => item.id === id);
    if (index !== -1) {
      const removedItem = this.contentList.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}
