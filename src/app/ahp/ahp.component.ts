import { Component, OnInit } from '@angular/core';
import { max } from 'moment';
import { TreeNode } from 'primeng/api';
import { ProjetService} from '../services/projetahp.service';
@Component({
  selector: 'app-ahp',
  templateUrl: './ahp.component.html',
  styleUrls: ['./ahp.component.css']
})
export class AhpComponent implements OnInit {

  nom!: string;
  numbre!: number;
  numbreS!: number;
  numbreAlternative : number ;

  showinputs:boolean=false ;
  showmatrice:boolean=false ;
  showSousmatrice:boolean=false ;
  showSousCriter:boolean=false ;
  showarbre:boolean=false ;
  showalterINputsAlternative:boolean= false ;
  showtab7:boolean=false ;

  showetapetapfinaltopsis :boolean = false ;
 

  index: number = 0;
  a:number=0;

  projetahp:any={};
  critersahp:any={};
  souscritersahp:any={};
  idproject :any ;
  idcriters : {};
  radio:any={};

  numbersS: number[]=[0,0,0];
  showSousCriters: boolean[]=[false,false];

  n:any={};
  facteur:any={};
  etap1Poids:any = {};
  etap1PoidsSCR:any={};

  matrice:any={};
  facteurSoucCriter:any={};
  etap2Poids:any={};
  etap3Poids:any={};
  etap2PoidsSCR:any={};
  etap3PoidsSCR:any={};

  ranks:number[];

  topsisetap1:any = {} ;
  aplus:any={};
  amoins:any={};
  classement:any={
    
  }

  dplus:any= {}
  dmoins:any= {}
  ci:number[] = []
  b : number = 0 ;
  
  form:any={};
  formS:any={};
  alternative:any={};
  facteuralternative:any={};
  facteur2alternative:any={}

  formAlternative : any = {};
  formRelationCriter : any = {};
  
  leveltwo: any = {};


  etap1CR:any={}
  etap2CR:any={}

  etap1subCR:any ={}
  etap2subCR:any ={}
  landasub:any = {}
  ICsub:number[]= []
  CRsub :number[]= []
  valIAsub : number[]= []

  landa:number=0;
  IC:number=0;
  CR:number=0;

  tableauCriter:string[]=this.form ;

  cities: Number[];
  altfact:Number[];

  IA:number[]=[0,0,0.58,0.9,1.12,1.24,1.32,1.41,1.45,1.49];
  valIa:number=0;

  constructor(
    private ahpService:ProjetService
  ) {
    for(let jj = 0 ; jj<5 ; jj++){
      this.classement[jj]={
        ci : 0 ,
        claassment :0 ,
      }
    }
    this.cities = [
      1,3,5,7,9,1/3,1/5,1/7,1/9
  ];
  this.altfact = [
    1,2,3,4,5,6,7,8,9,10
  ]
 
   }

  data: TreeNode[] = [];

    ngOnInit() {
       
}
nodes: any = [
  {
    name: '',
    cssClass: 'ngx-org-ceo',
    
    title: ' ',
    childs: [
      
        ]
      
 }];
  
 
    

showinfo(){
  console.log("Matrice Criters")
  console.log(this.facteur)
  this.arbre();
  console.log(this.matrice)

  this.showmatrice=true
}


  showInputs(){
this.showinputs =true ;
for(let i=0 ; i<this.numbre ; i++){
  this.critersahp[i]={
    id:'',
    name :'' ,
    numbresousCriters:'',
    poids:0,
    projetAhp:{id : ' '}
    
  }

  this.souscritersahp[i]={}
  this.formAlternative[i]={}
  
  this.facteuralternative[i]={}
  this.facteur2alternative[i]={}
  this.aplus[i]={}
  this.amoins[i]={}

}

  }
  showsousCrit(i:number){
    console.log(this.numbersS)
    console.log(this.showSousCriters)
    this.showSousCriters[i]=true;
    this.formS[i]={}
    this.etap1subCR[i]={}
    this.etap2subCR[i]={}
    this.facteurSoucCriter[i]={}
    this.etap1Poids[i]={}
    this.etap2Poids[i]={}
    this.etap3Poids[i]={}
    this.leveltwo[i]={}
    

    
    this.etap2PoidsSCR[i]={}
    this.alternative
    
      }

  showsous(){
    this.showSousCriter =true ;
    
      }

  arrayOne(n: number): any[] {
     return Array(n);
  }

