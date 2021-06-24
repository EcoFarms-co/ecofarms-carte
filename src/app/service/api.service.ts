import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getEmployees() {
    return this.http.get(`${this.baseUri}`);
  }

  // Get employee
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteEmployee(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  getFarmsByRegion(region): Observable<any> {
    let url = `${this.baseUri}/recherche/regions/${region}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getFarmsByFilters(filterValues: any): Observable<any> {
    // params = params.append('filterValues', filterValues);
    // params = params.append('_limit', 10);
    let params = new HttpParams().set('queryStr', filterValues);
    let url = `${this.baseUri}/recherche`;
    console.log('filterValues ', filterValues);
    return this.http.get(url, { params: filterValues }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getFarmDetails(farmId: any): Observable<any> {
    let params = new HttpParams().set('id', farmId);
    let url = `${this.baseUri}/farms/${farmId}`;
    console.log('farmId sent to the back ', farmId);
    return this.http.get(url, { params: params }).pipe(
      catchError(this.errorMgmt)
    )
  }

  getScoreDimensionByIdFarm(farmId: any): Observable<any> {
    let params = new HttpParams().set('id', farmId);

    let url = `${this.baseUri}/farm/${farmId}/score-dimensions`;
    console.log('farmId sent to the back to retreive score dimension ', farmId);
    return this.http.get(url, { params: params }).pipe(
      catchError(this.errorMgmt)
    )
  }


  loadReseaux(): Observable<any>{
    return this.http.get(`${this.baseUri}/reseaux`).pipe(catchError(this.errorMgmt));
  }

}