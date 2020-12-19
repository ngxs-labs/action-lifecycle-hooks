import { ActionType, getActionTypeFromInstance } from '@ngxs/store';

export type Hooks = 'Successful' | 'Errored' | 'Canceled';
export const actionLifecycleHooks: { [key: string]: Hooks[] } = {};

export function addToLifecycleHooks(actionType: ActionType, hook: Hooks) {
  if (!actionLifecycleHooks[getActionTypeFromInstance(actionType)]) {
    actionLifecycleHooks[getActionTypeFromInstance(actionType)] = [hook];
  } else {
    actionLifecycleHooks[getActionTypeFromInstance(actionType)] = [
      ...actionLifecycleHooks[getActionTypeFromInstance(actionType)],
      hook,
    ];
  }
}
