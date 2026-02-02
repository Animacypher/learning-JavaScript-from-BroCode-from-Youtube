// static = keyword that defines properties or methods that belong to a class rather than the objects created from that class
//          (class own anything static, not the objects)

class Mathhutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(Mathhutil.PI);
console.log(Mathhutil.getDiameter(10));
console.log(Mathhutil.getCircumference(10));
console.log(Mathhutil.getArea(10));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();