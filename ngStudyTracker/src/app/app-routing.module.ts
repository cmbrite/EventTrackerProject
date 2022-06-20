import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { StudyListComponent } from './components/study-list/study-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'study', component: StudyListComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
