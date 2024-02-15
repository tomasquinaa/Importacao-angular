import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImportaList } from '../module/importa-list';

@Injectable({
  providedIn: 'root',
})
export class ImportacaoListService {
  public emitEvent = new EventEmitter();
  private listVariavelService: Array<string> = ['X Bacon', 'Feijao', 'Ovo'];

  private url: string = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {}

  // public importacaoListService() {
  //   return this.listVariavelService;
  // }

  public importacaoListService(): Observable<Array<ImportaList>> {
    return this.httpClient
      .get<Array<ImportaList>>(`${this.url}/agendamentos`)
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  // public importaListAdd(value: string) {
  //   this.importaListAlert(value);
  //   return this.listVariavelService.push(value);
  // }

  public importaListAdd(value: string): Observable<Array<ImportaList>> {
    return this.httpClient
      .post<Array<ImportaList>>(`${this.url}/posts`, { title: value })
      .pipe(
        (res) => res,
        (error) => error
      );
  }

  public importaListAlert(value: ImportaList) {
    return this.emitEvent.emit(value);
  }
}
