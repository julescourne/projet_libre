import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Virtualemachine } from 'src/app/interface/virtualmachine';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit , AfterViewInit{
  public displayedColumns = ['vmName', 'region', 'imageDeBase', 'userName','ipAddress','diskSize','vmStatus', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Virtualemachine>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private virtuaMachineService : VirtualMachineService){}

  ngOnInit() {
    this.virtuaMachineService.getAllUserVm().subscribe({
      next: data => this.dataSource.data = data,
      error : err => console.error("something went wrong "+ err),
      complete: ()=> console.log("retieving the data done")
    })
     
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }  

  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}
