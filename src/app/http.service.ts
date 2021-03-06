import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){}
  altColors: string[]
  shades = [15, 10, 5, -10, -15];

  get_random_color() {
    let letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
      return color;
  }

  generateAltColors(swatch){
    this.altColors = [];
    for (var i = 0; i <this.shades.length; i++){
      this.altColors.push(this.shadeColor(swatch, this.shades[i]));
    }
    return this.altColors;
  }
  
  shadeColor(color, percent) { 
    var num = parseInt(color,16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }

  getSpecificColors(color){
    let specColors = [];
    for (var i = 0; i < 13; i++) {
      specColors.push(this.shadeColor(color, i * 2));
    }
    return specColors;
  }


}
