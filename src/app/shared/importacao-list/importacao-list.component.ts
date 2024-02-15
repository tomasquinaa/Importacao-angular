import { Component, OnInit } from '@angular/core';
import { ImportaList } from 'src/app/module/importa-list';

// Services
import { ImportacaoListService } from 'src/app/services/importacao-list.service';

@Component({
  selector: 'app-importacao-list',
  templateUrl: './importacao-list.component.html',
  styleUrls: ['./importacao-list.component.css'],
})
export class ImportacaoListComponent implements OnInit {
  // public importaListComponent: Array<string> = [];

  public importaListComponent: Array<ImportaList> = [];

  constructor(private importacaoListService: ImportacaoListService) {}

  ngOnInit(): void {
    this.importacaoListService.importacaoListService().subscribe(
      (res) => (this.importaListComponent = res),
      (error) => error
    );

    this.importacaoListService.emitEvent.subscribe((res) =>
      alert(`Olha voce add => ${res}`)
    );
  }
}
