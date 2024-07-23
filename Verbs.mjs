
let counter = 0

function getCounter(){
    counter++
    return `Test ${counter} -`
}

function throwsAnError(bool=true){
    if(bool)
        return 'successfully threw an error'
    else
        return 'did NOT throw an error'
}

function contains(bool=true){
    if(bool)
        return 'contains'
    else 
        return 'does NOT contain'
}

function did(bool=true){
    if(bool)
        return 'did'
    else
        return 'did NOT'
}

function does(bool=true){
    if(bool)
        return 'does'
    else
        return 'does NOT'
}

function have(bool=true){
    if(bool)
        return 'have'
    else
        return 'NOT have'
}

function has(bool=true){
    if(bool)
        return 'has'
    else
        return 'does NOT have'
}

function is(bool=true){
    if(bool)
        return 'is'
    else
        return 'is NOT'
}

function isCloseTo(bool=true){
    if(bool)
        return 'is close to'
    else 
        return 'is NOT close to'
}

function isInteger(bool=true){
    if(bool)
        return 'is an integer'
    else 
        return 'is not an integer'
}

function matches(bool=true){
    if(bool)
        return 'matches'
    else
        return 'does not match'
}

function recognizes(bool=true){
    if(bool)
        return 'recognizes'
    else
        return 'does not recognize'
}

export {
    getCounter,
    throwsAnError,
    contains,
    did,
    does,
    have,
    has,
    is,
    isCloseTo,
    isInteger,
    matches,
    recognizes
}

