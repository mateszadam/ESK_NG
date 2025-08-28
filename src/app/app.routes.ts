import { Routes } from '@angular/router';
import { CsapatComponent } from './csapat/csapat.component';
import { DokumentumokComponent } from './dokumentumok/dokumentumok.component';
import { IndexComponent } from './index/index.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { MeccsekComponent } from './meccsek/meccsek.component';
import { TamogatokComponent } from './tamogatok/tamogatok.component';
import { TortenetComponent } from './tortenet/tortenet.component';
import { VezetosegComponent } from './vezetoseg/vezetoseg.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'csapat', component: CsapatComponent },
  { path: 'dokumentumok', component: DokumentumokComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'meccsek', component: MeccsekComponent },
  { path: 'tamogatok', component: TamogatokComponent },
  { path: 'tortenet', component: TortenetComponent },
  { path: 'vezetoseg', component: VezetosegComponent },
  { path: '**', redirectTo: '' },
];
