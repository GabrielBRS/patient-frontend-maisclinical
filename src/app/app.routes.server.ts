import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },        // landing → SEO, estática
  // { path: 'blog/**', renderMode: RenderMode.Prerender },  // descomenta quando tiver blog
  { path: 'home', renderMode: RenderMode.Server },        // app logado → adaptação por dispositivo
  { path: '**', renderMode: RenderMode.Server },          // curinga por último, sempre
];
