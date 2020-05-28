var objectLanguage = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

function greet(language) {
    for (var languages in objectLanguage) {
        //console.log(Object.keys(objectLanguage));
        //onsole.log(language);
        if (languages == language) {
            return objectLanguage[languages];

        }
    }
    return 'Welcome';
}







console.log(greet('czech'))