import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getAllUser(){
    return this.http.get<User[]>(this.baseURL+"/getAllUsers");
  }

  //The following code will return the complete response and not just the body
  getReposRawResponse(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos', { observe: 'response' })
  }

  //You can also listen to progress events by using the { observe: 'events', reportProgress: true }. 
  getReposRawResponse1(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos', { observe: 'events', reportProgress: true })
  }

  //The API might fail with an error. You can catch those errors using catchError. 
  //You either handle the error or throw it back to the component using the throw err
  getReposCatchError(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'usersY/' + userName + '/repos')
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        }
        )
      )
    }

  //You can make use of the map, filter RxJs Operators to manipulate or transform the response before sending it to the component.
  getReposMap(userName: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'users/' + userName + '/repos')
      .pipe(
        map((data) => {
           //You can perform some transformation here
           return data;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
    }


  //URL Parameter
  getReposUrlParameter(userName: string): Observable<User[]> {

    const params = new HttpParams()
      .set('sort', "description")
      .set('page',"2");

    return this.http.get<User[]>(this.baseURL + 'users/' + userName + '/repos', { 'params': params })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

  
   //HTTP Headers
   getReposHeaders(userName: string): Observable<User[]> {

    const params = new HttpParams()
      .set('sort', "description")
      .set('page',"2");

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      

    return this.http.get<User[]>(this.baseURL + 'users/' + userName + '/repos', { 'params': params, 'headers': headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

    //With Credentials
    getReposWithCookies(userName: string): Observable<User[]> {

      const params = new HttpParams()
        .set('sort', "description")
        .set('page',"2");
  
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        
  
      return this.http.get<User[]>(this.baseURL + 'users/' + userName + '/repos', { 'params': params, 'headers': headers, withCredentials: true })
        .pipe(
          map((response) => {
            return response;
          }),
          catchError((err, caught) => {
            console.error(err);
            throw err;
          }
          )
        )
    }
  //post method for insert
    addPerson(person:User): Observable<any> {
      const headers = { 'content-type': 'application/json'}  
      const body=JSON.stringify(person);
      console.log(body)
      return this.http.post(this.baseURL + 'people', body,{'headers':headers})
    }


}
