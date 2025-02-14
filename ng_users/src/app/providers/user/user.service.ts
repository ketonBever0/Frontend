import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  isLoading: WritableSignal<boolean> = signal(false);
  users: WritableSignal<Array<any>> = signal([]);
}
