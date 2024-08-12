import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/chat/chat.component';
import { StartComponent } from './start/start.component';
import { AuthGuardService } from './authguard.guard';

const routes: Routes = [
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
  { path: '', component:  StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
