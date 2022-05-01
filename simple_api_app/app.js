const data = require("./data.json");

for (let i = 0; i < data.length; i++){
    let { name, age, programming_level } = data[i];
    console.log(programming_level);
}
