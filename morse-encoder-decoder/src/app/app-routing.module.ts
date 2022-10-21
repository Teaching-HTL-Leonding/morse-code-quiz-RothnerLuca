import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChooseComponent } from './choose/choose.component';
import { DecoderComponent } from './decoder/decoder.component';
import { EncoderComponent } from './encoder/encoder.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:  ChooseComponent},
  { path: 'encoder', component: EncoderComponent },
  { path: 'decoder', component: DecoderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
