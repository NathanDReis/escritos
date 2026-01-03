import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, user } from '@angular/fire/auth';
import { map } from 'rxjs';

export const loginAuthGuard: CanActivateFn = (route, state) => {
    const auth = inject(Auth);
    const router = inject(Router);

    return user(auth).pipe(
        map(firebaseUser => {
            if (!firebaseUser) return true;
            return router.createUrlTree(['/biblioteca/dashboard']);
        })
    )
};
