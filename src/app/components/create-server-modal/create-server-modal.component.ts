import { Component, Input} from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
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
    vmName : new FormControl('', [Validators.required]),  

    region:new FormControl('', [Validators.required]),
  
    imageDeBase: new FormControl('', [Validators.required]),
  
    userName:new FormControl('', [Validators.required]),
  
    password: new FormControl('', [Validators.required]),
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
