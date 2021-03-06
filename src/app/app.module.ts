import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {PostModule} from './post/post.module';
import {ResidentModule} from './resident/resident.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './utility/HttpErrorInterceptorService.service';
import {TokenInterceptor} from './utility/HttpErrorInterceptorService.service';
import {NeighborhoodModule} from './neighborhood/neighborhood.module';
import {LandingModule} from './landing/landing.module';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LayoutModule} from './home-layout/layout.module';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RegistrationModule} from './neighborhoodLayout/default/registration.module';
import {AccountSettingsModule} from './account-settings/account-settings.module';
import {NeighborhoodRegistrationModule} from './neighborhood-registration/neighborhood-registration.module';
import {VisibilityService} from "./shared/visibility-service.service";
import {LoginResgistrationModule} from './login-resgistration/login-resgistration.module';
import {ProfileRegistrationModule} from './profile-registration/profile-registration.module';
import {LocationRegistrationModule} from './location-registration/location-registration.module';
import {HomeModule} from "./home/home.module";
import {AgmCoreModule} from '@agm/core';
import {NeighborhoodLayoutModule} from './neighborhoodLayout/neighborhoodLayout.module';
import {LocationModule} from './location/location.module';
import {FavorModule} from './favor/favor.module';
import {DatePipe} from "@angular/common";
import {AdminModule} from "./admin/admin.module";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: LandingComponent},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
      preventDuplicates: true
    }),
    LandingModule,
    BrowserModule,
    BrowserAnimationsModule,
    PostModule,
    ResidentModule,
    NeighborhoodModule,
    LoginResgistrationModule,
    LoginModule,
    ProfileRegistrationModule,
    HttpClientModule,
    LayoutModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    NeighborhoodRegistrationModule,
    NeighborhoodLayoutModule,
    AccountSettingsModule,
    LocationRegistrationModule,
    LocationModule,
    HomeModule,
    AdminModule,

    FavorModule,


  ],
  bootstrap: [AppComponent],
  providers: [
    VisibilityService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {
}
