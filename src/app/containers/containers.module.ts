import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ContainersFacadeService } from './containers.facade.service';

const containers = [
  HomeComponent
];

const services = [
  ContainersFacadeService
]

@NgModule({
  declarations: [
    ...containers
  ],
  providers: [...services],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [...containers]
})
export class ContainersModule { }
