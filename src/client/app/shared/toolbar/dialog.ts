import {MdDialogRef} from "@angular/material";
import {Component} from "@angular/core";

@Component({
  selector: 'your-dialog-selector',
  providers: [],
  template: `
  <h2>Hi! I am modal dialog!</h2>
  <button md-raised-button (click)="dialogRef.close()">Close dialog</button>`
})

export class DialogComponent {
  constructor(public dialogRef: MdDialogRef<any>) { }
}
