import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  username:any;
  password:string;
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  danger : boolean = false ;
    sucess : boolean = false ;
    message : string = '';

 form:any ={}
  ngOnInit() {
  }

  validation(){
    if(this.form.username==null || this.form.password==null ){
      this.message ="Username or Password is empty  !"
      this.sucess=false ;
      this.danger=true ;
   }else{
    console.log(this.form)
    this.userService.login(this.form).subscribe( data =>{
      console.log(data)
      if(data==true){
        this.message ="Login succeful  !"
        this.sucess=true ;
        this.danger=false ;
        this.userService.loginUser(this.form).subscribe(data=>{
          this.form =data  ;
          window.sessionStorage.removeItem("USER");
          window.sessionStorage.setItem("USER", JSON.stringify(data));
          this.router.navigate(['firstpage']).then(() => {
            window.location.reload();
          });
        })
        
        
        
      }else{
        this.message ="Username or Password is invalide  !"
        this.sucess=false ;
        this.danger=true ;
      }
    })
  }
  }
  

}
