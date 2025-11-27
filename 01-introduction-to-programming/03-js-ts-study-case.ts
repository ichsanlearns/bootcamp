{
  let price: number = 1000;
  let discount = 50;
  console.log(typeof discount);
  console.log(price - discount);

  discount = 500;
  console.log(price - discount);

  discount = "abc";
  console.log(typeof discount);
  console.log(price - discount);

  let fullName: string = "abdi";
  let score: number = 100;
  let isValid: boolean = true;
  let phoneNumber: string | number = 85712312321;

  fullName = 1010;
  score = "10";
  isValid = false;
  phoneNumber = 2183218;
  phoneNumber = "+62822828";
}
