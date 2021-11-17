import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8000/projets/';
const CRITERS_URL = 'http://localhost:8000/criters/';
const SOUS_CRITERS_URL = 'http://localhost:8000/souscriters/';
const ALTERNATIVE_URL= 'http://localhost:8000/alternatives/'


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient,
    ) { }
 
     
     
  

  
  getallprojets() {
    return this.http.get(API_URL + 'all' )
  }

  getprojet(id:any){

    return this.http.get(API_URL + 'criterof/'+id )
  }

  getsousCriters(id:any){

    return this.http.get(CRITERS_URL + 'souscriterof/'+id )
  }

  add(form:any){
   return this.http.post(API_URL+'/save',form)
  }

  /*login(form:any){
    return this.http.get(API_URL+'/login/'+form.username+'/'+form.password)
   }*/

   addCriters(form:any){
    return this.http.post(CRITERS_URL+'save',form)
   }

   addSousCriters(form:any){
    return this.http.post(SOUS_CRITERS_URL+'save',form)
   }

   addalternative(form:any){
    return this.http.post(ALTERNATIVE_URL+'save',form)
   }
  
}