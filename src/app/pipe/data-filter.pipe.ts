import { Pipe, PipeTransform } from '@angular/core';
import {Userdata} from "../class/userdata";
@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(listOfUserdata:Userdata[],searchTerm:string): any {
    if(!listOfUserdata || !searchTerm){
      return listOfUserdata;
    }
    
    return listOfUserdata.filter(data=>
      data.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }

}