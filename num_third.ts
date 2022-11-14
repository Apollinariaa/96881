import {InterfaceExampleOne, InterfaceExampleTwo} from './num_first';

interface PropertyObjectOne<InterfaceExampleOne> {
	p1: InterfaceExampleOne,
	p2: InterfaceExampleOne
}

interface PropertyObjectTwo<InterfaceExampleTwo> {
	p1: InterfaceExampleTwo,
	p2: InterfaceExampleTwo
}


type propertyOne = PropertyObjectOne<InterfaceExampleOne>

const x: propertyOne = {
	p1: {
		a: 'dfgd',
		b: 5,
		c: ['gfgh', 'dfdgd', 'fdgdfgd'],
		d: true
	},
	p2: {
		a: 'fggjfd',
		b: 8,
		c: ['gfgh', 'dfdgd', 'fdgdfgd'],
		d: 777
	}
}

type propertyTwo = PropertyObjectTwo<InterfaceExampleTwo>

const y: propertyTwo = {
	p1: {
		a: 6790,
		b: 5,
		c: ['gfgh', 'dfdgd', 'fdgdfgd'],
	},
	p2: {
		a: 6,
		b: 5,
		c: ['gfgh', 'dfdgd', 'fdgdfgd'],
	}
}
