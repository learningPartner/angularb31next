import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Master } from '../services/master';
import { catchError, tap, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const tokenData = localStorage.getItem("token");
  const master =  inject(Master);
  const newCloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenData}`,
      testUser:'1111'
    }
  })
  console.log("Intercepto execuited")
  return next(newCloneRequest)
};

// return next(newCloneRequest).pipe(
//     tap(result=>{
//       debugger;
//       return result;
//     })
//   )
