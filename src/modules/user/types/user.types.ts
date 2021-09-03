import { HttpStatus } from '@nestjs/common';

export interface RegisterResponse {
  error?: string;
  status: HttpStatus;
  token?: string;
}

export interface LoginResponse {
  error?: string;
  status: HttpStatus;
  token?: string;
}

export interface ConfirmEmailResponse {
  error?: string;
  status: HttpStatus;
  token?: string;
  message?: string;
}
