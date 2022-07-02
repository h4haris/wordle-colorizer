const colorizeWordle = (guessedWord, hiddenWord) => {
    var resultArray = "B".repeat(hiddenWord.length).split('')
    let hiddenWordArray = Array.from(hiddenWord)

    //check for correct letters
    for (var i = 0; i < hiddenWord.length; i++) {
        if (guessedWord[i] === hiddenWord[i]) {
            resultArray[i] = 'G'
        }
    }

    //If all positions are alreay correct then skip below computation
    //otherwise check for incorrect positions
    if (!resultArray.every(x => x === 'G')) {

        //check for incorrect postion letters
        for (var i = 0; i < hiddenWord.length; i++) {
            //skip iteration if already correct
            if (resultArray[i] != 'G') {
                var guessedLetterOccurances = OccurrenceIndexList(guessedWord, guessedWord[i])
                var hiddenLetterOccurances = OccurrenceIndexList(hiddenWordArray.join(''), guessedWord[i])

                //excluding all those indexes which are already 'G', i.e. available in both list
                var tempGuessedLetterOccurances = guessedLetterOccurances.filter(x => !hiddenLetterOccurances.includes(x))
                hiddenLetterOccurances = hiddenLetterOccurances.filter(x => !guessedLetterOccurances.includes(x))
                guessedLetterOccurances = tempGuessedLetterOccurances

                if (hiddenLetterOccurances.length > 0) {
                    while (guessedLetterOccurances.length > 0) {
                        var pos = guessedLetterOccurances.pop()
                        if (pos == i && (guessedLetterOccurances.length === 0) || hiddenLetterOccurances.length > 1) {
                            resultArray[i] = 'Y'
                        }
                    }
                }
            }
        }
    }

    return resultArray.join('')
}

const OccurrenceIndexList = (string, substring) => {
    var counter = 0
    var sub = substring.toLowerCase()
    var str = string.toLowerCase()
    var array = []
    var index = -1

    do {
        index = str.indexOf(sub, index + 1)
        if (index != -1) {
            array[counter++] = index
        }
    } while (index != -1)

    return array
}

console.log(colorizeWordle("alpha", "truck"), '\n') //BBBBB
console.log(colorizeWordle("truck", "truck"), '\n') //GGGGG
console.log(colorizeWordle("truck", "track"), '\n') //GGBGG
console.log(colorizeWordle("track", "crack"), '\n') //BGGGG

console.log(colorizeWordle("mamma", "maxim"), '\n') //GGYBB
console.log(colorizeWordle("reeks", "elder"), '\n') //YYYBB
console.log(colorizeWordle("preen", "alien"), '\n') //BBBGG


console.log(colorizeWordle("alpha", "tacks"), '\n') //YBBBB
console.log(colorizeWordle("toast", "burnt"), '\n') //BBBBG
console.log(colorizeWordle("iiwis", "swift"), '\n') //YBYBY
console.log(colorizeWordle("soils", "abbey"), '\n') //BBBBB
console.log(colorizeWordle("toast", "toast"), '\n') //GGGGG