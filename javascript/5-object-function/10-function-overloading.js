

function greet(firstName, lastName, language){
    return `${firstName} + ${lastName} I Speak ${language}`;
}


function tamilGreet(language){
    return greet("Jagan", "Javid", language);
}

function englishGreet(language){
    return greet("John", "Doe", language);
}

console.log(englishGreet("EN"));

function test(a, b){
  return {a,b}
}

console.log(test("a", "b"));


