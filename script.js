// Parašykite „JavaScript“ funkciją, kuri grąžina perduotą eilutę su raidėmis abėcėlės tvarka.
 
function alphabetOrder(word) {
    return word.split('').sort().join('');
}

console.assert(alphabetOrder('alphabetical') == 'aaabcehillpt');
console.log(alphabetOrder('alphabetical'))