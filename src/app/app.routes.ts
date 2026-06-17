import { isDesktopGuard, isMobileGuard } from './device.guard';

export const routes: any = [
  {
    path: '',
    canMatch: [isMobileGuard],
    // Aponta exatamente para o arquivo mobile.routes.ts que criamos acima
    loadChildren: () => import('../mobile/mobile.routes').then((m: any) => m.MOBILE_ROUTES)
  },
  {
    path: '',
    canMatch: [isDesktopGuard],
    // Aponta exatamente para o arquivo desktop.routes.ts que criamos acima
    loadChildren: () => import('../desktop/desktop.routes').then((m: any) => m.DESKTOP_ROUTES)
  }
];
