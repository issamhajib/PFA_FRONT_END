import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { ProjetService } from '../services/projetahp.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor( private ahpService:ProjetService,
    private userService:UserService) { }

  ngOnInit(): void {

    this.getprojects();
    
  }

  action:boolean=false
  etap2:boolean=false

  index: number = 0;
  projetAhp:any={}
  projetcurrent:any={}
  criters:any={}
  numberCriters:any 
  modificationCriters:boolean=false
  sousCriters:any={}
  n:number[] = []

  etap3:boolean=false 
  showmodification : boolean[]= []
  showmodificationsub : any={}

  openNext() {
    this.index = (this.index === 8) ? 0 : this.index + 1;
}

openPrev() {
    this.index = (this.index === 0) ? 8 : this.index - 1;
}

  arrayOne(n: number): any[] {
    return Array(n);
 }

 getprojects(){
   this.userService.getUserProjcts().subscribe(data =>{
    this.projetAhp=data
    console.log(this.projetAhp)

  })
 }

 async getprojectdetails(p:any){
   
   this.projetcurrent=p
   this.numberCriters=p.numbreCriters
  console.log(p)
  console.log(this.numberCriters);
  for(let j=0 ;j< this.numberCriters ; j++){

    this.sousCriters[j]={}
    this.showmodification[j]=false
    this.showmodificationsub[j]={}

    

  }
  this.ahpService.getprojet(p.id).subscribe(data =>{
    this.criters=data   
    console.log(data)
   
    this.etap2=true
    this.openNext()
 })

 
 
  console.log(this.showmodification);
  
 

 

 }
 modif(j:any){
  this.showmodification[j]=true ;
  console.log(this.showmodification);
  
}

edit(form:any , j : any){
  this.ahpService.addCriters(form).subscribe(data =>{
    this.criters[j]=data   
    console.log(this.criters[j])
    this.showmodification[j]=false
 })
}

 getsousCriters(){

  
  for(let i =0 ; i<this.numberCriters ; i++){
    this.n[i]=this.criters[i].numbresousCriters
    this.ahpService.getsousCriters(this.criters[i].id).subscribe(data =>{
      this.sousCriters[i]=data 
      })

      for(let j =0 ; j<this.n[i] ; j++){
        this.showmodificationsub[i][j]=false
      }
  }

  console.log(this.sousCriters)
  console.log(this.n);
  this.etap3=true
  this.openNext()
    
}

editsub(form:any , i:any , j:any){
  this.ahpService.addSousCriters(form).subscribe(data=>{
    this.sousCriters[i][j]=data ;
    this.showmodificationsub[i][j]=true
  })

}
modifsub(i:any,j:any){
this.showmodificationsub[i][j]=false
}

 






}
