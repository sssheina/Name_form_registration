function check() {
  let div1 = document.getElementById("surname");
  let div2 = document.getElementById("name");
  let div3 = document.getElementById("fatherhood");
  let userNames = document.getElementById("userName").value;
  const userNames1 = userNames.replace(/\s+/g, ' ').trim();
  const array = userNames1.split(' ');
  const surname = array[0];
  const name = array[1];
  const fatherhood = array[2];

  surname.trim();
  name.trim();
  fatherhood.trim();
  console.log (name);

  const surname1 = surname.toLowerCase();
  const name1 = name.toLowerCase();
  const fatherhood1 = fatherhood.toLowerCase();
  console.log (name1);


  const result = surname1.charAt(0).toUpperCase() + surname1.slice(1);
  const result2 = name1.charAt(0).toUpperCase() + name1.slice(1);
  const result3 = fatherhood1.charAt(0).toUpperCase() + fatherhood1.slice(1);
  console.log (result3);


  div1.textContent = (`Surname: ${result}`);
  div2.textContent = (`Name: ${result2}`);
  div3.textContent = (`Middle Name: ${result3}`);
  document.getElementById("userName").value = [""];
}



