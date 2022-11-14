/*jshint esversion: 8 */

interface InterfaceExampleOne {
	a: string,
	b: number,
	c: string | string[],
	d: any
}

interface InterfaceExampleTwo {
	a: number,
	b: number,
	c: string | string[],
}

export {InterfaceExampleOne, InterfaceExampleTwo};
