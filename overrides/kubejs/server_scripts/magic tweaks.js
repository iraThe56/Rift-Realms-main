
ServerEvents.recipes(event => { //listen for the "recipes" server event.
    
    event.remove({ type: 'ars_nouveau:imbuement', input: 'minecraft:lapis_lazuli' })

    console.log('Hello! The recipe event has fired!')
})