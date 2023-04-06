import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Virtualemachine } from 'src/app/interface/virtualmachine';
import {MyAzureVirtualMachineImage } from 'src/app/interface/myAzureVirtualMachineImage'
import { MyRegions } from 'src/app/interface/regions';
import {FormControl } from '@angular/forms';
import {AcceuilComponent} from "../acceuil/acceuil.component";
import virtualMachines from 'src/app/constant/virtual-machine.mokup';
import { VirtualMachineService } from 'src/app/services/virtual-machine.service';

@Component({
  selector: 'app-create-server-modal',
  templateUrl: './create-server-modal.component.html',
  styleUrls: ['./create-server-modal.component.css']
})
export class CreateServerModalComponent {

  form = new FormGroup(
    {
    vmName : new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),

    region:new FormControl('',[Validators.required]),

    imageDeBase: new FormControl('',[Validators.required]),

    userName:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),

    password: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
  });

  hide = true;
  @Input() parent: any;

  @Input() selectedOption!: string;
  vmImages = Object.values(MyAzureVirtualMachineImage);
  regions = Object.values(MyRegions);

  @Output() save$ = new EventEmitter();
  @Output() cancel$ = new EventEmitter(); 
  
  constructor( private formBuilder : FormBuilder, private injector: Injector,private virtualMahineService : VirtualMachineService)
{ console.log(this.regions)}

  getParent() {
    return this.injector.get<any>(AcceuilComponent);
  }
  close(){
    this.close();
  }

  save(){

    if (this.form.valid) {
      const username = localStorage.getItem("USERNAME");
      const vm = {...this.form.value, userId:username} as Virtualemachine;
      //this.save$.emit(vm);
      this.virtualMahineService.addVm(vm).subscribe((val)=>console.log(val))
      this.close()
    }
  }
}
