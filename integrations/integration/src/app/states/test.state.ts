import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import {
  ActionCancelled,
  ActionErrored,
  ActionSuccessful,
} from '@ngxs-labs/action-lifecycle-hooks';
import { PromiseAction, PromiseActionWithoutHooks } from './test.actions';

export interface TestStateModel {
  test: string;
  error: string;
}

@State<TestStateModel>({
  name: 'test',
  defaults: {
    error: '',
    test: '',
  },
})
@Injectable()
export class TestState {
  @Action([PromiseAction, PromiseActionWithoutHooks], {
    cancelUncompleted: true,
  })
  async promiseAction(ctx: StateContext<TestStateModel>) {
    ctx.patchState({ test: 'executing promiseAction', error: '' });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) resolve();
        else reject('error');
      }, 1000);
    });
  }

  @Action(ActionSuccessful(PromiseAction))
  promiseActionSuccessful(ctx: StateContext<TestStateModel>) {
    ctx.patchState({ test: 'promiseActionSuccessful' });
  }

  @Action(ActionErrored(PromiseAction))
  promiseActionErrored(
    ctx: StateContext<TestStateModel>,
    { error }: { error: any }
  ) {
    ctx.patchState({ test: 'promiseActionErrored', error });
  }

  @Action(ActionCancelled(PromiseAction))
  promiseActionCancelled(ctx: StateContext<TestStateModel>) {
    ctx.patchState({ test: 'promiseActionCancelled' });
  }
}
