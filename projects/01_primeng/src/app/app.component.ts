import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { NavComponent } from './nav/nav.component';
import { ThemeComponent } from './theme/theme.component';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoDatePipe } from '@jsverse/transloco-locale';
import { SelectLangComponent } from "../../../02_transloco/src/app/select-lang/select-lang.component";

@Component({
  selector: 'app-root',
  host: { class: 'app-root' },
  imports: [DatePipe, RouterLink, RouterOutlet, TagModule, NavComponent, ThemeComponent, TranslocoDirective, TranslocoDatePipe, SelectLangComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected now = Date.now();
}
