export class Star {
    name?: string;
    surname?: string;
    age?: number;
    photo?: string;
    nationality?: string;
    oscarsNumber?: number;
    profession?: string;
  
    constructor(
      name?: string,
      surname?: string,
      age?: number,
      photo?: string,
      nationality?: string,
      oscarsNumber?: number,
      profession?: string
    ) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.photo = photo;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession;
    }
  }
  