import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from './models/event.model';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const Events:Event[]=[
               new Event(1,"Ed Sheeran - Live in Mumbai",
                "Ed Sheeran is coming back to Mumbai on 19th November 2017!.","Mumbai","Ed Sheeran"),

                new Event(2,"Comedy on the Big Mic: Ladies Special",
                "Hello ladies,This is their monthly Comedy on The Big Mic Ladies Special.","Mumbai"),

                new Event(3,"Della Adventure",
                "Lets you enjoy an absolutely thrilling time with a bunch of your friends or family. ","Mumbai"),

                new Event(4,"Kebab Mein Haddi",
                "The aim of this food tour is to give you an outstanding gastronomical experience through the back alleys of South Mumbai","Mumbai"),

                new Event(5,"Museum Visit",
                "As Mumbai's oldest museum, the Dr. Bhau Daji Lad Museum showcases the city's cultural heritage and history through a rare collection","Mumbai")
                
            ];
            return {Events}
           ;
    }
}