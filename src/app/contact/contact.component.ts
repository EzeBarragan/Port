import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      mensaje:["",[Validators.required]],
      nombre:["", [Validators.required]]
    });
  }
 get formControl(){
  return this.loginForm.controls;
 };
 onLogin(){
  if(this.loginForm.valid ==true){
    window.open('https://wa.me/' + 2215062474 + '?text=Hola soy  '+this.loginForm.value.nombre+' Quisiera saber sobre '+this.loginForm.value.mensaje, '_blank')
  }else{
    alert('volve a intentar')
  }
 }
}
