type CardDetails={
    readonly name:string;
    cardNumber:number;
    cardDate:string;
    cvv:number;
    expirydate?:string;
}

//This is CardDetails Type where we have decalred name as readonly we cannot modify name and expiry date is option we can pass as optional

let myCCDetails:CardDetails={
    name:'John',
    cardNumber:12345,
    cardDate:"2019-01-16" ,
    cvv:1234
}
//We cannot change name it gives error saying name cannot be changed becaused it is readonly
//myCCDetails.name='asdas';

//If we do not pass expiry date also it will not give error as it optional 



//We can mix types

type cardNumber={
    ccNo:'string';
}

type cardPassword={
    pwd:'string';
}

type cardDetails= cardNumber &&  cardPassword



