function calcWordFrequencies() {
    const wordMap = new Map();
    
    const input = prompt("Enter a list of words separated by spaces:");
    const words = input.split(" ");
    
    for (const word of words) {
        const normalizedWord = word.toLowerCase();
        if (wordMap.has(normalizedWord)) {
            wordMap.set(normalizedWord, wordMap.get(normalizedWord) + 1);
        } else {
            wordMap.set(normalizedWord, 1);
        }
    }
    
    wordMap.forEach((frequency, word) => {
        console.log(`${word} ${frequency}`);
    });
}

calcWordFrequencies();
