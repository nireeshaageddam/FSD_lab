function countFrequency(str: string): void {
    let freq: { [key: string]: number } = {};

    for (let ch of str) {
        if (freq[ch]) {
            freq[ch]++;
        } else {
            freq[ch] = 1;
        }
    }

    console.log("Character Frequencies:");
    for (let ch in freq) {
        console.log(ch + " : " + freq[ch]);
    }
}

let str = "programming";
countFrequency(str);