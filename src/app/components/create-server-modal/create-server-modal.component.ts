import { Component, Input} from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Virtualemachine } from 'src/app/interface/virtualmachine';
import {MyAzureVirtualMachineImage } from 'src/app/interface/myAzureVirtualMachineImage'
import { MyRegions } from 'src/app/interface/regions';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-server-modal',
  templateUrl: './create-server-modal.component.html',
  styleUrls: ['./create-server-modal.component.css']
})
export class CreateServerModalComponent {

  form = new FormGroup(
    {
    vmName : new FormControl(null),  

    region:new FormControl(null),
  
    imageDeBase: new FormControl(null),
  
    userName:new FormControl(null),
  
    password: new FormControl(null),
  });

  hide = true;

  @Input() selectedOption!: string;
  vmImages = Object.values(MyAzureVirtualMachineImage);
  regions = Object.values(MyRegions);
  
  constructor( private formBuilder : FormBuilder)
{ console.log(this.regions)}

  close(){}

  save(){

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
