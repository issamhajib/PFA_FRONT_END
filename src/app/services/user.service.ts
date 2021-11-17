import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    ) { }
 
     headers = new HttpHeaders();
     
  
user:any = JSON.parse(sessionStorage.getItem("USER")) ;
  
  getallusers(): Observable<any> {
    return this.http.get(API_URL + 'all' )
  }

  add(form:any){
   return this.http.post(API_URL+'/saveUser',form)
  }

  login(form:any){
    return this.http.get(API_URL+'/login/'+form.username+'/'+form.password)
   }

   loginUser(form:any){
    return this.http.get(API_URL+'/loginUser/'+form.username+'/'+form.password)
   }

   getUserProjcts(){
    return this.http.get(API_URL+'/getProjets/'+this.user.id)
   }

  
}