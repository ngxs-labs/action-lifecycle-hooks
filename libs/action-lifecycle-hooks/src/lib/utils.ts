import { ActionType, getActionTypeFromInstance } from '@ngxs/store';

export type Hooks = 'Successful' | 'Errored' | 'Canceled';
export const actionLifecycleHooks: { [key: string]: Hooks[] } = {};

export function addToLifecycleHooks(actionType: ActionType, hook: Hooks) {
  const actionTypeOk =  getActionTypeFromInstance(actionType) || ''
  if (!actionLifecycleHooks[actionTypeOk]) {
    actionLifecycleHooks[actionTypeOk] = [hook];
  } else {
    actionLifecycleHooks[actionTypeOk] = [
      ...actionLifecycleHooks[actionTypeOk],
      hook,
    ];
  }
}
