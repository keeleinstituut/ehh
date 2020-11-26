import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './containers/topic/topic.component';
import { HomeComponent } from './containers/home/home.component';
import { ExerciseComponent } from './containers/exercise/exercise.component';
import { ExerciseSummaryComponent } from './containers/exercise/components/exercise-summary/exercise-summary.component';

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
    path: 'topic/:topicId/exercise',
    children: [
      {
        path: ':exerciseId',
        component: ExerciseComponent,
      },
      {
        path: ':exerciseId/summary',
        component: ExerciseSummaryComponent,
      },
    ]
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
