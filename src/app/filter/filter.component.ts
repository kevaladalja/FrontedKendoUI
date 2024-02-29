import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public flatItems = [
    { id: 1, name: "Andrew Fuller", reportsTo: null },
    { id: 2, name: "Nancy Davolio", reportsTo: 1 },
    { id: 3, name: "Janet Leverling", reportsTo: 1 },
    { id: 4, name: "Margaret Peacock", reportsTo: 1 },
    { id: 5, name: "Steven Buchanan", reportsTo: 1 },
    { id: 6, name: "Laura Callahan", reportsTo: 1 },
    { id: 7, name: "Michael Suyama", reportsTo: 5 },
    { id: 8, name: "Robert King", reportsTo: 5 },
    { id: 9, name: "Anne Dodsworth", reportsTo: 5 },
    { id: 10, name: "Michael King", reportsTo: 7 },
    { id: 11, name: "Nige Davolio", reportsTo: 7 },
    { id: 12, name: "Robert Dodsworth", reportsTo: 7 },
    { id: 13, name: "Steven Fuller", reportsTo: null },
    { id: 14, name: "Margaret Davolio", reportsTo: 13 },
    { id: 15, name: "Nige Fuller", reportsTo: 13 },
    { id: 16, name: "Steven Dodsworth", reportsTo: 13 },
    { id: 17, name: "Robert Peacock", reportsTo: 13 },
    { id: 18, name: "Margaret King", reportsTo: 13 },
    { id: 19, name: "Nige Leverling", reportsTo: 15 },
    { id: 20, name: "Nancy White", reportsTo: 15 },
    { id: 21, name: "Robert Callahan", reportsTo: 15 },
    { id: 22, name: "Nige Peacock", reportsTo: 17 },
    { id: 23, name: "Janet Peacock", reportsTo: 17 },
    { id: 24, name: "Anne Callahan", reportsTo: 17 },
  ];

  public always = () => true;
}
