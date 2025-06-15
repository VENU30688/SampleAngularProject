import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
// import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PerminentjobsComponent } from './components/perminentjobs/perminentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { ManagedVideosComponent } from './components/managed-videos/managed-videos.component';
import { teacherGuard } from './guards/teacher.guard';

export const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'aboutus', component:AboutusComponent},
{path:'careers', component:CareersComponent,
    children:[
        {path:'parminent', component:PerminentjobsComponent, canActivate:[teacherGuard]},
        {path:'contract', component:ContractjobsComponent, canActivate:[teacherGuard]},
    ]
},
{
    path:'users', 
    loadComponent:()=>
        import('./components/users/users.component').then((x)=>x.UsersComponent)
    
},
{path:'userdetails/:id', component:UserdetailsComponent},
{path:'products', component:ProductsComponent},
{
    path:'videos', 
    component:ManagedVideosComponent,
    canActivate:[teacherGuard]
},
{path:'productdetails', component:ProductdetailsComponent},
{path:'notfound', component:NotfoundComponent},
{path:'', component:HomeComponent},
{path:'**', component:NotfoundComponent},
];
