ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'thermal:machine_press' },
        'create:brass_ingot',
        'thermal:electrum_ingot'
    )
    //--------------------------------------------
    event.replaceInput(
        { output: 'thermal:device_potion_diffuser' },
        'minecraft:glass_bottle',
        'thermal:machine_frame'
    )
    event.replaceInput(
        { output: 'thermal:device_potion_diffuser' },
        'thermal:redstone_servo',
        'minecraft:glass_bottle'
    )
    //--------------------------------------------
    event.remove({ output: 'thermal:device_tree_extractor' }),
    //--------------------------------------------
    event.replaceInput(
        { output: 'thermal:device_water_gen' },
        'minecraft:bucket',
        'thermal:machine_frame'
    )
    event.replaceInput(
        { output: 'thermal:device_water_gen' },
        'thermal:redstone_servo',
        'minecraft:bucket'
    )
    //--------------------------------------------
    event.replaceInput(
        { output: 'thermal:device_collector' },
        'minecraft:hopper',
        'thermal:machine_frame'
    )
    event.replaceInput(
        { output: 'thermal:device_collector' },
        'thermal:redstone_servo',
        'minecraft:hopper'
    )
    //--------------------------------------------
    event.replaceInput(
        { output: 'thermal:device_rock_gen' },
        'minecraft:piston',
        'thermal:machine_frame'
    )
    event.replaceInput(
        { output: 'thermal:device_rock_gen' },
        'thermal:redstone_servo',
        'minecraft:piston'
    )
    //--------------------------------------------
    event.replaceInput(
        { output: 'thermal:machine_press' },
        'thermal:constantan_gear',
        'thermal:constantan_ingot'
    )
    //--------------------------------------------
    event.remove({ id: 'thermal:parts/tin_gear' });
    event.remove({ id: 'thermal:parts/lead_gear' });
    event.remove({ id: 'thermal:parts/silver_gear' });
    event.remove({ id: 'thermal:parts/gold_gear' });
    event.remove({ id: 'thermal:parts/nickel_gear' });
    event.remove({ id: 'thermal:parts/bronze_gear' });
    event.remove({ id: 'thermal:parts/electrum_gear' });
    event.remove({ id: 'thermal:parts/invar_gear' });
    event.remove({ id: 'thermal:parts/constantan_gear' });
    event.remove({ id: 'thermal:parts/lumium_gear' });
    event.remove({ id: 'thermal:parts/enderium_gear' });
    event.remove({ id: 'thermal:parts/signalum_gear' });

    event.remove({ id: 'thermal:fire_charge/lumium_ingot_4' });
    event.remove({ id: 'thermal:fire_charge/enderium_ingot_2' });
    event.remove({ id: 'thermal:fire_charge/signalum_ingot_4' });
    event.remove({ id: 'thermal:fire_charge/constantan_ingot_2' });
    event.remove({ id: 'thermal:fire_charge/electrum_ingot_2' });
    event.remove({ id: 'thermal:fire_charge/invar_ingot_3' });

    event.replaceInput(
        { output: 'thermal:machine_crafter' },
        'minecraft:hopper',
        'thermal:machine_frame'
    )
    //--------------------------------------------
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "thermal:rich_slag"
            },
            {
                "amount": 500,
                "fluid": "kubejs:nitric_acid",
                "nbt": {}
            }
        ],
        "results": [
            {
                "amount": 500,
                "fluid": "kubejs:contaminated_solvent"
            }
        ]
    })
    //--------------------------------------------
    event.recipes.thermal.refinery(['kubejs:caustic_mixture',Fluid.of('mekanism:sulfuric_acid', 200)],
        [Fluid.of('kubejs:contaminated_solvent', 1000)])
    //--------------------------------------------
    event.recipes.thermal.centrifuge(['kubejs:radiating_particles', Item.of('thermal:sulfur_dust').withChance(0.2), Item.of('thermal:slag').withChance(0.1)],
        'kubejs:caustic_mixture')
    //--------------------------------------------
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "thermal:copper_dust"
            },
            {
                "item": "thermal:copper_dust"
            },
            {
                "item": "thermal:copper_dust"
            },
            {
                "item": "thermal:silver_dust"
            },
            {
                "item": "kubejs:radiating_particles"
            },
            {
                "amount": 400,
                "fluid": "thermal:redstone",
                "nbt": {}
            }
        ],
        "results": [
            {
                "count": 4,
                "item": "thermal:signalum_dust"
            }
        ]
    })
    //--------------------------------------------
    event.remove({ id: 'thermal:signalum_dust_4' });
    event.remove({ id: 'thermal:machines/smelter/smelter_alloy_signalum' });
    //--------------------------------------------
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "thermal:tin_dust"
            },
            {
                "item": "thermal:tin_dust"
            },
            {
                "item": "thermal:tin_dust"
            },
            {
                "item": "thermal:silver_dust"
            },
            {
                "item": "kubejs:radiating_particles"
            },
            {
                "amount": 500,
                "fluid": "thermal:glowstone",
                "nbt": {}
            }
        ],
        "results": [
            {
                "count": 4,
                "item": "thermal:lumium_dust"
            }
        ]
    })
    //--------------------------------------------
    event.remove({ id: 'thermal:lumium_dust_4' });
    event.remove({ id: 'thermal:machines/smelter/smelter_alloy_lumium' });
    //--------------------------------------------
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "thermal:lead_dust"
            },
            {
                "item": "thermal:lead_dust"
            },
            {
                "item": "thermal:lead_dust"
            },
            {
                "item": "thermal:diamond_dust"
            },
            {
                "item": "kubejs:radiating_particles"
            },
            {
                "amount": 500,
                "fluid": "thermal:ender",
                "nbt": {}
            }
        ],
        "results": [
            {
                "count": 2,
                "item": "thermal:enderium_dust"
            }
        ]
    })
    //--------------------------------------------
    event.remove({ id: 'thermal:enderium_dust_2' });
    event.remove({ id: 'thermal:machines/smelter/smelter_alloy_enderium' });
   
    event.remove({ output: 'thermal:signalum_ingot' });
    event.remove({ output: 'thermal:lumium_ingot' });
    event.remove({ output: 'thermal:enderium_ingot' });

    event.custom({
        "type": "createaddition:charging",
        "input": {
            "item": "thermal:signalum_dust",
            "count": 1
        },
        "result": {
            "item": "thermal:signalum_ingot",
            "count": 1
        },
        "energy": 10000000,
        "conditions": [{
            "type": "forge:mod_loaded",
            "modid": "ae2"
        }]
    })
    event.custom({
        "type": "createaddition:charging",
        "input": {
            "item": "thermal:lumium_dust",
            "count": 1
        },
        "result": {
            "item": "thermal:lumium_ingot",
            "count": 1
        },
        "energy": 10000000,
        "conditions": [{
            "type": "forge:mod_loaded",
            "modid": "ae2"
        }]
    })
    event.custom({
        "type": "createaddition:charging",
        "input": {
            "item": "thermal:enderium_dust",
            "count": 1
        },
        "result": {
            "item": "thermal:enderium_ingot",
            "count": 1
        },
        "energy": 10000000,
        "conditions": [{
            "type": "forge:mod_loaded",
            "modid": "ae2"
        }]
    })
    /*event.remove({ id: 'thermal:compat/biomesoplenty/sawmill_bop_hellbark_logs' })
    event.recipes.thermal.sawmill([Item.of('biomesoplenty:hellbark_planks', 6), Item.of('thermal:sawdust').withChance(0.25),Item.of('minecraft:blaze_powder', 1).withChance(0.2)],'biomesoplenty:hellbark_log')
    event.recipes.thermal.pulverizer([Item.of('thermal:sawdust',6), 'minecraft:blaze_powder',Item.of('minecraft:blaze_powder', 1).withChance(0.5)], 'biomesoplenty:hellbark_log')
*/
}
)

