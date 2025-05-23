import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'client',
        component: HomeComponent
    },

];
