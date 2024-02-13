import { Component ,Input,OnInit,ViewChild} from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UseridService } from '../userid.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component implements OnInit {
  constructor(private api:ApiService,private route:Router,private userid:UseridService){}
  formDataId: number | null = null;
   

 
  @ViewChild('form2') form2!: NgForm;
  
  formData: any = {};

  setExcerise(value: number) {
    this.formData.lavoro_allena = value;
   }
   
  ngOnInit() {
    this.formDataId = this.userid.getFormDataId();
   }

  form2Submit(event:any){
    event.preventDefault();
    if (this.form2.valid) {
      
      this.formData.id       = this.formDataId;
      try{
        this.api.post('login/createform.php', this.formData)
          .subscribe((res: any) => {
            if(res.result.success==1)
            {  
              this.formData.id =res.result.data.id;
              this.route.navigateByUrl('/foodymed');
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

}
