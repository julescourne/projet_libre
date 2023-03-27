import { Virtualemachine } from "../interface/virtualmachine";
import { MyAzureVirtualMachineImage } from "../interface/myAzureVirtualMachineImage";


const virtualMachines:Virtualemachine[] = [
    {
      userId: "123",
      vmId: "vm-001",
      vmName: "Web Server",
      region: "East US",
      imageDeBase: MyAzureVirtualMachineImage.UBUNTU_SERVER_18_04,
      userName: "admin",
      password: "Password123",
      ipAddress: "10.0.0.1",
      diskSize: "100GB",
      vmStatus: "Running"
    },
    {
      userId: "456",
      vmId: "vm-002",
      vmName: "Database Server",
      region: "West US",
      imageDeBase: MyAzureVirtualMachineImage.WINDOWS_SERVER_2016,
      userName: "dbadmin",
      password: "Secret123",
      ipAddress: "10.0.0.2",
      diskSize: "500GB",
      vmStatus: "Stopped"
    },
    {
      userId: "789",
      vmId: "vm-003",
      region: "East US",
      vmName: "Dev Machine",
      imageDeBase: MyAzureVirtualMachineImage.REDHAT_8,
      userName: "devuser",
      password: "DevPassword123",
      vmStatus: "Creating"
    },
    {
     userId: "1242",
     vmId: "vm-001",
     vmName: "Web Server",
     region: "East US",
     imageDeBase: MyAzureVirtualMachineImage.UBUNTU_SERVER_18_04,
     userName: "admin",
     password: "Password123",
     ipAddress: "10.0.0.1",
     diskSize: "100GB",
     vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }, 
    {
        userId: "arrra",
        vmId: "vm-001",
        vmName: "Web Server",
        region: "East US",
        imageDeBase: MyAzureVirtualMachineImage.DEBIAN_9,
        userName: "admin",
        password: "Password123",
        ipAddress: "10.0.0.1",
        diskSize: "100GB",
        vmStatus: "Running"
    }
   
  ];

  export default virtualMachines; 
  