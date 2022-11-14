import {InterfaceExampleOne, InterfaceExampleTwo} from './num_first';

interface PropertyObjectOne<P1> {
	p1: P1,
	p2: P1
}

interface PropertyObjectTwo<P2> {
	p1: P2,
	p2: P2
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
