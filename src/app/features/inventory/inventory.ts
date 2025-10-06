import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../../services/config';
import { SHARED_IMPORTS } from '../../shared/shared'; 
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-inventory',
  imports: [
    SHARED_IMPORTS,
  ],
  templateUrl: './inventory.html',
  styleUrl: './inventory.css'
})

export class Inventory implements OnInit {

  displayedColumns: string[] = [ 'Name',"Profile", 'Version','action'];
  dataSource = new MatTableDataSource<any>([]);
  
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  constructor(private configService: ConfigService) { }
   
  ngOnInit(): void {
    this.configService.loadConfig().subscribe((data :any) => {
      console.log("ngOnInit", data);
      const ELEMENT = data.response.Aggregates.map((element :any) => {
        return { 
          name: element?.Name, 
          profile: element?.Profile || "--",  
          version: element?.Version || "--",  
        };
      });

      this.dataSource.data = ELEMENT; // Assign data to dataSource
      this.dataSource.paginator = this.paginator;
    });
  }

}
