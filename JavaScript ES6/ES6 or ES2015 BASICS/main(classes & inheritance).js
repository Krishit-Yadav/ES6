"use strict"

class User{
  constructor(Username, Email, Password, DOB){
    this.Username = Username;
    this.Email = Email;
    this.Password = Password;
    this.DOB = DOB;
  }

  static countUsers(){
    console.log('There are 100 users in our recent 2020 database');
  }


  register(){
  console.log(this.Username+' is now registered in our database');
  }
}

/*
let Ankit = new User('Ankit_akd', 'ankitkumar@gmail.com', 'Ankit0123Kum@r', '6/7/1998');
let Sairam = new User('Sairam_srm', 'sairam555@gmail.com', 'Sairam0123Jkp@pers', '10/10/1998');
let Suraj = new User('Suraj_skk', 'Surajkumar@gmail.com', 'Suraj0123Kum@r', '21/2/1999');

Ankit.register();
Sairam.register();
Suraj.register();
*/
//User.countUsers();


class Member extends User{
  constructor(Username, Email, Password, DOB, MemberPackage){
    super(Username, Email, Password, DOB);
    this.MemberPackage = MemberPackage;
  }

  getPackage(){
    console.log(this.Username+' is Subscribed to the '+this.MemberPackage+' package ');
  }
}

let Ankita = new Member('Ankita_akd', 'ankitakumari@gmail.com', 'Ankita0123Kum@ri', '8/12/1998', 'Premium');
Ankita.register();
Ankita.getPackage();
