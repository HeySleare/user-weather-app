import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule }        from '@angular/router';
import { routes }              from './app.routes';

import { AppComponent }        from './app.component';
import { UserListPage }        from './pages/user-list/user-list.page';
import { UserCardComponent }   from './components/user-card/user-card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    UserListPage,
    UserCardComponent
  ],
  declarations: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
