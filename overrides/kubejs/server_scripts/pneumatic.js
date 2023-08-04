ServerEvents.recipes(event => {

    let compressedSteel = (recipeID) => {
        event.replaceInput(
            { id: recipeID },
            'pneumaticcraft:ingot_iron_compressed',
            'thermal:steel_ingot'
        )
    }

    event.replaceInput(
        { id: 'thermal:machines/smelter/smelter_alloy_steel' },
        'minecraft:iron_ingot',
        'pneumaticcraft:ingot_iron_compressed'
    )

    event.replaceInput(
        { id: 'mekanism:processing/iron/enriched' },
        'minecraft:iron_ingot',
        'pneumaticcraft:ingot_iron_compressed'
    )

    event.replaceInput(
        { output: 'pneumaticcraft:advanced_liquid_compressor' },
        'pneumaticcraft:ingot_iron_compressed',
        'thermal:steel_ingot'
    )

    event.replaceInput(
        { id: 'pneumaticcraft:air_compressor' },
        'pneumaticcraft:reinforced_bricks',
        'pneumaticcraft:compressed_stone'
    )

    event.shaped(
        Item.of('pneumaticcraft:advanced_liquid_compressor', 1), // arg 1: output
        [
            'AAA',
            'ABB',
            'ACA'
        ],
        {
            A: 'thermal:steel_ingot',
            B: 'pneumaticcraft:advanced_pressure_tube',
            C: 'pneumaticcraft:liquid_compressor'
        }
    )

    event.remove({ id: "pneumaticcraft:amadron_tablet" });
    compressedSteel('pneumaticcraft:uv_light_box')
    compressedSteel('pneumaticcraft:sentry_turret')
    compressedSteel('pneumaticcraft:assembly_io_unit_import')
    compressedSteel('pneumaticcraft:reinforced_stone')
    compressedSteel('pneumaticcraft:pneumatic_dynamo')




})