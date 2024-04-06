import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { AddNewComponent } from './pages/add-new/add-new.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
    },
    {
        path: 'items',
        component: ItemsComponent
    },
    {
        path: 'items/additem',
        component: AddNewComponent
    }

];
