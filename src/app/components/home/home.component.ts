import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateServerModalComponent } from '../create-server-modal/create-server-modal.component';
import {AcceuilComponent} from "../acceuil/acceuil.component";
import {Router} from "@angular/router";
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';
import virtualMachines from 'src/app/constant/virtual-machine.mokup';
import { Virtualemachine } from 'src/app/interface/virtualmachine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private matDialogService: MatDialog, private router: Router, private virtualMahineService : VirtualMachineService){}
  opendialog(){
   const dialog =  this.matDialogService.open( CreateServerModalComponent, {
      width : '40%'
    });
    dialog.componentInstance.save$.subscribe( (vm: Virtualemachine) =>{
      this.virtualMahineService.addVm(vm).subscribe((val)=>console.log(val)),
      this.matDialogService.closeAll()
    } );
    dialog.componentInstance.cancel$.subscribe(()=>{this.matDialogService.closeAll()})
  }

  goToAcceuil(){
    // this.acceuil.toggleLogin()
    this.router.navigateByUrl('/acceuil')
  }


}
