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
	type: string,
	size: keyof typeof FieldSize,
	theme: keyof typeof FieldTheme
}

function creatField(fieldProps: FieldProps) {
	if (fieldProps.type in FieldTypes){
		console.log(`тип ${fieldProps.type}, тема ${ fieldProps.theme}, размер ${fieldProps.size} `);
	} else {
		console.log("данные не правильные")
	}
}

let objField: FieldProps = {type: "movie", size: "sm", theme: "sport"};
creatField(objField);
