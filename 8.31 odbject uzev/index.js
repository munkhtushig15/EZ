// let Tuya = {
//     undur: 170,
//     jin: 55,
//     nas: 19,
//     huis: "female" 
// }
// let Boldoo = {
//     undur: 180,
//     jin: 75,
//     nas: 19,
//     huis: "male",
//     funtionUm: function hello() {
//         console.log(hi)
//     }
// }

// Tuya.huis = "male";
// Boldoo.huis = "female";
// Boldoo.Surname = "BandiBold"

// console.log("Boldoo = ",Boldoo,"Tuya = ", Tuya);


// class Person {
//     constructor (name, sex, age) {
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//     }
//     printNameOfPerson() {
//         console.log(this.name);
//     }
// }
// let PersonOne = new Person("DayarshilBuyn", "male", 46);

// console.log(PersonOne);


// class AnimeStatus {
//     constructor (Name, Creator, published){
//         this.Name = Name;
//         this.Creator = Creator;
//         this.published = published;
//     }
//     displayAnime() {
//         console.log("Anime name:", this.Name , "; Anime creator:", this.Creator , "; Anime Published:", this.published);
//     }
// }

// let onePiece = new AnimeStatus("OnePiece", "Oda", 1999);

// onePiece.displayAnime();


// class Animal {
//     constructor(hedenHultei, suunTejeelten) {
//       this.hedenHultei = hedenHultei;
//       this.suunTejeelten = suunTejeelten;
//     }
//     print() {
//       console.log("Heden Hultei:", this.hedenHultei, "Suun Tejeelten:", this.suunTejeelten);
//     }
//   }
  
//   class Birds extends Animal {
//     constructor(name, mahaarHoolloh) {
//       super(name, mahaarHoolloh);
//       this.mahaarHoolloh = mahaarHoolloh;
//     }
//     printBird() {
//       console.log(this.mahaarHoolloh);
//     }
//   }
  
// let Burged = new Animal("Hoyr", false)
// let Boljmor = new Animal("Hoyr", true)
  
// Burged.print();

// ---=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=======-----------==-=-=-=-==-=-=-==-=-==-=-=-=-=-==-=-=-=-==-=-=-=--==-[]

//Animal class uusgene: hedenHultei, suunTejeelten
//Birds class animal gsn class-s udamshina. ner, mahaarHoolloh
//birds class ashiglaj burged/ boljmor

class Animal {
    constructor(hedenHultei, suunTejeelten) {
        this.hedenHultei = hedenHultei,
        this.suunTejeelten = suunTejeelten
    }
    print() {
        console.log()
    }
}

class Brirds extends Animal {
    constructor(Ner, mahIdne) {
        this.Ner = Ner,
        this.mahIdne = mahIdne
    }
    printBirds() {
        console.log()
    }
}