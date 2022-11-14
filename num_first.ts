/*jshint esversion: 8 */

interface InterfaceExampleOne {
	a: string,
	b: number,
	c: string | string[],
	d: any
}

interface InterfaceExampleTwo extends Omit<InterfaceExampleOne, "d"| "a">{
	a: number,
	b: number,
	c: string | string[],
}

export {InterfaceExampleOne, InterfaceExampleTwo};
