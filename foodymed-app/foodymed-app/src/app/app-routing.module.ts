import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:"foodymed/menu",component:Form1Component},

  {path:"foodymed",children:[
    {path:"",
     children:[
       {path:"menu", component:Form1Component},
       {path:"menu2", component:Form2Component},
       {path:"",redirectTo:"menu",pathMatch:"full"}
     ]
   },
     {path:"",redirectTo:"foodymed",pathMatch:"full" }
 ]
},
{path:"",redirectTo:"foodymed",pathMatch:"full" },
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
