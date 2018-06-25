import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular Material 6.2.1
import { MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatCardModule,
  MatListModule} from '@angular/material';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductComponent } from './product/product.component';
import { ActivityChartComponent } from './activity-chart/activity-chart.component';

// Service
import { ActivityService } from './services/activity.service';
import { WebsitesComponent } from './websites/websites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OrdersComponent,
    ProductComponent,
    ActivityChartComponent,
    WebsitesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      //  { path: 'webView',
      //    component: AppComponent,
      // children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Orders', component: OrdersComponent },
      { path: 'Product', component: ProductComponent }
      // ]
      // }
    ])
  ],
  providers: [
    ActivityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
