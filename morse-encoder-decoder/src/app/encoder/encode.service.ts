import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodeService {
  public toMorseMap = new Map<string, string>([
    ['A', '.-'],
    ['B', '-...'],
    ['C', '-.-.'],
    ['D', '-..'],
    ['E', '.'],
    ['F', '..-.'],
    ['G', '--.'],
    ['H', '....'],
    ['I', '..'],
    ['J', '.---'],
    ['K', '-.-'],
    ['L', '.-..'],
    ['M', '--'],
    ['N', '-.'],
    ['O', '---'],
    ['P', '.--.'],
    ['Q', '--.-'],
    ['R', '.-.'],
    ['S', '...'],
    ['T', '-'],
    ['U', '..-'],
    ['V', '...-'],
    ['W', '.--'],
    ['X', '-..-'],
    ['Y', '-.--'],
    ['Z', '--..'],
    [' ', '/']
  ]);

  constructor() { }

  public encode(toEncode: string): string {
    let result = "";
    toEncode = toEncode.trim(); // remove extra spacing at begin and end
    toEncode = toEncode.replace(/\s+/g, " "); // remove extra spacing between words
    if (!this.checkInputText(toEncode)) {
      return "";
    }
    for (let char of toEncode) {
      result += this.toMorseMap.get(char) + ' ';
    }
    return result;
  }

  public checkInputText(text: string): boolean {
    for (let char of text) {
      if (!(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) === 32)) {
        return false;
      }
    }
    return true;
  }
}
