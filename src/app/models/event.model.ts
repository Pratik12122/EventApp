export class Event{
    id:number;
    name:string;
    description:string;
    location:string;
    dateTime:Date;
    speaker:string;
    hide:boolean;

    constructor(id:number,name:string,
                description:string,location:string,speaker?:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.location=location;
        this.dateTime=new Date();
        this.speaker=speaker;
        this.hide=true;
    }
}