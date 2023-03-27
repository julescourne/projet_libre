import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Virtualemachine } from 'src/app/interface/virtualmachine';
import virtualMachines from 'src/app/constant/virtual-machine.mokup'
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

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

  ngOnInit() {
    //TODO use virtual machine service then get all the real data then the mock up once
    this.dataSource.data = virtualMachines ; 
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
