export interface Virtualemachine {
  userId?: string;

  vmId?: string;

  vmName: string;

  region?: string;

  imageDeBase: MyAzureVirtualMachineImage;

  userName: string;

  password: string;

  ipAddress?: string;

  diskSize?: string;

  vmStatus?: string;
}

