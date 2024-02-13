import { Component,ViewChild,OnInit,Output,EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UseridService } from '../userid.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component implements OnInit{
  constructor(private api:ApiService,private route:Router, private userid:UseridService){}
  @ViewChild('form1') form1!: NgForm;
 
   @Output() generatedId = new EventEmitter<number>();


  formData: any = {};

  setSesso(gender: string) {
    this.formData.sesso = gender;
   }

  form1Submit(event:any){
    event.preventDefault();
    if (this.form1.valid) {
      
      this.formData.id            = ( this.formData.id) ?  this.formData.id :0;
       try{
        this.api.post('login/createform.php', this.formData)
          .subscribe((res: any) => {
            if(res.result.success==1)
            {  
              this.formData.id =res.result.data.id;
               this.userid.setFormDataId(this.formData.id);
              this.route.navigateByUrl('/foodymed/menu2');
             }
            else{
              console.log(res.result);
            }
          });
        }
        catch(e){
          console.log(e); //Here you can give an alert component in the future.
        }
      }  
    } 
    ngOnInit(){
     }

  }

