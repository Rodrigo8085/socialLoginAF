import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mainForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder) {
      
    }

  ngOnInit(): void {
    const controls: { [key: string]: FormControl } = {};

    const validatorsToAdd = [];
    validatorsToAdd.push(Validators.required);
    // validatorsToAdd.push(Validators.pattern(/^\S/));
    validatorsToAdd.push(Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑÀàÂâÊêÎîöÛûÜüÇçÃãÕõ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑÀàÂâÊêÎîöÛûÜüÇçÃãÕõ]+)*$/))
    // validatorsToAdd.push(Validators.pattern(/(\S{2,})/));


    controls['nombreValidador'] = this.fb.control(
      null,
      validatorsToAdd
  );
  this.mainForm = this.fb.group(controls);
    console.log(this.mainForm);


    // this.mainForm.addControl('nombreValidador', validatorsToAdd);
    this.valuesChanges();
  }

  valuesChanges(){
    this.mainForm.valueChanges.subscribe(t => {
      console.log(this.mainForm.get('nombreValidador'))
    })
  }

  onSubmit(){

  }
  title = 'socialLoginAF';
}
