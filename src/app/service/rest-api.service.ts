import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, interval, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';
import * as AppConst from "../class/app.const";

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  listOfUserdata=[]
  
  constructor(private http :HttpClient) {}

  getDataFromServer():Observable<any>{
   return this.http.get<any>(AppConst.apiURL)
      .pipe(
        map((data)=>{          
          data.hits;
          return data.hits;            
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorResponce:HttpErrorResponse){
    if(errorResponce.error instanceof ErrorEvent){
      console.error("Clint side error: ",errorResponce.error)
    } else {
      console.error("Server Side error: ", errorResponce.error);
    }

    return throwError("This is problem with service. we are notified this service and working on it.")
  }
}
