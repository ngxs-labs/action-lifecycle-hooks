import { Injectable } from '@angular/core';
import { State, Actions, Store, ofActionCompleted, getActionTypeFromInstance } from '@ngxs/store';
import { asapScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
import { ActionCancelled, ActionErrored, ActionSuccessful } from './action-decorator-helpers';
import { actionLifecycleHooks } from './utils';

@State<any>({
  name: 'NgxsActionLifecycleHooksState',
})
@Injectable()
export class NgxsActionLifecycleHooksState {
  constructor(private actions: Actions, private store: Store) {
    const arr = Object.keys(actionLifecycleHooks).map((key) => ({ type: key }));
    this.actions.pipe(ofActionCompleted(...arr), observeOn(asapScheduler)).subscribe((actionCompletion) => {
      const actionTypeOk =  getActionTypeFromInstance(actionCompletion.action) || ''
      if (
        actionCompletion.result.successful &&
        actionLifecycleHooks[actionTypeOk].includes('Successful')
      ) {
        const ActionSuccessfulClass = ActionSuccessful(actionCompletion.action);
        this.store.dispatch(new ActionSuccessfulClass(actionCompletion.action));
      }
      if (
        actionCompletion.result.error &&
        actionLifecycleHooks[actionTypeOk].includes('Errored')
      ) {
        const ActionErroredClass = ActionErrored(actionCompletion.action);
        this.store.dispatch(new ActionErroredClass(actionCompletion.action, actionCompletion.result.error));
      }
      if (
        actionCompletion.result.canceled &&
        actionLifecycleHooks[actionTypeOk].includes('Canceled')
      ) {
        const ActionCancelledClass = ActionCancelled(actionCompletion.action);
        this.store.dispatch(new ActionCancelledClass(actionCompletion.action));
      }
    });
  }
}
