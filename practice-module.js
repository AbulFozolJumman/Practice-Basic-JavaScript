// Practice Basic JavaScript

// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
// const string = '7';
// const boolean = true;
// const number = 7;

// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
// const number = 7;
// let number2 = 7;
// number2 = 3;
// console.log(number, number2);

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 
// const num1 = 7;
// const num2 = 3;
// const add = num1 + num2;
// const subtraction = num1 - num2;
// const multiply = num1 * num2;
// const division = num1 / num2;
// const remainder = num1 % num2;
// console.log(add, subtraction, multiply, division, remainder);

// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।
// const graterThan = num1 > num2;
// const lessThan = num1 < num2;
// const equalTo = num1 == num2;
// const notEqualTo = num1 != num2;
// const graterThanEqual = num1 >= num2;
// const lessThanEqual = num1 <= num2;
// console.log(graterThan, lessThan, equalTo, notEqualTo, graterThanEqual, lessThanEqual);

// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 
// And
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 
// if (num1 === 7 && num2 === 3) {
//     console.log(true);
// }
// else if(num1 === 3 || num2 === 7){
//     console.log(false);
// }
// else{
//     console.log("N/A")
// }

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 
// let i = 7;
// while(i <= 19) {
//     console.log(i);
//     i+=2;
// }

// ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const arrayLength = array.length;
// console.log(arrayLength);
// array[3] = 14;
// console.log(array);
// array.push(9,10);
// console.log(array);
// array.pop();
// console.log(array);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
// for(let i = 0; i < array.length; i++){
//      const arrayElement = array[i];
//     console.log(arrayElement);
// }

// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
// const array75To85 = [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85];
// for (let i = 0; i < array75To85.length; i++) {
//     const arrayElement = array75To85[i];
//     if(arrayElement >= 80){
//         console.log(arrayElement);
//     }
// }

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 
// function multiplier (num1, num2, num3){
//     const result = num1 * num2 * num3;
//     return result;
// }
// const result = multiplier(3, 3, 3);
// console.log(result);

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
// const object1 = {
//     name: "Ronaldo",
//     age: 28,
//     country: "Portugal"
// }
// object1.name = "Neymar";
// console.log(object1);

// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 
// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// function feetToInch(feet) {
//     const perFeetToInch = 12;
//     const inch = feet * perFeetToInch;
//     return inch;
// }
// const myFeet = 6;
// const feetToInchConvet = feetToInch(myFeet);
// console.log(feetToInchConvet);

// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
// function centimeterToMeter(centimeter) {
//     const perCentimeterToMeter = 0.01;
//     const meter = centimeter * perCentimeterToMeter;
//     return meter;
// }
// const myCentemiter = 500;
// const centimeterToMeterConvet = centimeterToMeter(myCentemiter);
// console.log(centimeterToMeterConvet);

// ৩. আরেকটা ফাংশন লিখবে যেটার নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
// function paperRequirements(book1, book2, book3) {
//     const book1PagesRequirements = 100;
//     const book2PagesRequirements = 200;
//     const book3PagesRequirements = 300;
//     const book1TotalPages = book1 * book1PagesRequirements;
//     const book2TotalPages = book2 * book2PagesRequirements;
//     const book3TotalPages = book3 * book3PagesRequirements;
//     const totalPages = book1TotalPages + book2TotalPages + book3TotalPages;
//     return totalPages;
// }
// const totalBookPages = paperRequirements(3, 2, 1);
// console.log(totalBookPages);

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
// const friends = ["Abir", "Sakib", "Raihan", "Zobu"];
// function bestFriend(friends) {
//     let biggestName = friends[0];
//     for (let i = 0; i < friends.length; i++) {
//         const friend = friends[i];
//         // console.log(friend);
//         if (biggestName.length < friend.length){
//             biggestName = friend
//         }
//     }
//     return biggestName;
// }
// const myBestFriend = bestFriend(friends);
// console.log(myBestFriend);

// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
const numbers = [1, 2, 3, 4, 5, -6, -7, -8, 9];
function findPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        // console.log(number);
        if (number >= 0) {
            positiveNumbers.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumbers;
}
const positiveNumbersArray = findPositiveNumbers(numbers);
console.log(positiveNumbersArray);