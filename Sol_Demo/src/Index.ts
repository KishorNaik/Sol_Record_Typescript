export type DictionaryExp1<TValue extends unknown>={
    [key:string]:TValue
}

export interface DictionaryExp3<TValue extends unknown>{
    [key:string]:TValue
}


// With Key of

interface Staff{
    name :string;
    salary:number;
}

type StaffJson<T>=Record<keyof Staff,T>;

const Staff:StaffJson<any>={
    name:"Kishor",
    salary:1000
};

const main=():void=>{
    let dictionary:DictionaryExp1<string>={
        Hello:"World"
    };

    //@ts-ignore
    console.log(dictionary['Hello']);


    let dictionaryExp2:Record<string,string>={
        "Hello":"World"
    };

    console.log(dictionaryExp2["Hello"]);

    console.log(JSON.stringify(Staff));
};

main();