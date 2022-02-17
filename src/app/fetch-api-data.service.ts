import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://berkdislimyflix.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  public getAllMovies(movieDetails: any): Observable<any> {
    console.log(movieDetails);
    return this.http.get(apiUrl + 'movies', movieDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public getMovie(movieDetails: any): Observable<any> {
    console.log(movieDetails);
    return this.http.get(apiUrl + 'movies', movieDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public getDirector(directorDetails: any): Observable<any> {
    console.log(directorDetails);
    return this.http.get(apiUrl + 'movies/:Title/director', directorDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public getGenre(genreDetails: any): Observable<any> {
    console.log(genreDetails);
    return this.http.get(apiUrl + 'movies/:Title/genre', genreDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public getSingleUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users/:Username', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public getFavMovieOfSingleUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users:Username', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public addMovieToFav(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + '/users/:Username/movies/:MovieID', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public updateUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users/:Username', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public deleteUser(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.delete(apiUrl + 'users/:Username', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  
  public removeMovieFromFav(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.delete(apiUrl + '/users/:Username/movies/:MovieID', userDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }

 
// Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  }
}
