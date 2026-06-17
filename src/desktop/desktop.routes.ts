import { AppDesktop } from './app-desktop/app-desktop';

// Esta constante TEM que ser exportada com este exato nome
export const DESKTOP_ROUTES: any = [
  {
    path: '',
    component: AppDesktop,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./app-desktop/modules/auth/login-desktop/login-desktop').then((c: any) => c.LoginDesktop)
      }
    ]
  }
];