  showDATA(){
    this.tableauCriter=this.form ;

    console.log(this.form)
    console.log("SOUS CRITERS")
    console.log(this.formS)
    console.log("Nombre de Sous Criters")
    console.log(this.n)
    console.log(this.tableauCriter+" ici ");

 this.nodes[0].name=this.nom;
  for(let j=0;j<this.numbre;j++){
    this.nodes[0].childs[j]={
      name: ' ',
        cssClass: 'ngx-org-ceo',
        
        title: '',
        childs: []
    }
    this.nodes[0].childs[j].name=this.form[j];
    for(let jj=0;jj<this.n[j];jj++){
      this.nodes[0].childs[j].childs[jj]={
        name: ' ',
          cssClass: 'ngx-org-ceo',
          
          title: '',
          childs: []
      }
      this.nodes[0].childs[j].childs[jj].name=this.formS[j][jj]

      this.souscritersahp[j][jj]={
        name :'' ,
        poids:0,
        criter:{id:''}

      }
      this.facteuralternative[j][jj]={}
      this.facteur2alternative[j][jj]={}
      
      
    }
    for(let j=0;j<this.numbre;j++){
      this.facteur[j]={}
      this.matrice[j]={}
      this.etap2PoidsSCR[j]={}
      for(let jj=0 ; jj<this.n[j];jj++){
        this.facteurSoucCriter[j][jj]={}
        this.etap2Poids[j][jj]={}
        
        this.etap3Poids[j][jj]={}
        this.leveltwo[j][jj]={}
      }
      }
    
    
  }  
  
  this.showarbre=true;
  

  }

  calculCR(){
    console.log("Matrice ! ! ")
    console.log(this.facteur)
    for(let i=0;i<this.numbre;i++){

      this.etap1CR[i]=0;
      for(let jj=0; jj<this.numbre;jj++){
        this.etap1CR[i]=this.etap1CR[i]+this.facteur[i][jj]*this.etap3PoidsSCR[jj]
      }
}
console.log("Multiplication donne ! ")
console.log(this.etap1CR)
this.landa=0 ;
for(let i=0;i<this.numbre;i++){
  this.etap2CR[i]=0;
  this.etap2CR[i]=this.etap1CR[i]/this.etap3PoidsSCR[i]

}

for(let i=0;i<this.numbre;i++){
  this.landa=this.etap2CR[i]+this.landa

}
this.landa=this.landa/this.numbre;
console.log("Landa ! ")
console.log(this.landa)
this.IC=(this.landa-this.numbre)/(this.numbre-1)
console.log("IC ! ")
console.log(this.IC)
console.log("IA ! ")
this.valIa=this.IA[this.numbre+1];
console.log(this.valIa)
console.log("CR! ")
this.CR=this.IC/this.valIa
console.log(this.CR)

  }

  calculsubCR(){
    for(let j = 0 ; j<this.numbre ; j++){
      console.log("Matrice sub ! ! "+ j)
      console.log(this.facteurSoucCriter[j]) 
      for(let i=0;i<this.n[j];i++){

        this.etap1subCR[j][i]=0;
        for(let jj=0; jj<this.n[j];jj++){
          this.etap1subCR[j][i]=this.etap1subCR[j][i]+this.facteurSoucCriter[j][i][jj]*this.etap3Poids[j][jj]
        }
  }
  console.log("Multiplication donne ! ")
  console.log(this.etap1subCR)
  this.landasub[j]=0 ;
  for(let i=0;i<this.n[j];i++){
    this.etap2subCR[j][i]=0 ; 
    this.etap2subCR[j][i]=this.etap1subCR[j][i]/this.etap3Poids[j][i]
  }
  console.log(this.etap2subCR);
  
  for(let i=0;i<this.n[j];i++){
    this.landasub[j]=this.etap2subCR[j][i]+this.landasub[j]
   }

   
    this.landasub[j]=this.landasub[j]/this.n[j]
    console.log(this.landasub);
    
   
    this.ICsub[j]=(this.landasub[j]-this.n[j])/(this.n[j]-1)

    console.log(this.ICsub);
    

    this.valIAsub[j]=this.IA[this.n[j]+1]
    console.log(this.valIAsub);
    
    this.CRsub[j]=this.ICsub[j]/this.valIAsub[j]
console.log(this.CRsub[j] + "CR of sub : "+ j);

    }
    


  }

