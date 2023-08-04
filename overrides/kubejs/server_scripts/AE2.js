ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ae2:fluix_covered_cable', 1), // arg 1: output
        [
            'ABA',
            'BCB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'mekanism:hdpe_sheet',
            B: '#minecraft:wool',  //arg 3: the mapping object
            C: 'ae2:fluix_glass_cable'
        }
    )
    event.remove({ id: 'ae2:network/cables/covered_fluix' })

    event.shaped(
        Item.of('ae2:fluix_smart_dense_cable', 1), // arg 1: output
        [
            'ABA',
            'BBB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'mekanism:hdpe_sheet',
            B: 'ae2:fluix_smart_cable',  //arg 3: the mapping object
        }
    )
    event.remove({ id: 'ae2:network/cables/dense_smart_from_smart' })

    event.shaped(
        Item.of('ae2:fluix_covered_dense_cable', 1), // arg 1: output
        [
            'ABA',
            'BBB', // arg 2: the shape (array of strings)
            'ABA'
        ],
        {
            A: 'mekanism:hdpe_sheet',
            B: 'ae2:fluix_covered_cable',  //arg 3: the mapping object
        }
    )
    event.remove({ id: 'ae2:network/cables/dense_covered_fluix' })

    event.shapeless(
        Item.of('ae2:fluix_smart_dense_cable', 4), // arg 1: output
        [
            '4x ae2:fluix_covered_dense_cable',
            'create:electron_tube', 	//arg 2: the array of inputs
            'thermal:lumium_ingot'
        ]
    )
    event.remove({ id: 'ae2:network/cables/dense_smart_fluix' })

    event.shapeless(
        Item.of('ae2:fluix_smart_cable', 4), // arg 1: output
        [
            '4x ae2:fluix_covered_cable',
            'create:electron_tube', 	//arg 2: the array of inputs
            'thermal:lumium_ingot'
        ]
    )
    event.remove({ id: 'ae2:network/cables/smart_fluix' })
    //----------------------------------------------------------------------------------------
    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "A": { "item": "ae2:smooth_sky_stone_block" },
            "B": { "item": "ae2:fluix_crystal" },
            "C": { "item": "thermal:signalum_ingot" },
            "D": { "item": "create:electron_tube" },
            "E": { "item": "createaddition:capacitor" },
            "F": { "item": "ae2:engineering_processor" }
        },
        "pattern": [
            "ABCBA",
            "BDEDB",
            "CEFEC",
            "BDEDB",
            "ABCBA"
        ],
        "result": {
            "count": 1,
            "item": "ae2:controller"
        }
    })
    event.remove({ output: 'ae2:controller' })
    //----------------------------------------------------------------------------------------
    event.replaceInput({ output: 'ae2:quantum_ring' },
        'minecraft:iron_ingot',
        'thermal:enderium_ingot'
    )
    //----------------------------------------------------------------------------------------
    /// Quantum Entangled Singularity
    event.custom({
        "type": "ae2:transform",
            "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {
                "item": "ae2:singularity"
            },
            {
                "item": "mekanism:teleportation_core"
            }
        ],
            "result": {
            "count": 2,
                "item": "ae2:quantum_entangled_singularity"
        }
    }
    )
    //----------------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------------
    event.remove({ output: 'ae2:silicon' })

    event.shapeless(
        Item.of('kubejs:qc_blend', ), // arg 1: output
        [
            '#forge:dusts/quartz',
            'mekanism:dust_coal'
        ]
    )

    event.shapeless(
        Item.of('kubejs:qc_blend',), // arg 1: output
        [
            '#forge:dusts/quartz',
            'mekanism:dust_charcoal'
        ]
    )

    event.custom({
        "type": "create:mixing",
        "heatRequirement": "superheated",
        "ingredients": [
            {
                "item": "kubejs:qc_blend"
            },
            {
                "item": "kubejs:qc_blend"
            }
        ],
        "results": [
            {
                "item": "kubejs:unpolished_silicon"
            }
        ]
    })

    event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [
            {
                "item": "kubejs:unpolished_silicon"
            }
        ],
        "results": [
            {
                "item": "ae2:silicon"
            }
        ]
    })

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:coal"
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "count": 1,
                "item": "mekanism:dust_coal"
            }
        ]
    })

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "minecraft:charcoal"
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "count": 1,
                "item": "mekanism:dust_charcoal"
            }
        ]
    })


    let molten = (metal, ingredient, amount) => {
        event.recipes.createMixing([Fluid.of('kubejs:molten_' + metal, amount)], ingredient).superheated()
        event.custom({
            "type": "thermal:crucible",
            "ingredient": {
                "item": ingredient
            },
            "result": [
                {
                    "fluid": 'kubejs:molten_' + metal,
                    "amount": amount
                }
            ],
            "energy": 200*amount
        })
    }


    molten("tin", 'thermal:tin_ingot', 144)
    molten("tin", 'thermal:tin_dust', 144)
    molten("tin", 'thermal:tin_nugget', 144 / 9)
    molten("tin", 'thermal:raw_tin', 144)
    molten("tin", 'thermal:tin_ore', 144*2)
    molten("tin", 'thermal:deepslate_tin_ore', 144 * 2)
    molten("tin", 'thermal:raw_tin_block', 144 * 9)
    molten("tin", 'thermal:tin_block', 144 * 9)

    molten("lead", 'thermal:lead_ingot', 144)
    molten("lead", 'thermal:lead_dust', 144)
    molten("lead", 'thermal:lead_nugget', 144 / 9)
    molten("lead", 'thermal:raw_lead', 144)
    molten("lead", 'thermal:lead_ore', 144 * 2)
    molten("lead", 'thermal:deepslate_lead_ore', 144 * 2)
    molten("lead", 'thermal:raw_lead_block', 144 * 9)
    molten("lead", 'thermal:lead_block', 144 * 9)

    event.recipes.createMixing([Fluid.of('kubejs:solder',100)], [Fluid.of('kubejs:molten_tin',60), Fluid.of('kubejs:molten_lead',40)])


    let circuit = (output, baseIn) => {
        event.custom({
            "type": "pneumaticcraft:assembly_drill",
            "input": {
                "item": baseIn
            },
            "program": "drill",
            "result": {
                "count": 1,
                "item": 'kubejs:drilled_' + output.toLowerCase() + '_circuit'
            }
        })

        event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "bottom": {
                    "item": "ae2:printed_silicon"
                },
                "middle": {
                    "item": "minecraft:redstone"
                },
                "top": {
                    "item": 'kubejs:drilled_' + output.toLowerCase() + '_circuit'
                }
            },
            "mode": "press",
            "result": {
                "item": 'ae2:printed_' + output.toLowerCase() + '_processor'
            }
        })

        event.custom({
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "type": "pneumaticcraft:stacked_item",
                "count": 1,
                "item": 'ae2:printed_' + output.toLowerCase() + '_processor'
            },
            "program": "laser",
            "result": {
                "count": 1,
                "item": 'kubejs:laser_etched_' + output.toLowerCase() + '_circuit'
            }
        })

        event.recipes.createSequencedAssembly([
            'ae2:' + output.toLowerCase() + '_processor',
        ], 'kubejs:laser_etched_' + output.toLowerCase() + '_circuit', [
            event.recipes.createDeploying('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', 'pneumaticcraft:capacitor']),
            event.recipes.createDeploying('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', 'pneumaticcraft:transistor']),
            event.recipes.createDeploying('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', 'pneumaticcraft:capacitor']),
            event.recipes.createDeploying('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', 'pneumaticcraft:transistor']),
            event.recipes.createDeploying('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', 'thermal:rosin']),
            event.recipes.createFilling('kubejs:laser_etched_' + output.toLowerCase() + '_circuit', ['kubejs:laser_etched_' + output.toLowerCase() + '_circuit', Fluid.of('kubejs:solder', 100)])
        ]).transitionalItem('kubejs:laser_etched_' + output.toLowerCase() + '_circuit').loops(1).id('rift_realms:' + output.toLowerCase() + '_processor')
    }

    circuit("Engineering",'minecraft:diamond')
    circuit("Logic",'minecraft:gold_ingot')
    circuit("Calculation",'ae2:certus_quartz_crystal')

    event.remove({ id: 'ae2:inscriber/engineering_processor' })
    event.remove({ id: 'ae2:inscriber/calculation_processor' })
    event.remove({ id: 'ae2:inscriber/logic_processor' })

    event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
    event.remove({ id: 'ae2:inscriber/logic_processor_print' })

});