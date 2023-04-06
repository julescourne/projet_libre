import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Virtualemachine } from '../interface/virtualmachine';
import appConstant from '../constant/app.constant';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {
  BACKEND_URL = `${appConstant.BACKEND}vm`;

  constructor(private http : HttpClient) { }
  getAllVm()
  { 
    return this.http.get<Virtualemachine[]>(`${this.BACKEND_URL}/all`) 
  }
  getAllUserVm()
  { 
    const username = localStorage.getItem('USERNAME');
    return this.http.get<Virtualemachine[]>(`${this.BACKEND_URL}/user/all?username=${username}`);
  }
  addVm(virtualmachine : Virtualemachine)
  {
    console.log(virtualmachine);
    return this.http.post<any>(`${this.BACKEND_URL}/create`,virtualmachine)
  }
  startVm(vmId : string)
  {
    
  }
}