  showMatriceSous(){
    console.log(this.facteurSoucCriter)
    for(let i=0 ; i<this.numbre;i++){
      for(let jj=0;jj<this.n[i];jj++){
        for(let j=0;j<this.n[i];j++){
             if(j==jj){
               this.facteurSoucCriter[i][j][j]=1
               this.etap2Poids[i][j][j]=1
             }else{
              this.facteurSoucCriter[i][j][jj]=1/this.facteurSoucCriter[i][jj][j]
              this.etap2Poids[i][j][jj]=1/this.facteurSoucCriter[i][jj][j]
             }
         }
      }
    }
    
    console.log(" ---------Matrice Sous cirt----------")
    console.log(this.facteurSoucCriter)
    this.showSousmatrice=true;
 
    for(let i=0 ; i<this.numbre;i++){
      
      for(let jj=0;jj<this.n[i];jj++){
        this.etap1Poids[i][jj]=0 ;
        for(let j=0;j<this.n[i];j++){
          this.etap1Poids[i][jj]=this.etap1Poids[i][jj]+this.facteurSoucCriter[i][j][jj];
        }
      }
    }
    console.log("---------etape 1----- ");
    console.log(this.etap1Poids);

    for(let i=0 ; i<this.numbre;i++){
      for(let jj=0;jj<this.n[i];jj++){
        for(let j=0;j<this.n[i];j++){
          this.etap2Poids[i][j][jj]=this.etap2Poids[i][j][jj]/this.etap1Poids[i][jj];
        }
      }
    }
    
    console.log("---------etape 2----- ");
    console.log(this.etap2Poids);

    for(let i=0 ; i<this.numbre;i++){
      
      for(let jj=0;jj<this.n[i];jj++){
        this.etap3Poids[i][jj]=0 ;
        for(let j=0;j<this.n[i];j++){
          this.etap3Poids[i][jj]=this.etap3Poids[i][jj]+this.etap2Poids[i][jj][j];
        }
        this.etap3Poids[i][jj]=this.etap3Poids[i][jj]/this.n[i]
        this.etap3Poids[i][jj]=this.etap3Poids[i][jj].toFixed(3);
        this.leveltwo[i][jj]=this.etap3Poids[i][jj]*this.etap3PoidsSCR[i]
        this.leveltwo[i][jj]=this.leveltwo[i][jj].toFixed(3);
        
      }
    }
    console.log("---------etape 3----- ");
    console.log(this.etap3Poids);
    console.log("---------Level two ----- ");
    console.log(this.leveltwo);
  }

  arbre(){
    for(let jj=0;jj<this.numbre;jj++){
      for(let j=0;j<this.numbre;j++){
           if(j==jj){
             this.facteur[j][j]=1
             this.etap2PoidsSCR[j][j]=1
           }else{
            this.facteur[j][jj]=1/this.facteur[jj][j]
            
            this.etap2PoidsSCR[j][jj]=1/this.facteur[jj][j]
           // this.facteur[j][jj]=this.facteur[j][jj].toFixed(3)
           // this.facteur[jj][j]=this.facteur[jj][j].toFixed(3)
}
       }
    }

    

    for(let jj=0;jj<this.numbre;jj++){
      this.etap1PoidsSCR[jj]=0 ;
      for(let j=0;j<this.numbre;j++){
        this.etap1PoidsSCR[jj]=this.etap1PoidsSCR[jj]+this.facteur[j][jj];
      }
    }
    console.log("---------etape 1-MATRICE---- ");
    console.log(this.etap1PoidsSCR);

    for(let jj=0;jj<this.numbre;jj++){
      for(let j=0;j<this.numbre;j++){
        this.etap2PoidsSCR[j][jj]=this.etap2PoidsSCR[j][jj]/this.etap1PoidsSCR[jj];
      }
    }

    console.log("---------etape 2--MATRICE----- ");
    console.log(this.etap2PoidsSCR);

    for(let jj=0;jj<this.numbre;jj++){
      this.etap3PoidsSCR[jj]=0 ;
      for(let j=0;j<this.numbre;j++){
        this.etap3PoidsSCR[jj]=this.etap3PoidsSCR[jj]+this.etap2PoidsSCR[jj][j];
      }
      this.etap3PoidsSCR[jj]=this.etap3PoidsSCR[jj]/this.numbre
      this.etap3PoidsSCR[jj]=this.etap3PoidsSCR[jj].toFixed(3)
    }
  
  console.log("---------etape 3----- ");
  console.log(this.etap3PoidsSCR);
}

  

