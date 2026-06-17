import { inject } from '@angular/core';
import {DeviceService} from './core/device.service';

export const isMobileGuard: any = () => {
  let device: any = inject(DeviceService);
  return device.isMobile();
};

export const isDesktopGuard: any = () => {
  let device: any = inject(DeviceService);
  return device.isDesktop();
};
