import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDiplayComponent } from './components/test-diplay/test-diplay.component';


const routes: Routes = [
  { path: 'test-diplay', component: TestDiplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
