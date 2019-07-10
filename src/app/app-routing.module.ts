import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgoComponent } from './algo/algo.component';
import { HomeComponent } from './home/home.component';
import { DistanceComponent } from './distance/distance.component';
import { KnnComponent } from './knn/knn.component';
import { NnComponent } from './nn/nn.component';
import { RadiusComponent } from './radius/radius.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TspComponent } from './tsp/tsp.component';
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {path:'', redirectTo:'/Frontpage', pathMatch:'full'},
  {
    path:'Tsp',  
    component: TspComponent
  },
  {
    path:'Frontpage',  
    component: FrontpageComponent
  },
  {
  path: 'Algo',
  component: AlgoComponent
  },
  {
    path: 'Home',
    component: HomeComponent 
  },

{
  path: 'Distance',
  component: DistanceComponent
},
{
  path: 'Knn',
  component: KnnComponent
},
{
  path: 'Nn',
  component: NnComponent
},
{
  path: 'Radius',
  component: RadiusComponent
},
{
  path:'Calculator',
  component: CalculatorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
