import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './shared/header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from './pipes/date.pipe';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    TeamsComponent,
    LoaderComponent,
    AutocompleteComponent,
    HeaderComponent,
    DatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
