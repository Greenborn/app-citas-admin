import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Router }    from '@angular/router';

import { HomePage  }            from './pages/home/home';
import { LoginPage  }           from './pages/auth/login/login.page';


import { AuthenticationGuard  } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '',              component: LoginPage },
  { path: 'login',         component: LoginPage },
  { path: 'home',          component: HomePage            , canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