  openNext() {
    this.index = (this.index === 9) ? 0 : this.index + 1;
}

openPrev() {
    this.index = (this.index === 0) ? 9 : this.index - 1;
}

change(deviceValue:any,i:number,ii:number) {
    
  console.log(deviceValue.value);

  this.facteur[i][ii]=deviceValue.value;
  


}

changee(deviceValue:any,i:number,ii:number,j:number) {
    
  console.log(deviceValue.value);

  this.facteurSoucCriter[j][i][ii]=deviceValue.value;
 


}

addprojet(){
  this.projetahp.user=JSON.parse(sessionStorage.getItem("USER"))
  this.projetahp.name = this.nom ;
  this.projetahp.numbreCriters= this.numbre ;
  this.projetahp.cr=this.CR.toFixed(3);
  this.projetahp.numbreAlternatives=this.numbreAlternative
  console.log(this.projetahp)

  this.ahpService.add(this.projetahp).subscribe(data =>{
    this.projetahp=data
    console.log(this.projetahp)

  })
}

addcriters(){
  for(let jj=0;jj<this.numbre;jj++){
    
  
    this.critersahp[jj].name=this.form[jj]
    this.critersahp[jj].numbresousCriters=this.n[jj]
   this.critersahp[jj].poids=this.etap3PoidsSCR[jj]
    
    this.critersahp[jj].projetAhp.id=this.projetahp.id

  }
  console.log(this.critersahp)
  for(let jj=0;jj<this.numbre;jj++){
    
  
    this.ahpService.addCriters(this.critersahp[jj]).subscribe(data =>{
      this.critersahp[jj]=data
      console.log(this.critersahp[jj])})
  }
}
addsousCriters(){
  for(let i=0 ; i<this.numbre;i++){
    for(let jj=0;jj<this.n[i];jj++){

      this.souscritersahp[i][jj].name=this.formS[i][jj]
      this.souscritersahp[i][jj].poids=this.etap3Poids[i][jj]
      this.souscritersahp[i][jj].criter.id=this.critersahp[i].id

    }
  }
  console.log("JSON CRITERS AVANT")
  console.log(this.souscritersahp)

  for(let i=0 ; i<this.numbre;i++){
    for(let jj=0;jj<this.n[i];jj++){

      this.ahpService.addSousCriters(this.souscritersahp[i][jj]).subscribe(data =>{
        this.souscritersahp[i][jj]=data
        })
    }

    }

    console.log("JSON CRITERS APRES")
  console.log(this.souscritersahp)
  }

  showALternatives(){
    this.showalterINputsAlternative=true ;
   
   
  }

  showetap7(){
    this.showtab7=true ;
    console.log("ALternatives : ----")
    console.log(this.alternative)
    
    this.addAlternatives()
  }
 xx(deviceValue:any,i:number,ii:number,j:number) {
    
    console.log(deviceValue.value);
  
    this.facteuralternative[i][ii][j]=deviceValue.value;
  
  
  }
  show(){
    
    console.log(this.facteuralternative)
  }

etap1topsis(){
  

  for(let i=0 ; i<this.numbre;i++){
    this.topsisetap1 [i] = {}
    for(let j=0;j<this.n[i];j++){
      this.topsisetap1 [i][j]=0
   


      for(let jj=0;jj<this.numbreAlternative;jj++){
        this.topsisetap1[i][j] = this.topsisetap1[i][j] +  this.facteuralternative[i][j][jj]*this.facteuralternative[i][j][jj]
      }

      


    }

    for(let j=0;j<this.n[i];j++){
      this.topsisetap1[i][j] = Math.sqrt(this.topsisetap1[i][j])
    }
  }

  console.log("Etape 1 TOPSIS ---");
  
  console.log(this.topsisetap1);
  }

  etap2topsis(){

    

    for(let i=0 ; i<this.numbre;i++){
      for(let jj=0;jj<this.n[i];jj++){
        for(let j=0 ; j<this.numbreAlternative ; j++){

          this.facteur2alternative[i][jj][j]=this.facteuralternative[i][jj][j]*this.leveltwo[i][jj]/this.topsisetap1[i][jj] 

          this.facteur2alternative[i][jj][j]=this.facteur2alternative[i][jj][j].toFixed(3)
          
        }
      }
    }

    console.log("Etap 2 Topsis");
    console.log(this.facteur2alternative);
    
    console.log("Facteur Alternative");
    console.log(this.facteuralternative)



  }

  onCheckboxChange(deviceValue:any){

    console.log(deviceValue);
    

  }

