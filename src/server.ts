import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

// Aponta para a pasta correta gerada pelo build
const browserDistFolder: any = join(import.meta.dirname, '../desktop');

const app: any = express();
const angularApp: any = new AngularNodeAppEngine();

/**
 * Serve static files from /desktop
 * Este bloco deve vir sempre antes do motor de renderização,
 * para que imagens, CSS e JS sejam entregues rapidamente sem passar pelo Angular.
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 * MOTOR DE DECISÃO DE DISPOSITIVO (USER-AGENT) INTEGRADO.
 */
app.use((req: any, res: any, next: any) => {
  // Lê o cabeçalho HTTP para descobrir o dispositivo do paciente/usuário
  let userAgent: any = req.headers['user-agent'] || '';
  let isMobile: any = /mobile|android|iphone|ipad|phone/i.test(userAgent);

  // Injeta a decisão dinamicamente nos providers do Angular antes de renderizar
  angularApp
    .handle(req, {
      providers: [
        { provide: 'IS_MOBILE_SERVER_TOKEN', useValue: isMobile }
      ]
    })
    .then((response: any) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  let port: any = process.env['PORT'] || 4000;

  app.listen(port, (error: any) => {
    if (error) {
      throw error;
    }
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler: any = createNodeRequestHandler(app);
