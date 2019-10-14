import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


const o$ = new Observable(obs => {
  obs.next('2. Estoy en el presente.')
  obs.next('3. Sigo en el presente');
  setTimeout(_ => {
    obs.next('5. He viajado al futuro.')
    obs.complete();
  });
})

console.log('1. Inicio');

o$.subscribe(console.log);

console.log('4. Ahora');