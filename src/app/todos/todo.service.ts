import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable()
export class TodoService {
    constructor(private http: HttpClient){

    }

    getTodoItems(): Observable<Object>{
      return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(map((response: Response) => {
        
      return response;
    })).pipe(catchError(this.handleError()));
  }

    private handleError<T>(operation = 'operation', result?: T){
      return (error: any) : Observable<T> => {
        console.error(error);
        return of(result as T);
      }

    }
       
}