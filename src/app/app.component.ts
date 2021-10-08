import { TreeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TreeGridTest';
  public data: Object[] = [];
  // @ViewChild('tree') treeGridElement: TreeGridComponent;
  // sampleData: DataManager;
  // public pageSettings: PageSettingsModel;
  // public sortSettings: SortSettingsModel;
  // public selectionOption: SelectionSettingsModel;
  // public editOption: EditSettingsModel;
  // sortData: Set<string> = new Set([]);
  // toolBar: ToolbarItems[];

  ngOnInit() {
    this.data = TreeData;
  }

  // this.pageSettings = { pageSize: 20 };
  // this.sortSettings = {
  //   columns: [
  //     { field: 'index', direction: 'Ascending' },
  //     { field: 'name', direction: 'Ascending' },
  //     { field: 'company', direction: 'Ascending' },
  //     { field: 'email', direction: 'Ascending' },
  //   ],
  // };

  // const a = new DataManager({
  //   url: 'http://localhost:3000/add',
  //   adaptor: new UrlAdaptor(),
  // });

  // a.executeQuery(new Query().take(8)).then((e: any) => {
  //   this.sampleData = e.result;
  //   console.log('data====>', e.result);
  // });

  // this.editOption = {
  //     allowAdding: true,
  //     allowDeleting: true,
  //     allowEditing: true,
  //     mode: 'Row',
  //     newRowPosition: 'Below',
  //     showConfirmDialog: true,
  //   };
  //   this.toolBar = ['Add', 'Edit', 'Update', 'Cancel'];
  // }

  // setColumnSort(event: any, fieldName: string) {
  //   if (event.target.checked) {
  //     this.treeGridElement.sortByColumn(fieldName, 'Ascending', true);
  //     this.sortData.add(fieldName);
  //   } else {
  //     this.treeGridElement.grid.removeSortColumn(fieldName);
  //     this.sortData.delete(fieldName);
  //   }

  //   //this.treeGridElement.sortByColumn('company', 'Ascending', true);
  //   console.log(this.sortSettings);
  //   console.log(this.treeGridElement);
  // }

  // onChange(event) {
  //   console.log(event);
  //   console.log(this.sampleData);
  // }

  // onsave(event) {
  //   console.log(event);
  // }
}
