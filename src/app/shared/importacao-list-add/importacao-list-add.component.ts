import { Component, OnInit } from '@angular/core';
import { ImportacaoListService } from 'src/app/services/importacao-list.service';

@Component({
  selector: 'app-importacao-list-add',
  templateUrl: './importacao-list-add.component.html',
  styleUrls: ['./importacao-list-add.component.css'],
})
export class ImportacaoListAddComponent implements OnInit {
  constructor(private importaListService: ImportacaoListService) {}

  ngOnInit(): void {}

  public listAddItem(value: string) {
    return this.importaListService.importaListAdd(value).subscribe(
      (res) => res,
      (error) => error
    );
  }
}
