ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:water_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:frostaya_pod',
            'minecraft:snowball',
            Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
            'botania:rune_water',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:water_essence', // output
        2500, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:fire_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:bombegranate_pod',
            'minecraft:coal',
            'alexsmobs:lava_bottle',
            'botania:rune_fire',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:fire_essence', // output
        2500, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:earth_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:mendosteen_pod',
            'minecraft:moss_block',
            'minecraft:mud',
            'botania:rune_earth',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:earth_essence', // output
        2500, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:air_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:feather',
            'quark:bottled_cloud',
            'hexerei:dried_sage_bundle',
            'botania:rune_air',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:air_essence', // output
        2500, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:conjuration_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'hexerei:quicksilver_bottle',
            'hexerei:moon_dust',
            'hexerei:selenite_shard',
            'botania:rune_mana',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:conjuration_essence', // output
        4000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:abjuration_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:bastion_pod',
            'ars_nouveau:source_berry',
            'farmersdelight:milk_bottle',
            'botania:rune_mana',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:abjuration_essence', // output
        4000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );

    event.remove({ output: 'ars_nouveau:manipulation_essence' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'hexerei:wax_blend',
            'hexerei:blood_sigil',
            'hexerei:blood_bottle',
            'botania:rune_mana',
        ], // input items
        'ars_nouveau:source_gem', // reagent
        'ars_nouveau:manipulation_essence', // output
        4000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );



    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            },
            {
                "tag": 'forge:foods/meat/raw'
            }
        ],
        "output": {
            "count": 5,
            "item": "biomancy:flesh_bits"
        },

        "liquidOutput": {
            "fluid": "hexerei:blood_fluid"
        },
        "fluidLevelsConsumed": 0
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": 'hexerei:moon_dust'
            },
            {
                "item": 'hexerei:moon_dust'
            },
            {
                "item": 'thermal:silver_ingot'
            },
            {
                "item": 'minecraft:glass_bottle'
            },
            {
                "item": 'minecraft:glass_bottle'
            },
            {
                "item": 'minecraft:glass_bottle'
            },
            {
                "item": 'thermal:silver_ingot'
            },
            {
                "item": 'hexerei:moon_dust'
            }
        ],
        "output": {
            "count": 3,
            "item": 'hexerei:quicksilver_bottle'
        },
        "liquidOutput": {
            "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 333
    })

    ///--------------------------------------------------------------------------------------------------------
    event.remove({ output: 'ars_nouveau:volcanic_sourcelink' });
    event.shaped(
        Item.of('ars_nouveau:volcanic_sourcelink', 1), // arg 1: output
        [
            'ADA',
            'ACA', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            C: 'ars_nouveau:conjuration_essence',
            D: 'ars_nouveau:fire_essence'
        }
    )

    event.remove({ output: 'ars_nouveau:alchemical_sourcelink' });
    event.shaped(
        Item.of('ars_nouveau:alchemical_sourcelink', 1), // arg 1: output
        [
            'ADA',
            'ACA', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            C: 'ars_nouveau:conjuration_essence',
            D: 'ars_nouveau:manipulation_essence'
        }
    )

    event.remove({ output: 'ars_nouveau:vitalic_sourcelink' });
    event.shaped(
        Item.of('ars_nouveau:vitalic_sourcelink', 1), // arg 1: output
        [
            'ADA',
            'ACA', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            C: 'ars_nouveau:conjuration_essence',
            D: 'ars_nouveau:earth_essence'
        }
    )

    event.remove({ output: 'ars_nouveau:mycelial_sourcelink' });
    event.shaped(
        Item.of('ars_nouveau:mycelial_sourcelink', 1), // arg 1: output
        [
            'ADA',
            'ACA', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            C: 'ars_nouveau:conjuration_essence',
            D: 'ars_nouveau:water_essence'
        }
    )

    event.remove({ output: 'ars_nouveau:agronomic_sourcelink' });
    event.shaped(
        Item.of('ars_nouveau:agronomic_sourcelink', 1), // arg 1: output
        [
            'ADA',
            'A A', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'ars_nouveau:sourcestone',
            D: '#forge:seeds'
        }
    )
    ///--------------------------------------------------------------------------------------------------------
    event.remove({ output: 'ars_nouveau:novice_spell_book' });
    event.shapeless(
        Item.of('ars_nouveau:novice_spell_book', 1), // arg 1: output
        [
            'minecraft:enchanted_book',
            'botania:manasteel_shovel',
            'botania:manasteel_pick',
            'botania:manasteel_axe',
            'botania:manasteel_sword'
        ]
    )
    ///--------------------------------------------------------------------------------------------------------
    /// Cloud
    event.recipes.botania.pure_daisy('twilightforest:wispy_cloud', 'minecraft:snow_block')
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "item": 'twilightforest:wispy_cloud'
            },
            {
                "item": 'minecraft:glass_bottle'
            }
        ],
        "results": [
            {
                "item": 'quark:bottled_cloud'
            }
        ]
    })
    ///--------------------------------------------------------------------------------------------------------
    ///Belt of Unstable Gifts
    event.remove({ output: 'ars_nouveau:belt_of_unstable_gifts' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:glowstone_dust',
            'minecraft:redstone',
            'minecraft:brewing_stand',
            'minecraft:nether_wart',
            'minecraft:sugar',
            'minecraft:fermented_spider_eye',
            'minecraft:blaze_powder',
            'ars_nouveau:conjuration_essence',
        ], // input items
        'ars_nouveau:mundane_belt', // reagent
        'ars_nouveau:belt_of_unstable_gifts', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Flask Cannon
    event.remove({ output: 'ars_nouveau:splash_flask_cannon' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'minecraft:blaze_rod',
            'minecraft:blaze_rod',
            'minecraft:gunpowder',
            'minecraft:gunpowder',
            'minecraft:gunpowder',
            'ars_nouveau:conjuration_essence',
        ], // input items
        'ars_nouveau:mundane_belt', // reagent
        'ars_nouveau:splash_flask_cannon', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Enchanter's Wand
    event.remove({ output: 'ars_nouveau:wand' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_gem',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'ars_nouveau:conjuration_essence',
            'ars_nouveau:manipulation_essence',
        ], // input items
        'riftrealmscore:true_archwood', // reagent
        'ars_nouveau:wand', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Scryers Oculus
    event.remove({ output: 'ars_nouveau:scryers_oculus' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'minecraft:observer',
            'minecraft:spyglass',
            'ars_nouveau:source_gem_block',
            'ars_nouveau:conjuration_essence'
        ], // input items
        'minecraft:ender_eye', // reagent
        'ars_nouveau:scryers_oculus', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Amulet of Mana Regen
    event.remove({ output: 'ars_nouveau:amulet_of_mana_regen' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:source_gem_block',
            'minecraft:gold_ingot',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:water_essence'
        ], // input items
        'ars_nouveau:dull_trinket', // reagent
        'ars_nouveau:amulet_of_mana_regen', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Amulet of Mana Boost
    event.remove({ output: 'ars_nouveau:amulet_of_mana_boost' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:source_gem_block',
            'botania:mana_diamond',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:abjuration_essence'
        ], // input items
        'ars_nouveau:dull_trinket', // reagent
        'ars_nouveau:amulet_of_mana_boost', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Enchanters Shield
    event.remove({ output: 'ars_nouveau:enchanters_shield' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:source_gem_block',
            'ars_nouveau:source_gem_block',
            'ars_nouveau:abjuration_essence',
            'minecraft:gold_block',
            'minecraft:gold_block'
        ], // input items
        'minecraft:shield', // reagent
        'ars_nouveau:enchanters_shield', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Enchanters Shield
    event.remove({ output: 'ars_nouveau:magebloom_crop' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:source_gem',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:source_gem',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:source_gem',
            'ars_nouveau:manipulation_essence'
        ], // input items
        '#forge:seeds', // reagent
        'ars_nouveau:magebloom_crop', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Enchanters Mirror
    event.remove({ output: 'ars_nouveau:enchanters_mirror' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:abjuration_essence',
            'riftrealmscore:true_archwood',
            'riftrealmscore:true_archwood',
            'minecraft:gold_ingot',
            'minecraft:gold_ingot',
            'minecraft:glass',
            'minecraft:glass'
        ], // input items
        'ars_nouveau:source_gem_block', // reagent
        'ars_nouveau:enchanters_mirror', // output
        5000, // source cost
    // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:jar_of_light' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:fire_essence',
            'minecraft:shroomlight',
            'minecraft:glowstone',
            'minecraft:torch'
        ], // input items
        'slimy_stuff:glass_jar', // reagent
        'ars_nouveau:jar_of_light', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:void_jar' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:fire_essence',
            'minecraft:netherrack',
            'ars_nouveau:source_gem_block',
            'minecraft:obsidian'
        ], // input items
        'slimy_stuff:glass_jar', // reagent
        'ars_nouveau:void_jar', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

/*    event.shapeless(
        Item.of('ars_nouveau:magebloom_crop', 1), // arg 1: output
        [
            'ars_nouveau:magebloom'
        ]
    )*/

    event.remove({ output: 'ars_nouveau:apprentice_spell_book' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:earth_essence',
            'ars_nouveau:water_essence',
            'ars_nouveau:fire_essence',
            'ars_nouveau:air_essence',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:conjuration_essence',
            'minecraft:gold_block'

        ], // input items
        'ars_nouveau:novice_spell_book', // reagent
        'ars_nouveau:apprentice_spell_book', // output
        10000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:archmage_spell_book' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'kubejs:aether',
            'botania:ender_air_bottle',
            'kubejs:aether',
            'ars_nouveau:wilden_tribute',
            'kubejs:aether',
            'botania:dragonstone_block',
            'kubejs:aether',
            'minecraft:nether_star'
        ], // input items
        'ars_nouveau:apprentice_spell_book', // reagent
        'ars_nouveau:archmage_spell_book', // output
        10000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );
    ///--------------------------------------------------------------------------------------------------------
    ///Moon Dust Rework
    event.remove({ output: 'hexerei:moon_dust' });
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:glowstone_dust"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:glowstone_dust"
            }
        ],
        "output": {
            "item": "hexerei:moon_dust",
            "count": 8
        },
        "liquidOutput": {
            "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 333,
        "moonRequirement": "full_moon"
    })
    ///--------------------------------------------------------------------------------------------------------
    ///Selenite Crafting
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:milk"
        },
        "ingredients": [
            {
                "tag": "forge:gems/quartz"
            },
            {
                "item": 'hexerei:moon_dust'
            },
            {
                "tag": "forge:gems/quartz"
            },
            {
                "item": 'hexerei:moon_dust'
            },
            {
                "tag": "forge:gems/quartz"
            },
            {
                "item": 'hexerei:moon_dust'
            },
            {
                "tag": "forge:gems/quartz"
            },
            {
                "item": 'hexerei:moon_dust'
            }
        ],
        "output": {
            "item": 'hexerei:selenite_shard',
            "count": 4
        },
        "liquidOutput": {
            "fluid": "minecraft:milk"
        },
        "fluidLevelsConsumed": 1000,
        "moonRequirement": "new_moon",
        "heatRequirement": "heated",
    })

    event.recipes.botania.petal_apothecary('kubejs:flowering_heart',
        [
            "botania:white_petal",
            "botania:orange_petal",
            "botania:magenta_petal",
            "botania:light_blue_petal",
            "botania:yellow_petal",
            "botania:lime_petal",
            "botania:pink_petal",
            "botania:gray_petal",
            "botania:light_gray_petal",
            "botania:cyan_petal",
            "botania:purple_petal",
            "botania:blue_petal",
            "botania:brown_petal",
            "botania:green_petal",
            "botania:red_petal",
            "botania:black_petal"
        ])

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "kubejs:world_spirit"
        },
        "ingredients": [
            {
                "item": 'kubejs:flowering_heart'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            },
            {
                "tag": 'regions_unexplored:prismarite_crystals'
            }
        ],
        "output": {
            "item": 'kubejs:terra_heart',
            "count": 1
        },
        "liquidOutput": {
            "fluid": "kubejs:world_spirit"
        },
        "fluidLevelsConsumed": 1000
    })

    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "starbunclemania:source_fluid"
        },
        "ingredients": [
            {
                "item": 'botania:mana_powder'
            },
            {
                "item": 'ars_nouveau:air_essence'
            },
            {
                "item": 'ars_nouveau:earth_essence'
            },
            {
                "item": 'ars_nouveau:fire_essence'
            },
            {
                "item": 'ars_nouveau:water_essence'
            },
            {
                "item": 'ars_nouveau:conjuration_essence'
            },
            {
                "item": 'ars_nouveau:abjuration_essence'
            },
            {
                "item": 'ars_nouveau:manipulation_essence'
            }
        ],
        "output": {
            "item": 'kubejs:aether',
            "count": 1
        },
        "liquidOutput": {
            "fluid": "kubejs:world_spirit"
        },
        "fluidLevelsConsumed": 1000
    })

    event.shaped(
        Item.of('twilightforest:moon_dial', 1), // arg 1: output
        [
            'ABA',
            'ACA', // arg 2: the shape (array of strings)
            'ADA'
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:chain',  //arg 3: the mapping object
            C: 'minecraft:clock',
            D: 'minecraft:glass'
        }
    )

    event.remove({ output: 'ars_nouveau:summon_focus' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:wilden_tribute',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:wilden_wing',
            'ars_nouveau:conjuration_essence',
            'ars_nouveau:wilden_horn'
        ], // input items
        'ars_nouveau:source_gem_block', // reagent
        'ars_nouveau:summon_focus', // output
        10000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:shapers_focus' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'ars_nouveau:wilden_tribute',
            'ars_nouveau:abjuration_essence',
            'botania:terrasteel_block',
            'ars_nouveau:manipulation_essence',
            'minecraft:obsidian',
            'ars_nouveau:conjuration_essence',
            'minecraft:gold_block'
        ], // input items
        'ars_nouveau:source_gem_block', // reagent
        'ars_nouveau:shapers_focus', // output
        10000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:ring_of_greater_discount' });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            'botania:mana_diamond_block',
            'minecraft:blaze_rod',
            'ars_nouveau:source_gem',
            'ars_nouveau:abjuration_essence',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:conjuration_essence',
            'ars_nouveau:source_gem',
            'minecraft:blaze_rod'
        ], // input items
        'ars_nouveau:ring_of_lesser_discount', // reagent
        'ars_nouveau:ring_of_greater_discount', // output
        5000, // source cost
        // true // keep nbt of reagent, think like a smithing recipe    
    );

    event.remove({ output: 'ars_nouveau:imbuement_chamber' });
    event.shaped(
        Item.of('ars_nouveau:imbuement_chamber'), // arg 1: output
        [
            'ABA',
            'A A', // arg 2: the shape (array of strings)
            'BCB'
        ],
        {
            A: 'ars_nouveau:archwood_planks',
            B: 'minecraft:gold_ingot',  //arg 3: the mapping object
            C: 'ars_nouveau:source_gem'
        }
    );


    event.remove({ output: 'ars_nouveau:imbuement_chamber' });




})
