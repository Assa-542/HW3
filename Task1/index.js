const fs = require('fs');
const Person = require('./Person');

// Функция для сериализации объекта Person в файл
function serializePerson(person, filename) {
    const jsonData = JSON.stringify(person);
    fs.writeFileSync(filename, jsonData, 'utf8');
}

// Функция для десериализации объекта Person из файла
function deserializePerson(filename) {
    const jsonData = fs.readFileSync(filename, 'utf8');
    const jsonObject = JSON.parse(jsonData);
    return new Person(jsonObject.name, jsonObject.age);
}

// Пример использования функций сериализации и десериализации
const person = new Person('John Doe', 30);
serializePerson(person, 'person.json');
const deserializedPerson = deserializePerson('person.json');
console.log(deserializedPerson);
