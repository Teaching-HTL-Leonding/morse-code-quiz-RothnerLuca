import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {
  public toLetterMap = new Map<string, string>([
    ['.-', 'A'],
    ['-...', 'B'],
    ['-.-.', 'C'],
    ['-..', 'D'],
    ['.', 'E'],
    ['..-.', 'F'],
    ['--.', 'G'],
    ['....', 'H'],
    ['..', 'I'],
    ['.---', 'J'],
    ['-.-', 'K'],
    ['.-..', 'L'],
    ['--', 'M'],
    ['-.', 'N'],
    ['---', 'O'],
    ['.--.', 'P'],
    ['--.-', 'Q'],
    ['.-.', 'R'],
    ['...', 'S'],
    ['-', 'T'],
    ['..-', 'U'],
    ['...-', 'V'],
    ['.--', 'W'],
    ['-..-', 'X'],
    ['-.--', 'Y'],
    ['--..', 'Z'],
    ['/', ' '],
  ]);
  public errorOccurred: boolean = false;
  public errorCause: string = "";

  constructor() { }

  public decode(toDecode: string): string {
    let result = "";
    let parts = [];
    this.errorOccurred = false;
    this.errorCause = "";
    toDecode = toDecode.trim(); // remove extra spacing at begin and end
    toDecode = toDecode.replace(/\s+/g, " "); // remove extra spacing between words
    if (!this.checkInputText(toDecode)) {
      return "";
    }
    parts = toDecode.split(' ');
    for (let part of parts) {
      if (this.toLetterMap.get(part) === undefined) {
        this.errorOccurred = true;
        this.errorCause = part;
      } else {
        result += this.toLetterMap.get(part);
      }
    }
    return result;
  }

  public checkInputText(text: string): boolean {
    for (let char of text) {
      if (!(char.charCodeAt(0) === 45 || char.charCodeAt(0) === 46 || char.charCodeAt(0) === 47 || char.charCodeAt(0) === 32)) {
        return false;
      }
    }
    return true;
  }
}
