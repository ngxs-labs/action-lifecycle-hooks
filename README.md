[![npm version](https://badge.fury.io/js/%40ngxs-labs%2Faction-lifecycle-hooks.svg)](https://badge.fury.io/js/%40ngxs-labs%2Faction-lifecycle-hooks)

<p align="center">
  <img src="https://raw.githubusercontent.com/ngxs-labs/emitter/master/docs/assets/logo.png">
</p>

---

# NGXS Action Lifecycle Hooks

## Demo

## Resources

## Description

The Action Lifecycle Hooks facilitates to execute code on action specific lifecycle events such as `Completed` or `Errored`. This is is particularly useful when you want to run code on multiple states after an action has completed. Without this plugin you need to inject `Actions` and listen to the event you are interested. Now, you can use the handy hook to perform the operation.

## Quick start

Install the plugin:

- npm

```console
npm install --save @ngxs-labs/action-lifecycle-hooks
```

- yarn

```console
yarn add @ngxs-labs/action-lifecycle-hooks
```

Next, in your `app.module.ts` include the plugin.

```ts
//...
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsActionLifecycleHooksModule } from '@ngxs-labs/action-lifecycle-hooks';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    //...
    AngularFireModule.initializeApp(environment.firebase),
    NgxsModule.forRoot(...)
    NgxsLoggerPluginModule.forRoot(),
    NgxsActionLifecycleHooksModule,
  ]
  //...
})
export class AppModule {}
```

You can now hook into an action lifecycle event like this:

```ts
@Action(ActionSuccessful(MyAction))
myActionSuccesful(ctx: StateContext<any>) {
  // run code here
}

@Action(ActionErrored(MyAction))
myActionErrored(ctx: StateContext<any>) {
  // run code here
}
```