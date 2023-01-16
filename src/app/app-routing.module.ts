import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Informacion' },
  { path: 'sobre', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'Informacion', component: InfoComponent, canActivate: [RandomGuard] },
  {
    path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'experiencia', component: ExperienciaComponent },
      { path: 'curriculum', component: CurriculumComponent }
    ]
  },
  { path: '**', redirectTo: 'contacto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 * localhost:4200/empleados/122
 * localhost:4200/empleados/456
 * localhost:4200/empleados/324
 */
