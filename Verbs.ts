
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

/** @todo test */
function defined(bool=true){
    if(bool)
        return 'defined'
    else
        return 'undefined'
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

function matches(bool=true){
    if(bool)
        return 'matches'
    else
        return 'does NOT match'
}

function recognizes(bool=true){
    if(bool)
        return 'recognizes'
    else
        return 'does NOT recognize'
}

export {
    getCounter,
    throwsAnError,
    contains,
    defined,
    did,
    does,
    have,
    has,
    is,
    matches,
    recognizes
}

