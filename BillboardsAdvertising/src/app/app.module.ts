import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserService} from './components/admin/user.service';
import { DeviceOwnerComponent } from './components/device-owner/device-owner.component';
import { HttpClientModule} from "@angular/common/http";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddUserComponent} from './components/admin/add-user.component';

const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'owner', component: DeviceOwnerComponent},
  {path: 'signIn', component: SignInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DeviceOwnerComponent,
    SignInComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
