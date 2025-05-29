import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { TableComponent } from './toggle1/table/table.component';

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
