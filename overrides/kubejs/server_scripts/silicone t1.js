
ServerEvents.recipes(event => { //listen for the "recipes" server event.

    

    event.shaped(
        Item.of('thermal:machine_frame'), // arg 1: output
        [
            'BCB',
            'AED', // arg 2: the shape (array of strings)
            'BCB'
        ],
        {
            A: 'createaddition:capacitor',
            B: 'thermal:tin_ingot',  //arg 3: the mapping object
            C: 'create:iron_sheet',
            D: 'create:electron_tube',
            E: 'thermal:rf_coil'
        }
    );
    console.log('Hello! The recipe event has fired!')
})