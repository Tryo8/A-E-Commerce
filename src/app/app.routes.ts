import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { registerGuard } from './core/guards/register.guard';
import { authRedirectGuard } from './core/guards/auth-redirect.guard';
import { myDetailsResolver } from './core/my-details.resolver';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./layout/auth-layout/auth-layout.component').then((c) => c.AuthLayoutComponent),
        title: 'Auth',
        children: [
            {
                path: '', redirectTo: 'login', pathMatch: 'full'
            },
            {
                path: 'login', loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
                title: 'Login',
                canActivate: [authRedirectGuard]
            }, 
            {
                path: 'register', loadComponent: () => import('./pages/register/register.component').then((c) => c.RegisterComponent),
                title: 'Register',
                canActivate: [authRedirectGuard],
                canDeactivate: [registerGuard]
            }
        ]
    },
    {
        path: 'user', loadComponent: () => import('./layout/user-layout/user-layout.component').then((c) => c.UserLayoutComponent),
        title: 'User',
        // canActivate: [ authGuard ],
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full',title: 'Home'
            },
            {
                path: 'home', loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
                title: 'Home',
            },
            {
                path: 'profile', loadComponent: () => import('./pages/user-profile/user-profile.component').then((c) => c.UserProfileComponent),
                title: 'Profile',
            },
            {
                path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then((c) => c.CartComponent),
                title: 'Cart',
            },
            {
                path: 'cart/:id', loadComponent: () => import('./pages/cart/cart.component').then((c) => c.CartComponent),
                title: 'Cart',
            },
            {
                path: 'products', loadComponent: () => import('./pages/products/products.component').then((c) => c.ProductsComponent),
                title: 'Products',
            },
            {
                path: 'details/:id', loadComponent: () => import('./pages/details/details.component').then((c) => c.DetailsComponent),
                title: 'Details',
                resolve: { details: myDetailsResolver}
            },
            {
                path: 'category', loadComponent: () => import('./pages/category/category.component').then((c) => c.CategoryComponent),
                title: 'Category',
            },
            {
                path: 'specificCategory/:type', loadComponent: () => import('./pages/specific-category/specific-category.component').then((c) => c.SpecificCategoryComponent),
                title: 'S-Category',
            },
            {
                path: 'faq', loadComponent: () => import('./pages/fqa/fqa.component').then((c) => c.FQAComponent),
                title: 'FQA',
            }
        ]
    },
    {
        path: '**', component: PageNotFoundComponent,
        title: '404'
    }

];
