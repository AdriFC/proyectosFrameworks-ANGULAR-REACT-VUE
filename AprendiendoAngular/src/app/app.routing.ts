//Importar los módulos del router de Angular
import { ModuleWithProviders } from '@angular/core'; //crear un módulo con las rutas para cargar en el framework
import { Routes, RouterModule } from '@angular/router'; //clases para generar objectos de rutas


//Importar componentes a los que quiero hacer una página exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';


//Array de rutas (configuración de rutas que voy a crear)
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/articulo/:id', component: ArticleComponent},
    {path: 'blog/crear', component: ArticleNewComponent},
    {path: 'blog/editar/:id', component: ArticleEditComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent}, //Parámetros opcionales
    {path: '**', component: ErrorComponent} //Ruta error tiene que ser la última para que funcionen las demás
];

//Exportar el módulo de rutas
export const appRoutingProviders: any[] = []; //Estableces el router como servicio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //Cargar toda la configuración de rutas pasándole el appRoutes

