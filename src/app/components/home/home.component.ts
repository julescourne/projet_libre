import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateServerModalComponent } from '../create-server-modal/create-server-modal.component';
import {AcceuilComponent} from "../acceuil/acceuil.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private matDialogService: MatDialog, private router: Router){}
  opendialog(){
    this.matDialogService.open( CreateServerModalComponent, {
      width : '40%'
    })
  }

  goToAcceuil(){
    // this.acceuil.toggleLogin()
    this.router.navigateByUrl('/acceuil')
  }


}
