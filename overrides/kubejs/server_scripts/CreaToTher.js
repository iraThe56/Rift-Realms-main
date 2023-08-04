
ServerEvents.recipes(event => {
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": { "item": "create:copper_sheet"},
            "B": { "item": "ae2:silicon"},
            "C": { "item": "createaddition:zinc_sheet"}
        },
        "pattern": [
            "A",
            "B",
            "C"
        ],
        "result": {
            "count": 1,
            "item": "createaddition:capacitor"
        }
    })
    event.remove({ output: 'createaddition:capacitor' });
    //----------------------------------------------------------------------------------------
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": { "item": "minecraft:redstone" },
            "B": { "item": "createaddition:iron_rod" }
        },
        "pattern": [
            "ABA",
            " B ",
            "ABA"
        ],
        "result": {
            "count": 1,
            "item": "thermal:redstone_servo"
        }
    })
    event.remove({ output: 'thermal:redstone_servo' });
    //----------------------------------------------------------------------------------------
    event.replaceInput(
        { output: 'thermal:machine_furnace' },
        'thermal:rf_coil',
        'thermal:redstone_servo'
    )
    event.replaceInput(
        { output: 'thermal:machine_sawmill' },
        'thermal:rf_coil',
        'thermal:redstone_servo'
    )
    event.replaceInput(
        { output: 'thermal:machine_bottler' },
        'thermal:rf_coil',
        'thermal:redstone_servo'
    )
    //----------------------------------------------------------------------------------------
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "minecraft:redstone"
            }
        ],
        "results": [
            {
                "amount": 100,
                "fluid": "thermal:redstone"
            }
        ]
    })
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "minecraft:redstone_block"
            }
        ],
        "results": [
            {
                "amount": 100*9,
                "fluid": "thermal:redstone"
            }
        ]
    })
    //----------------------------------------------------------------------------------------
    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "createaddition:gold_rod" },
            { "item": "kubejs:redstone_spool" }
        ],
        "results": [
            { "item": "thermal:rf_coil" }
        ]
    })
    event.remove({id: 'thermal:rf_coil' });
    //----------------------------------------------------------------------------------------
    event.recipes.thermal.bottler('kubejs:redstone_wire', ['createaddition:copper_wire', Fluid.of('thermal:redstone', 144)])
    //----------------------------------------------------------------------------------------
    event.shaped(
        Item.of('kubejs:redstone_spool', 1), // arg 1: output
        [
            ' A ',
            'ABA', // arg 2: the shape (array of strings)
            ' A '
        ],
        {
            A: 'kubejs:redstone_wire',
            B: 'createaddition:spool',  //arg 3: the mapping object
        }
    )

})