import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


const o$ = new Observable(obs => {
  console.log('2. Estoy en el presente.')
  obs.next('3. Sigo en el presente.')
  obs.next('4. Aún en el presente');
  setTimeout(_ => {
    obs.next('6. He viajado al futuro.')
    obs.complete();
  });
});

console.log('1. Inicio suscripción.');

o$.subscribe(console.log);

console.log('5. Ahora');
