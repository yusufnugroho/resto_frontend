// store.js
import {extendObservable,action} from 'mobx';
// import {  } from 'mobx/lib/api/action';

class MainStore {
  constructor(){
    extendObservable(this, {
      counter:0,
    })

    this.increment = action('increment', ()=> {
      console.log("Increment MOBX")
      this.counter = this.counter+1
    }) 
    this.decrement = action('increment', ()=> {
      console.log("Decrement MobX")
      this.counter = this.counter-1
    }) 
  }
}

export default new MainStore();