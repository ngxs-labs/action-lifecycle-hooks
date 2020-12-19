import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { NgxsActionLifecycleHooksState } from "./ngxs-action-lifecycle-hooks.state";

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([NgxsActionLifecycleHooksState])
  ],
  declarations: []
})
export class NgxsActionLifecycleHooksModule {}
