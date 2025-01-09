import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Crud2Component } from './crud2/crud2.component';
import { Crud3Component } from './crud3/crud3.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { TranslateComponent } from './translate/translate.component';

export const routes: Routes = [
    {path:'',redirectTo:'crud2',pathMatch:'full'},
    {path:'form',component:FormComponent},
    {path:'crud2',component:Crud2Component},
    {path:'crud3',component:Crud3Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'ngrx',component:NgrxComponent},
    {path:'translate',component:TranslateComponent},
];
