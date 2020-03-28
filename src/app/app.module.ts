import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UserService } from './_services';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { VerifyTopComponent } from './verify-top/verify-top.component';

import { FormsModule } from '@angular/forms';
import { BookingPlanComponent } from './booking-plan/booking-plan.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        VerifyTopComponent,
        BookingPlanComponent,
        BookingConfirmationComponent,
        BookingPaymentComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }