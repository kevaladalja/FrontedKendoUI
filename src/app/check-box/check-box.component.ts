import { Component } from '@angular/core';
import { of, Observable } from 'rxjs'; 
import { CheckableSettings } from '@progress/kendo-angular-treeview';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  public checkedKeys: any[] = ["1"];

  public enableCheck = true;
  public checkChildren = true;
  public checkDisabledChildren = false;
  public checkParents = true;
  public checkOnClick = false;
  public checkMode: any = "multiple";
  public selectionMode: any = "single";

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: this.checkChildren,
      checkDisabledChildren: this.checkDisabledChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode,
      checkOnClick: this.checkOnClick,
    };
  }

  public data: any[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        {
          text: "Occasional Furniture",
          items: [
            {
              text: "Decor",
              items: [{ text: "Bed Linen" }, { text: "Curtains & Blinds" }],
            },
          ],
        },
      ],
    },
    { text: "Decor" },
    { text: "Outdoors" },
  ];

  public children = (dataItem: any): Observable<any[]> => of(dataItem.items);
  public hasChildren = (dataItem: any): boolean => !!dataItem.items;
}

