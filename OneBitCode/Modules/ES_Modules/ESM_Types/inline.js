export function inline(){
    console.log(`Named inline export
        Sample: EXPORT function salame(){//code}`)
}

export function renamedFunction(){
      console.log(`Renamed funciton inline export
        Sample: EXPORT function salame(){//code}
            IMPORT as otherName from '.file.js'`)
}

export default function defaultInline(){
    console.log(`Default export inline
            Sample:
                EXPORT DEFAULT function salame(){//code}
                IMPORT defaultInline from "./inline.js" 
                OR
                IMPORT someOtherName from "./inline.js"
                someOtherName() // to run the renamed function

                This one doesnt use the curly braces {} ;
                we can rename the function in the import;
                Only one single EXPORT DEFAULT per file;
                Can export annonymous functions; 
        `)
}