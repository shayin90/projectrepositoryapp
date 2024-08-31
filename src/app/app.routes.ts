import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
 {path:'header',component:HeaderComponent,title:'Header'},
 {path:'',redirectTo:'header', pathMatch :'full'}
];
