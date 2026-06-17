import {
  Injectable, signal, computed, inject,
  PLATFORM_ID, REQUEST, TransferState, makeStateKey,
} from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

const DEVICE_KEY: any = makeStateKey('device.kind');
const MOBILE_UA: any = /Mobi|Android|iPhone|iPod|Windows Phone|webOS/i;
const MOBILE_QUERY: any = '(max-width: 767.98px)';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  platformId: any = inject(PLATFORM_ID);
  request: any = inject(REQUEST, { optional: true });
  transferState: any = inject(TransferState);

  _kind: any = signal(this.resolveInitial());
  kind: any = this._kind.asReadonly();

  isMobile: any = computed(() => this._kind() === 'mobile');
  isDesktop: any = computed(() => this._kind() === 'desktop');

  constructor() {
    // Servidor: persiste a decisão para o cliente hidratar idêntico.
    if (isPlatformServer(this.platformId)) {
      this.transferState.set(DEVICE_KEY, this._kind());
    }
  }

  resolveInitial(): any {
    // 1) Cliente na hidratação: usa o que o servidor decidiu.
    let transferred: any = this.transferState.get(DEVICE_KEY, null);
    if (transferred) return transferred;

    // 2) Servidor: lê o User-Agent da Request nativa.
    if (isPlatformServer(this.platformId) && this.request) {
      let ua: any = this.request.headers.get('user-agent') ?? '';
      return MOBILE_UA.test(ua) ? 'mobile' : 'desktop';
    }

    // 3) Cliente sem SSR: decide pelo viewport do navegador.
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop';
    }

    return 'desktop';
  }
}
