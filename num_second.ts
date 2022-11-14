
enum FieldTypes {
	music = "mp3",
	video = "mpg",
	movies = "movie",
	text = "txt"
}

enum FieldTheme {
	sport = "Sport",
	theatre = "Theatre",
	weather	= "Weather",
	it = "IT"
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



function creatField(objField: FieldProps) {
	if (objField.type in FieldTypes){
		console.log(`тип ${objField.type}, тема ${ objField.theme}, размер ${objField.size} `);
	} else {
		console.log("данные не правильные")
	}
}

let objField = {type: "movie",size: "sm", theme: "sport"};
creatField(objField);
