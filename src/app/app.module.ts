import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AlgoComponent } from './algo/algo.component';
import { DistanceComponent } from './distance/distance.component';
import { KnnComponent } from './knn/knn.component';
import { NnComponent } from './nn/nn.component';
import { RadiusComponent } from './radius/radius.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { TspComponent } from './tsp/tsp.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { HttpClientModule } from  '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AlgoComponent,
    DistanceComponent,
    KnnComponent,
    NnComponent,
    RadiusComponent,
    FrontpageComponent,
    TspComponent,
    CalculatorComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
