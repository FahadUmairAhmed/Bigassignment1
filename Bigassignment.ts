//1
let personname:string="fahad";
console.log("Hello",personname,"Are you fine?")
//2
let lowercase:string=personname.toLowerCase();
let uppercase:string=personname.toUpperCase();
const  titlecase=personname.split(" ").map((l:string)=> l[0].toUpperCase()+l.substr(1)).join(" ");
console.log(lowercase);
console.log(uppercase);
console.log(titlecase);
//3
let author:string="Neil Armstrong";
let quote:string="That's one small step for a man,a giant leap for mankind.";
console.log(author,"once said", quote);
//4
let famous_person:string="Theodore Roosevelt";
const message:string ="Speak softly and carry a big stick";
console.log(famous_person,"",message)
//5
let personname1:string="\t  Fahad  \n";
let stripped:string= personname1.trim()
console.log("Stripped Name",stripped)
//6
let add:number=4+4;
let sub:number=12-4;
let multy:number=4*2;
let divide:number=16/2;
console.log(add,sub,multy,divide);
//7
console.log(4+4);
console.log(4*2);
console.log(16-8);
console.log(64/8);
//8
let favnumber:number=8;
let message1: string | number=`Favorite Number is ${favnumber}`;
console.log(message1);
//9
//let num:number[]=[1,2,3,4,5]
//10
let friendname:string[]=["Ali","Ahmed","Hasan"];
console.log(friendname[0]);
console.log(friendname[1]);
console.log(friendname[2])
//11
let message2:string="Are you good?";
console.log(friendname[0],message2);
//12
let favtransport:string[]=["Car","Bike"];
favtransport.forEach((favtransport:string)=>
{console.log(`I would like to own Honda ${favtransport}`)}
);
//13
let invitetodinner:string[]=["Umair","Umar","Alex"];
invitetodinner.forEach((invitetodinner:string)=>
{console.log(`${invitetodinner} I would like to invite you to dinner`)}
);
//14
console.log(`${invitetodinner[1]} Can't come to dinner`);
invitetodinner.splice(1,1,"Ali")
console.log(invitetodinner);
invitetodinner.forEach((invitetodinner:string)=>
{console.log(`${invitetodinner} I would like to invite you to dinner`)});
//15
console.log(`${invitetodinner} We have arranged big space so we can add more`);
invitetodinner.unshift("Haider");
invitetodinner.splice(1,0,"Ahmed");
invitetodinner.push("Robin");
invitetodinner.forEach((invitetodinner:string)=>{
console.log(`${invitetodinner} You are invited to dinner.`);})
//16
console.log(`${invitetodinner} Sorry to let you know that the new table won't arrive in time.So will have space foronly 2 guests`);
console.log(invitetodinner.pop(),"Sorry can't invite");
console.log(invitetodinner.pop(),"Sorry can't invite");
console.log(invitetodinner.pop(),"Sorry can't invite");
console.log(invitetodinner.pop(),"Sorry can't invite");
invitetodinner.forEach((invitetodinner:string)=>{
    console.log(`${invitetodinner} You are invited for dinner`);
});
invitetodinner.pop();
invitetodinner.pop();
console.log(invitetodinner);
//17
let favplaces:string[]=["Rome","Greece","Canada","Paris","America"];
let alphaorder:string[]=favplaces.sort();
let reverse:string[]=favplaces.reverse();
console.log(favplaces);
console.log(alphaorder);
console.log(reverse);
console.log(favplaces);
favplaces.reverse();
console.log(favplaces);
favplaces.reverse();
console.log(favplaces);
favplaces.sort();
console.log(favplaces);
favplaces.reverse();
console.log(favplaces);
//18
console.log(`${invitetodinner.length} are invited to dinner`)
//19
let arraystore:string[]=["Urdu","Punjabi","Pashto","English","Saraiki"];
arraystore.forEach((language,index)=>{
    console.log(`${index+1}.${language}`)
});
//20
const arraystoreobjects=arraystore.map((language)=>({
    name:language,
    local:true,
    popularity:"high",
}));
console.log(arraystoreobjects);
//21
console.log(arraystore[7], "Index Error");
console.log(arraystore[3],"Correction");
//22
let car=`Suzuki`;
console.log("Is car == suzuki, I predict True");
console.log(car==`Suzuki`);
console.log(car==`Mazda`);
let bike=`Honda`;
console.log("Is bike == Honda, I predict True");
console.log(bike==`Honda`);
console.log(bike==`Yamaha`);
let bowl=`Tennis`;
console.log("Is bowl == Tennis, I predict True");
console.log(bowl==`Tennis`);
console.log(bowl==`Hard Ball`);
let vape=`Pod System`;
console.log("Is vape == Pod System, I predict True");
console.log(vape==`Pod System`);
console.log(vape==`Tank Mod`);
let favnum=8;
console.log("Is favnum == 8, I predict True");
console.log(favnum==8);
console.log(favnum==9);
//23
let bat=`Hardball`;
console.log("Test equality and inequality in strings");
console.log(bat==`Hardball`);
console.log(bat!=`Hardball`);
bat.toLowerCase();
console.log("Test using lower case");
console.log(bat==`Hardball`);
console.log(bat==`hardball`);
let a=5;
let b=7;
console.log("Numerical Tests");
console.log(a==b);
console.log(b>a);
console.log(a<=b);
let PakistanWon=true;
let Pakistanlost=false;
console.log("Test using and or operator");
console.log(PakistanWon&&Pakistanlost);
console.log(PakistanWon||Pakistanlost);
let array1=["Cat","Mouse","Tiger"];
console.log("Test item in array");
console.log(array1.includes("Cat"));
console.log(array1.includes("Lion"));
//24
let alien_color="Green";
if (alien_color==="Green") {
    console.log("Player has earned 5 points");
};
if (alien_color==="black") {
    console.log("Player has earned 5 points");
};
//25
if (alien_color==="Green") {
    console.log("Player has earned 5 points");
} else {
    console.log("Player has earned 10 points");
};
if (alien_color==="Yellow") {
    console.log("Player has earned 5 points");
} else {
    console.log("Player has earned 10 points");
};
//26
if (alien_color==="Green") {
    console.log("Player has earned 5 points");
} else if(alien_color==="Yellow"){
    console.log("Player has earned 10 points");
}else if(alien_color==="Red"){
    console.log("Player has earned 15 points");
};
alien_color="Yellow";
if (alien_color==="Green") {
    console.log("Player has earned 5 points");
} else if(alien_color==="Yellow"){
    console.log("Player has earned 10 points");
}else if(alien_color==="Red"){
    console.log("Player has earned 15 points");
};
alien_color="Red";
if (alien_color==="Green") {
    console.log("Player has earned 5 points");
} else if(alien_color==="Yellow"){
    console.log("Player has earned 10 points");
}else if(alien_color==="Red"){
    console.log("Player has earned 15 points");
};
//27
let age=1;
if (age<=2) {
    console.log("Person is Baby");
} else if(age>=2&&age<=4){
    console.log("Person is toddler");
}else if(age>=4&&age<=13){
    console.log("Person is a Kid");
}else if(age>=13&&age<=20){
    console.log("Person is Teenager");
}else if(age>=20&&age<=65){
    console.log("Person is Adult");
};
age=3;
if (age<=2) {
    console.log("Person is Baby");
} else if(age>=2&&age<=4){
    console.log("Person is toddler");
}else if(age>=4&&age<=13){
    console.log("Person is a Kid");
}else if(age>=13&&age<=20){
    console.log("Person is Teenager");
}else if(age>=20&&age<=65){
    console.log("Person is Adult");
};
age=9;
if (age<=2) {
    console.log("Person is Baby");
} else if(age>=2&&age<=4){
    console.log("Person is toddler");
}else if(age>=4&&age<=13){
    console.log("Person is a Kid");
}else if(age>=13&&age<=20){
    console.log("Person is Teenager");
}else if(age>=20&&age<=65){
    console.log("Person is Adult");
};
age=14;
if (age<=2) {
    console.log("Person is Baby");
} else if(age>=2&&age<=4){
    console.log("Person is toddler");
}else if(age>=4&&age<=13){
    console.log("Person is a Kid");
}else if(age>=13&&age<=20){
    console.log("Person is Teenager");
}else if(age>=20&&age<=65){
    console.log("Person is Adult");
};
age=40;
if (age<=2) {
    console.log("Person is Baby");
} else if(age>=2&&age<=4){
    console.log("Person is toddler");
}else if(age>=4&&age<=13){
    console.log("Person is a Kid");
}else if(age>=13&&age<=20){
    console.log("Person is Teenager");
}else if(age>=20&&age<=65){
    console.log("Person is Adult");
};
//28
let fav_fruits=["Mango","Apple","Grapes"];
if (fav_fruits.includes("Mango")) {
    console.log("You really like Mangoes");
};
if (fav_fruits.includes("Banana")) {
    console.log("You really like Banana");
};
if (fav_fruits.includes("Apple")) {
    console.log("You really like Apples");
};
if (fav_fruits.includes("Guava")) {
    console.log("You really like Guavas");
};
if (fav_fruits.includes("Grapes")) {
    console.log("You really like Grapes");
};
//29
let user_names=["Alex","Admin","Robin","Jhon","Eric"];
user_names.forEach((names)=>{
    if (names==="Admin") {
        console.log(`Hello ${names} would you like to see a status report`);        
    }else{
        console.log(`Hello ${names}, Thankyou for logging in again.`);
    };
});
//30
if (user_names.length===0) {
    console.log("We need to find some users");
} else {user_names.forEach((names)=>{
    if (names==="Admin") {
        console.log(`Hello ${names} would you like to see a status report`);        
    }else{
        console.log(`Hello ${names}, Thankyou for logging in again.`);
    };
})};
user_names.splice(0,user_names.length);
console.log(`${user_names} ,All users have been removed`);
//31
let current_users=["Fahad","Umair","Ahmed","Ali","Mahad"];
let new_users=["Hamza","Fahad","Eric","Tom","Jack"];
for (let i = 0; i < new_users.length; i++) if (current_users.includes(new_users[i])) {
    console.log(`Sorry ${new_users[i]} username is taken`);
}else{
    console.log(`${new_users[i]} is available`);  
};
current_users.map((info)=>info.toLowerCase());
new_users.map((info)=>info.toLowerCase());
//32
let ordinal_num=[1,2,3,4,5,6,7,8,9];
ordinal_num.forEach((value)=>{
let ending:string;
if (value==1) {
    ending="st";
}else if (value==2) {
    ending="nd";
} else if(value==3){
    ending="rd";
} else {
    ending="th";}
    console.log(`${ordinal_num} ${ending}`);
});
//33
let pizza:string[]=["Pepporoni Pizza","Peri Peri Pizza","Malai Boti Pizza"];
pizza.forEach((value)=>{
    for (let i = 0; i < pizza.length; i++) {
        console.log(`${pizza[i]}`);  
    }
});
for (let i = 0; i < pizza.length; i++) {
    console.log( ` I like ${pizza[i]} pizza.`);
};
console.log("I love malaii boti pizza");
console.log("Peri Peri Pizza is the best in the world");
console.log("Peperoni pizza dough is awesome");
console.log("I rally love Pizza");
//34
let animals:string[]=["Cat","Dog","Parrots"];
for (let i = 0; i < animals.length; i++) {
    console.log(` ${animals[i]}`);
};
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} is a good pet`);
};
console.log("Common thing is they are great household pets");
//35
function make_shirt(size:number,text:string) {
    console.log(`The size is ${size}.
     the text printed on shirt will be ${text} `)
};
console.log(make_shirt(7,"Nike"));
//36
const shirt=(size:string="Large",text:string="I love typescript"): void=> {
    console.log(`Shirt size id ${size} and the message is ${text}`)
};
shirt();
shirt("Medium");
shirt("Small","Awesome");
//37
function describe_city(city:string,country:string) {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi","Pakistan");
describe_city("Frankfurt","Germany");
//describe_city("KIck"); Not a default country
//38
function city_country(city:string,country:string) {
    console.log(`${city},${country}`);
};
city_country("Lahore","Pakistan");
city_country("Delhi","India");
city_country("Kabul","Afghanistan");
//39
type Album={
    Artistname:string;
    Artisttitle:string;
    tracks?:number;
};
//const make_album=(artist:string,album:string,track?:number):Album=>{
  //  let a:Album={Artistname,Artisttitle};
//}




































