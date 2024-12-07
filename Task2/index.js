const { Person, sequelize } = require('./Person');


(async () => {
    await sequelize.sync({ force: true });

    // Добавление объекта Person
    await Person.create({ name: 'John Doe', age: 30 });

    // Обновление объекта Person
    const person = await Person.findOne({ where: { name: 'John Doe' } });
    person.age = 31;
    await person.save();

    // Удаление объекта Person
    await person.destroy();

    console.log('Операции выполнены успешно.');
})();
