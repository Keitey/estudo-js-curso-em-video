let data = new Date();
let diaSem = data.getDay();

switch (diaSem) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("segunda");
    break;
  case 2:
    console.log("terça");
    break;
  case 3:
    console.log("quarta");
    break;
  case 4:
    console.log("quinta");
    break;
  case 5:
    console.log("sexta");
  case 6:
    console.log("sábado");
  default:
    console.log("ERRO");
}
