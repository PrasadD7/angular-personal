import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  constructor() {}

  getBarData(): any {
    var data: any = [
      {
        Year: 2006,
        DepartmentA: 788,
        DepartmentB: 877
      },
      {
        Year: 2007,
        DepartmentA: 230,
        DepartmentB: 897
      },
      {
        Year: 2008,
        DepartmentA: 1766,
        DepartmentB: 981
      },
      {
        Year: 2009,
        DepartmentA: 1066,
        DepartmentB: 281
      },
      {
        Year: 2010,
        DepartmentA: 1200,
        DepartmentB: 435
      },
      {
        Year: 2011,
        DepartmentA: 166,
        DepartmentB: 281
      }
    ];
    return data;
  }

  //  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //  public doughnutChartData = [120, 150, 180, 90];

  getDoughnutChartData(): any {
    var data = [
      { Quarter: 1, Profit: 899 },
      { Quarter: 2, Profit: 399 },
      { Quarter: 3, Profit: 499 },
      { Quarter: 4, Profit: 839 }
    ];
    return data;
  }
}
