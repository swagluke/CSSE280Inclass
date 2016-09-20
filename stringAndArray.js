function isBlank(input) {  
    return !input;
}

function stringToArray(input){
    return input.split(" ");
}
function abbreviateName(name) {
    var nameArray = stringToArray(name);
    nameArray[1] = nameArray[1][0]+'.';
    return nameArray.join(' ');
}

function titleCase(input) {
    var stringarr = stringToArray(input);
    var processed = stringarr.map(function (currentVal) {
        currentVal=currentVal[0].toUpperCase()+currentVal.substr(1);
        return currentVal;
    });
    return processed.join(' ');
}

function firstN(array, n){
    if(!n){
        return array[0];
    }
    if(n<0)
        return [];
    return array.slice(0,n);
}
function lastN(array, n){
    if(!n){
        return array[array.length-1];
    }
    if(n>array.length)
        return array;
    return array.slice(array.length-n);
}

function sumPair(numbers, target){
    for(i=0;i<numbers.length-2;i++){
        if(numbers[i]+numbers[i+1]===target){
            return [i,i+1];
        }
    }
    return [-1,-1];
}

function move(array, from, to){
    var save = array.splice(from, 1)[0];
    array.splice(to+1,0,save);
    return array
}