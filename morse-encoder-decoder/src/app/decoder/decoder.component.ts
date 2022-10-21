import { Component } from '@angular/core';
import { DecodeService } from './decode.service';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css']
})
export class DecoderComponent {
  public inputText: any = "";
  public outputText: string = "";
  public btnDisable: boolean = true;

  constructor(public decoder: DecodeService) { }

  public decodeBtnOnClick() {
    this.outputText = this.decoder.decode(this.inputText);
  }

  public inputOnChange() {
    this.btnDisable = !this.decoder.checkInputText(this.inputText) || this.inputText.length === 0;
  }
}
