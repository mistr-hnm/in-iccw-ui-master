import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../../services/config';
import { SHARED_IMPORTS } from '../../shared/shared';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface PeriodicElement {
  name: string;
  pid: number;
  machine: number;
  caption: string;
}

@Component({
  selector: 'app-home',
  imports: [
    SHARED_IMPORTS,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit {

  constructor(private configService: ConfigService) { }

  displayedColumns: string[] = [ 'name', 'pid','machine', 'caption','action'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
   
  ngOnInit(): void {
    this.configService.loadMain().subscribe((data) => {
      console.log("ngOnInit", data);

      const ELEMENT = data.response.map((element) => {
        return { 
          name: element.Name, 
          pid: element?._id?.pid, 
          machine: element?._id?.machine, 
          caption: element?.Caption 
        };
      });

      this.dataSource.data = ELEMENT; // Assign data to dataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  onView(element : PeriodicElement){
    console.log("element",element);
    
  }
}
