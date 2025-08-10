import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/shared/footer/footer'; 



@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Navbar, Footer],
  templateUrl: './auth-modal.html',
  styleUrls: ['./auth-modal.scss']
})
export class AuthModalComponent {
  @Output() close = new EventEmitter<void>();
  activeTab: 'signin' | 'signup' = 'signin';
  signInForm: FormGroup;
  signUpForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    // Login Form
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Register Form
    this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator() });
  }

  // Switch between Sign In and Sign Up
  switchTab(tab: 'signin' | 'signup') {
    this.activeTab = tab;
  }

  // Login Handler
  onSignIn(): void {
    if (this.signInForm.valid) {
      this.isSubmitting = true;
      console.log('Sign In:', this.signInForm.value);
      setTimeout(() => {
        this.isSubmitting = false;
        // Redirect or show success message
      }, 1500);
    } else {
      this.markFormGroupTouched(this.signInForm);
    }
  }

  // Register Handler
  onSignUp(): void {
    if (this.signUpForm.valid) {
      this.isSubmitting = true;
      console.log('Sign Up:', this.signUpForm.value);
      setTimeout(() => {
        this.isSubmitting = false;
        // Redirect or show success message
      }, 1500);
    } else {
      this.markFormGroupTouched(this.signUpForm);
    }
  }

  // Custom Password Match Validator
  private passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  // Helper to mark all form fields as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Reusable error message generator
  getErrorMessage(controlName: string, form: FormGroup): string {
    const control = form.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return `${this.prettyLabel(controlName)} is required.`;
      if (control.errors['email']) return 'Please enter a valid email.';
      if (control.errors['minlength']) {
        return `${this.prettyLabel(controlName)} must be at least ${control.errors['minlength'].requiredLength} characters.`;
      }
      if (form.errors?.['passwordMismatch'] && controlName === 'confirmPassword') {
        return 'Passwords do not match.';
      }
    }
    return '';
  }

  // Helper for readable field names
  private prettyLabel(name: string): string {
    switch (name) {
      case 'email': return 'Email';
      case 'password': return 'Password';
      case 'confirmPassword': return 'Confirm Password';
      case 'fullName': return 'Full Name';
      case 'terms': return 'Terms & Conditions';
      default: return name;
    }
  }
}
