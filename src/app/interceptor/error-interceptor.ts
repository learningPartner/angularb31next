import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse)=>{
      debugger;
      if(error.status == 401) {
        alert("Unauthorized")
      } else if (error.status == 400) {
        alert("Invlaid Object")
      } else if (error.status == 500) {
        alert("APi Error")
      }
      return throwError(()=>error);
    })
  );
};
