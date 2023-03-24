import { Component, Input } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { Virtualemachine } from 'src/app/interface/virtualmachine';
import {MyAzureVirtualMachineImage } from 'src/app/interface/myAzureVirtualMachineImage'
import { MyRegions } from 'src/app/interface/regions';
import {FormControl } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-server-modal',
  templateUrl: './create-server-modal.component.html',
  styleUrls: ['./create-server-modal.component.css']
})
export class CreateServerModalComponent {
  regionControl = new FormControl('');
  hide = true;
  form!: FormGroup ;
  @Input() selectedOption!: string;
  virtualMachine! : Virtualemachine ; 
  vmImages = Object.values(MyAzureVirtualMachineImage);
  regions = Object.values(MyRegions);

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
 

  constructor( private formBuilder : FormBuilder)
{ console.log(this.regions)}

  close(){}

  save(){}
}
