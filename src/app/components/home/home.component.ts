import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateServerModalComponent } from '../create-server-modal/create-server-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private matDialogService: MatDialog){}
  opendialog(){
    this.matDialogService.open( CreateServerModalComponent, {
      width : '40%'
    })
  }


}
