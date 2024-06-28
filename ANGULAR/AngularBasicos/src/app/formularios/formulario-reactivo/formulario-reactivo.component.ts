import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { ILogin } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  mensajeError: string = '';
  myForm: FormGroup;
  show = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group(
      {
        usuario: ['', [Validators.required, Validators.maxLength(50), this.noWhitespaceValidator]],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            //Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            Validators.maxLength(100)
          ]
        ],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
        password2: [''],
        acepto: [false, [Validators.requiredTrue]]
      },
      {
        validators: this.passwordMatching
      }
    );
  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe((x) => {
      console.log(x);
    });

    this.myForm.controls.acepto.valueChanges.subscribe((x) => {
      console.log(x);
      // deshabilitar botón
    });
  }

  // Si se retorna null no hay error
  // Si se retorna algo se considera como un error
  //Almacena la información del usuario
  noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = control.value.toString().trim().length === 0; //Para controlar si se han introducido espacos
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  passwordMatching(formGroup: AbstractControl) {
    const pass1 = formGroup.get('password')?.value;
    const pass2 = formGroup.get('password2')?.value;

    if (pass1 !== pass2) {
      formGroup.get('password2')?.setErrors({ invalidPass: true });
      return { invalidPass: true };
    }

    formGroup.get('password2')?.setErrors(null);
    return null;
  }

  password() {
    this.show = !this.show; //Para mostrar u ocultar la contraseña
  }

  registrarse() {
    if (!this.myForm.value.acepto) {
      this.mensajeError = 'Debe aceptar la política de privacidad y las condiciones de uso';
      return;
    }

    const user: ILogin = {
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      usuario: this.myForm.value.userName
    };

    this.myForm.reset();
    console.log(user);
  }
}

