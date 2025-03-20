import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoDatePipe } from '@jsverse/transloco-locale';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        //return this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`);
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}
