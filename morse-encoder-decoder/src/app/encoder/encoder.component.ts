import { Component } from '@angular/core';
import { EncodeService } from './encode.service';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})
export class EncoderComponent {
  public inputText: any = "";
  public outputText: string = "";
  public btnDisable: boolean = true;

  constructor(public encoder: EncodeService) { }

  public encodeBtnOnClick() {
    this.outputText = this.encoder.encode(this.inputText);
  }

  public inputOnChange() {
    this.btnDisable = !this.encoder.checkInputText(this.inputText) || this.inputText.length === 0;
  }
}
