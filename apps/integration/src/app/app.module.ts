import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsActionLifecycleHooksModule } from '@ngxs-labs/action-lifecycle-hooks';
import { TestState } from './states/test.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([TestState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsActionLifecycleHooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
