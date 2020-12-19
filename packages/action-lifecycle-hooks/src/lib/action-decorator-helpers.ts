import { ActionType, getActionTypeFromInstance } from '@ngxs/store';
import { addToLifecycleHooks } from './utils';

export type Successful<A> = { action: A };
export type Errored<A> = { action: A; error: any };
export type Cancelled<A> = { action: A };

export function ActionSuccessful(actionType: ActionType) {
  addToLifecycleHooks(actionType, 'Successful');
  return class {
    static readonly type = `${getActionTypeFromInstance(
      actionType
    )} Successful`;
    constructor(public action: any) {}
  };
}

export function ActionErrored(actionType: ActionType) {
  addToLifecycleHooks(actionType, 'Errored');
  return class {
    static readonly type = `${getActionTypeFromInstance(actionType)} Errored`;
    constructor(public action: any, public error: any) {}
  };
}

export function ActionCancelled(actionType: ActionType) {
  addToLifecycleHooks(actionType, 'Canceled');
  return class {
    static readonly type = `${getActionTypeFromInstance(actionType)} Canceled`;
    constructor(public action: any) {}
  };
}
