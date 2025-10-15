import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Master } from '../services/master';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const tokenData = localStorage.getItem("token");
  const master =  inject(Master);
  const newCloneRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${tokenData}`,
      testUser:'1111'
    }
  })
  console.log("Intercepto execuited")
  return next(newCloneRequest);
};
