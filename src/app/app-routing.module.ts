import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './containers/topic/topic.component';
import { HomeComponent } from './containers/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'topic/:id',
    component: TopicComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
