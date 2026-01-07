import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  PromiseAction,
  PromiseActionWithoutHooks,
} from './states/test.actions';
import { TODOS_STATE_TOKEN } from './states/test.state';

@Component({
    selector: 'action-lifecycle-hooks-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  testState$ = this.store.select(TODOS_STATE_TOKEN);

  constructor(private store: Store) {}

  dispatchPromiseAction() {
    this.store.dispatch(new PromiseAction());
  }

  dispatchPromiseActionWithoutHooks() {
    this.store.dispatch(new PromiseActionWithoutHooks());
  }
}
