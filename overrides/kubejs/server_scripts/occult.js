ServerEvents.tags('item', event => {
    // Add the tag 'hexirie:tallow_mealtable' to 'hexirie:tallow' and 'delightful:animal_fat'
    // event.add('hexerei:tallow_meltable', 'occultism:tallow')
    event.add('hexerei:tallow_meltable', 'delightful:animal_fat')
})
ServerEvents.recipes(event => {
//     event.custom({
//         "type": "hexerei:dipper",
//         "liquid": {
//             "fluid": "hexerei:tallow_fluid"
//         },
//         "input": {
//             "item": "botania:mana_string"
//         },
//         "output": {
//             "item": "occultism:candle_white"
//         },
//         "fluidLevelsConsumed": 50,
//         "dippingTimeInTicks": 200,
//         "dryingTimeInTicks": 200,
//         "numberOfDips": 3
//     })
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "starbunclemania:source_fluid"
        },
        "ingredients": [
            {
                "item": "ars_nouveau:fire_essence"
            },
            {
                "item": "botania:mana_powder"
            },
            {
                "item": "ars_nouveau:water_essence"
            },
            {
                "item": "botania:mana_powder"
            },
            {
                "item": "ars_nouveau:earth_essence"
            },
            {
                "item": "botania:mana_powder"
            },
            {
                "item": "ars_nouveau:air_essence"
            },
            {
                "item": "botania:mana_powder"
            }
        ],
        "output": {
            "item": "kubejs:core_arcane_powder"
        },
        "liquidOutput": {
            "fluid": "starbunclemania:source_fluid"
        },
        "fluidLevelsConsumed": 333
    })

    event.shaped(
        Item.of('ars_nouveau:ritual_brazier'), // replace 'a' with the item ID of the desired output
        [
            ' C ',
            'AEA', // arg 2: the shape (array of strings)
            'BDB'
        ],
        {
            A: 'minecraft:glowstone_dust',
            B: 'ars_nouveau:sourcestone',
            C: 'ars_nouveau:source_gem',
            D: 'botania:mana_diamond_block',
            E: 'ars_nouveau:arcane_pedestal'
        }
    );
    let A = 'riftrelmscore:true_archwood';
    let B = '#forge:logs/archwood';

    const rituals = [
        'ritual_awakening',
        'ritual_binding',
        'ritual_burrowing',
        'ritual_challenge',
        'ritual_cloudshaping',
        'ritual_conjure_island_desert',
        'ritual_conjure_island_plains',
        'ritual_containment',
        'ritual_disintegration',
        'ritual_fertility',
        'ritual_flight',
        'ritual_flowering',
        'ritual_forestation',
        'ritual_harvest',
        'ritual_moonfall',
        'ritual_overgrowth',
        'ritual_restoration',
        'ritual_sanctuary',
        'ritual_scrying',
        'ritual_sunrise',
        'ritual_warping',
        'ritual_wilden_summon'
    ];

    // rituals.forEach((ritual) => {
    //     event.replaceInput(
    //         { output: `ars_nouveau:${ritual}` },
    //         '#forge:logs/archwood',
    //         'riftrealmscore:true_archwood'
    //     );
    // });
    // event.custom({
    //     "type": "occultism:ritual",
    //     "ritual_type": "occultism:craft",
    //     "activation_item": {
    //         "item": "occultism:book_of_binding_bound_marid"
    //     },
    //     "pentacle_id": "occultism:craft_marid",
    //     "duration": 240,
    //     "ritual_dummy": {
    //         "item": "occultism:ritual_dummy/craft_stabilizer_tier4"
    //     },
    //     "ingredients": [
    //         {
    //             "item": "occultism:storage_stabilizer_tier3"
    //         },
    //         {
    //             "tag": "forge:storage_blocks/iesnium"
    //         },
    //         {
    //             "item": "minecraft:dragon_head"
    //         },
    //         {
    //             "item": "occultism:spirit_attuned_crystal"
    //         },
    //         {
    //             "item": "occultism:spirit_attuned_crystal"
    //         }
    //     ],
    //     "result": {
    //         "item": "occultism:storage_stabilizer_tier4"
    //     }
    // });






})