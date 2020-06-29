import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{path: 'register', component: RegisterComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);