import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    // Fallback global — cada página pública sobrescreve com o seu próprio.
    this.title.setTitle('MaisClinical — Sua assistente de saúde com IA');
    this.meta.updateTag({
      name: 'description',
      content: 'Tire dúvidas sobre sintomas, exames e medicamentos com a Sofia, e organize seu histórico de saúde num só lugar.',
    });
    this.meta.updateTag({ property: 'og:title', content: 'MaisClinical' });
    this.meta.updateTag({ property: 'og:description', content: 'Sua assistente de saúde com inteligência artificial.' });
    // SEM robots aqui. O robots vai por página: index nas públicas, noindex nas logadas.
  }
}
