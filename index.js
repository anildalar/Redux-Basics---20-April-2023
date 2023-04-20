//console.log('OK');
const redux = require('redux');
//const createStore = require('redux').createStore;
const { legacy_createStore  }  = require('redux');

console.log('createStore--->',legacy_createStore);


//1. Actions
/*
    Actions are js object which must contain "type" property many payload
    {
        "type":"",
        payload:""
    }

*/

//2. ActionCreator
/*
    What is Action Creator in redux ?
    ActionCreator are function which returns actions

    function myFunction(){
        return { type:""}
    }
*/
const ADDBYVALUE1='ADDBYVALUE1';
const SUBTRACTBYVALUE1='SUBTRACTBYVALUE1';


//Lets define some action creators
/*
let login = ()=>{
    return {
        type:"LOGIN",
        payload:{
            username:"abc",
            password:"123"
        }
    }
}

let logout = ()=>{
    return {
        type:"LOGOUT"
    }
}
*/


let AddValueBy1 = ()=>{
    return {
        type:ADDBYVALUE1,
        payload:{
           value:1
        }
    }
}

let SubtractValueBy1 = ()=>{
    return {
        type:SUBTRACTBYVALUE1,
        payload:{
           value:1
        }
    }
}

//3. Reducer is a Function
/*
    Accept 
    1. OldState
    2. Actions
    Return new State
*/

let oldState={
    value:0
}

//Lets define the reducer function rootReducer
const rootReducer = (state=oldState,action)=>{
    let newState=state;
    switch(action.type){
        case ADDBYVALUE1:
            return {
                ...newState,
                value: newState.value + action.payload.value
            }
            break;
        case SUBTRACTBYVALUE1:
            return {
                ...newState,
                value: newState.value - action.payload.value
            }
            break;
        case '':
            break;
        default:
    }

    return newState;
} 



//4. Store Global Object

//Lets create the store object for

let storeObject = legacy_createStore(rootReducer)



console.log('storeObject ------>',storeObject);

console.log('currentState before dispatch --->',storeObject.getState());

console.log('currentState --->',storeObject.dispatch(AddValueBy1()));
console.log('currentState --->',storeObject.dispatch(AddValueBy1()));
console.log('currentState --->',storeObject.dispatch(AddValueBy1()));
console.log('currentState --->',storeObject.dispatch(AddValueBy1()));
console.log('currentState --->',storeObject.dispatch(AddValueBy1()));

console.log('currentState --->',storeObject.dispatch(SubtractValueBy1()));
//console.log('currentState --->',storeObject.dispatch({type:"AddValueBy1",payload:1}));
console.log('currentState after dispatch --->',storeObject.getState());


