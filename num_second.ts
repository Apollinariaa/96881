/*jshint esversion: 8 */

enum FieldTheme {
	sport = "Sport",
	theatre = "Theatre",
	weather	= "Weather",
	it = "IT"
}

enum FieldTypes {
	music = "mp3",
	video = "mpg",
	movies = "movie",
	text = "txt"
}


enum FieldSize {
	sm,
	md,
	lg
}

interface FieldProps {
	type: FieldTypes,
	size: keyof typeof FieldSize,
	theme: keyof typeof FieldTheme
}

function creatField(fieldProps: FieldProps) {
	console.log(`тип ${fieldProps.type}, тема ${FieldTheme[fieldProps.theme]}, размер ${FieldSize[fieldProps.size]} `);
}

let objField: FieldProps = {type: FieldTypes.video, size: "sm", theme: "sport"};
creatField(objField);
