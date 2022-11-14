/*jshint esversion: 8 */

import {InterfaceExampleOne, InterfaceExampleTwo} from './num_first';

interface PropertyObjectOne <T> {
	p1: T,
	p2: T
}

interface PropertyObjectTwo<K> {
	p1: K,
	p2: K
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