  max:any ;
  min:any  ; 
  
  setradio(e: string,j:any,i:any): void   
  {  
    this.max=this.facteur2alternative[j][i][0]
    this.min=this.facteur2alternative[j][i][0]
    for(let jj=0;jj<this.numbreAlternative;jj++){
      if(this.max<this.facteur2alternative[j][i][jj]){
        this.max=this.facteur2alternative[j][i][jj]
      }
      if(this.min>this.facteur2alternative[j][i][jj]){
        this.min=this.facteur2alternative[j][i][jj]
      }
    }
    
    if(e=="+"){
console.log("maximiser");
this.aplus[j][i]=this.max
this.amoins[j][i]=this.min   
   } else{
console.log("minimiser")

this.aplus[j][i]=this.min 
this.amoins[j][i]=this.max
    }
   }  

 

   setradioo(e: string,i:any): void   
   {for(let j = 0 ; j < 10 ; j++){
      this.form[j]=j
    }
    this.form=Array.of(this.form)
    console.log(this.form[0]);
        if(e=="+"){
          console.log(Math.max(...this.form))
     
     
    } else{
 console.log("minimiser")
 console.log(Math.min(...this.form))
     }
    }  
  
    addAlternatives(){
      console.log(this.numbreAlternative + ' numbre Alter')
      for(let i =0 ; i<this.numbreAlternative ; i++){
        this.formAlternative[i]={
          name : '',
          projetAhp:{id :'' }
        }

        this.formAlternative[i].name = this.alternative[i];
        this.formAlternative[i].projetAhp.id=this.projetahp.id
      }
    console.log(this.formAlternative)

    for(let i=0 ; i<this.numbreAlternative ; i++){

      this.ahpService.addalternative(this.formAlternative[i]).subscribe(data=>{
        this.formAlternative[i]=data
        console.log(this.formAlternative[i])
      })
    }
  }

  addfacteurCriters(){
    console.log(this.numbre);
    

    for(let i = 0 ; i<this.numbre ; i++){
      this.formRelationCriter[i]={}
      for(let j = 0 ; j<this.numbre; j++){
        this.formRelationCriter[i][j]={
          facteur:'',
          criter1:{id :'' },
          criter2:{id :'' } ,
        }
      }
    }

    for(let i = 0 ; i<this.numbre ; i++){
      for(let j = 0 ;j>i && j<this.numbre ; j++){
      
       this.formAlternative[i][j].facteur=this.facteur[i][j]
       this.formAlternative[i][j].criter1.id= this.critersahp[i].id
       this.formAlternative[i][j].criter2.id= this.critersahp[j].id
}
    }

    console.log(this.formAlternative);
     }

     etapfinal1(){
       
        for(let jj = 0 ; jj<this.numbreAlternative ; jj++){

          this.dplus[jj]=0 ;
          this.dmoins[jj]=0 ;

          for(let i = 0 ; i<this.numbre ; i++){

        for(let j = 0 ; j<this.n[i] ; j++){

          this.dplus[jj]= this.dplus[jj]+(this.facteur2alternative[i][j][jj]-this.aplus[i][j])*(this.facteur2alternative[i][j][jj]-this.aplus[i][j])
          this.dmoins[jj]=this.dmoins[jj]+ (this.facteur2alternative[i][j][jj]-this.amoins[i][j])*(this.facteur2alternative[i][j][jj]-this.amoins[i][j])
          }
        }

        this.dmoins[jj]= Math.sqrt(this.dmoins[jj])
        this.dplus[jj]= Math.sqrt(this.dplus[jj])
        

       }
       for(let jj = 0 ; jj<this.numbreAlternative ; jj++){
         this.b=this.dplus[jj]+this.dmoins[jj]
         this.ci[jj]=this.dmoins[jj]/this.b
     }

       console.log(this.dmoins)
       console.log(this.dplus)
       console.log(this.ci)
       var sorted = this.ci.slice().sort(function(a,b){return b-a})
       this.ranks = this.ci.map(function(v){ return sorted.indexOf(v)+1 });
console.log(this.ranks);
       this.showetapetapfinaltopsis=true ;

       
       
     }

     ordr(){
       this.ci=[1,5,6,8,9,10,7,3,0.4]
       var sorted = this.ci.slice().sort(function(a,b){return b-a})
this.ranks = this.ci.map(function(v){ return sorted.indexOf(v)+1 });
console.log(this.ranks[3]);
     }
 


}
