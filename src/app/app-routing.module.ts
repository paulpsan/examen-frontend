import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: "full"
  },
  {
    path: "inicio",
    loadChildren: "./pages/inicio/inicio.module#InicioModule"
  },
  {
    path: "usuarios",
    loadChildren: "./pages/usuarios/usuarios.module#UsuariosModule",
  },
  {
    path: "**",
    redirectTo: "inicio",
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
