import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { NavComponent } from './nav/nav.component';
import { ThemeComponent } from './theme/theme.component';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoDatePipe } from '@jsverse/transloco-locale';

@Component({
  selector: 'app-root',
  host: { class: 'app-root' },
  imports: [DatePipe, RouterLink, RouterOutlet, TagModule, NavComponent, ThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected now = Date.now();
}
