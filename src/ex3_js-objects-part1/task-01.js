'use strict'
var person = {}
person.name = 'Константин'
person.age = 26
person['Любимый стиль музыки'] = 'Джаз'
delete person.age
console.log(person)
