import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ SharedModule, FormsModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {  
  contact = {
    firstname: '',
    lastname: '',
    email: '',
    companyName: '',
    message: '',
    phone: ''
  }

  constructor(private toastr: ToastrService) {
  }
  
  onSubmit(form: NgForm) {   
    console.log('Form fields are ->',form.value) 
    if(form.valid){
      emailjs.send("service_5ml9ah8","template_ap16ndo",{
        from_name: form.value.firstname,
        message: form.value.message,
        firstName: form.value.firstname,
        lastName: form.value.lastname, 
        emailId: form.value.email,
        companyName: form.value.companyName,
        phone: form.value.phone
      }, 
      { publicKey: 'FIQ8xmt2eRBg1WJQC' }).then(
        (response) => {
          if(response.status == 200){
            this.toastr.success('Thank you ! Your message has been succesfully Delivered ! I will reach out to you as quickly as I can !', '', {
              timeOut: 3000,
            });
            form.reset();
          }
          else{            
            console.log('API Call FAILED...', response.status, response.text);
            this.toastr.error('Sorry Something went wrong ! Please try again !', '', {
              timeOut: 3000,
            });
          }
        },
        (err) => {
          console.log('API Call FAILED...', err);
          this.toastr.error('Sorry Something went wrong ! Please try again !', '', {
            timeOut: 3000,
          });
        },
      );      
    }
  }
}
