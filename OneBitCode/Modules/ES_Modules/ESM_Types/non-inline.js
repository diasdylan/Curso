function group(){
    console.log(`non-inline export`)
}

function exportDefault(){
    console.log(`Export default non-inline`)
}

export {group}

export default exportDefault