ServerEvents.recipes(event => {

    event.recipes.createMixing('3x thermal:rubber', [Fluid.of('thermal:latex', 1000)])
    event.recipes.createMixing('thermal:cured_rubber', [Fluid.of('minecraft:water', 200), 'thermal:rubber']).heated()
    event.recipes.createMixing([Fluid.of('kubejs:pipe_sealant', 300)], [Fluid.of('create:honey', 100), Fluid.of('thermal:latex', 200)]).heated().id('rift_realms:pipe_sealant')
    event.recipes.createFilling('create:rose_quartz', [Fluid.of('thermal:redstone', 400), '#forge:gems/quartz']).id('rift_realms:rose_quartz_destabilized')
    /*event.shapeless('create:rose_quartz', ['3x biomesoplenty:rose_quartz_shard']).id('rift_realms:rose_quartz_shard_to_rose_quartz')
    event.recipes.createCrushing(['3x biomesoplenty:rose_quartz_shard', Item.of('biomesoplenty:rose_quartz_shard').withChance(0.5)], 'biomesoplenty:rose_quartz_block')
*/


    event.recipes.createSequencedAssembly([
        'kubejs:andesite_machine',
    ], 'create:andesite_casing', [
        event.recipes.createDeploying('kubejs:incomplete_andesite_machine', ['kubejs:incomplete_andesite_machine', 'create:iron_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_andesite_machine', ['kubejs:incomplete_andesite_machine', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_andesite_machine', ['kubejs:incomplete_andesite_machine', 'create:large_cogwheel']),
        event.recipes.createPressing('kubejs:incomplete_andesite_machine', 'kubejs:incomplete_andesite_machine'),
    ]).transitionalItem('kubejs:incomplete_andesite_machine').loops(1).id('rift_realms:andesite_machine_auto')

    event.recipes.createSequencedAssembly([
        'kubejs:copper_machine',
    ], 'create:copper_casing', [
        event.recipes.createDeploying('kubejs:incomplete_copper_machine', ['kubejs:incomplete_copper_machine', 'minecraft:glass']),
        event.recipes.createDeploying('kubejs:incomplete_copper_machine', ['kubejs:incomplete_copper_machine', 'thermal:cured_rubber']),
        event.recipes.createDeploying('kubejs:incomplete_copper_machine', ['kubejs:incomplete_copper_machine', 'create:copper_sheet']),
        event.recipes.createDeploying('kubejs:incomplete_copper_machine', ['kubejs:incomplete_copper_machine', 'create:fluid_pipe']),
        event.recipes.createFilling('kubejs:incomplete_copper_machine', ['kubejs:incomplete_copper_machine', Fluid.of('kubejs:pipe_sealant', 150)])
    ]).transitionalItem('kubejs:incomplete_copper_machine').loops(1).id('rift_realms:copper_machine_auto')

    event.recipes.createSequencedAssembly([
        'kubejs:brass_machine',
    ], 'create:brass_casing', [
        event.recipes.createDeploying('kubejs:incomplete_brass_machine', ['kubejs:incomplete_brass_machine', 'thermal:iron_gear']),
        event.recipes.createDeploying('kubejs:incomplete_brass_machine', ['kubejs:incomplete_brass_machine', 'create:electron_tube']),
        event.recipes.createDeploying('kubejs:incomplete_brass_machine', ['kubejs:incomplete_brass_machine', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_brass_machine', ['kubejs:incomplete_brass_machine', 'createaddition:gold_spool']),
        event.recipes.createPressing('kubejs:incomplete_brass_machine', 'kubejs:incomplete_brass_machine'),
    ]).transitionalItem('kubejs:incomplete_brass_machine').loops(1).id('rift_realms:brass_machine_auto')


})




ServerEvents.recipes(event => {
    let andesite = (out, ingredient, amount) => {
        event.remove({ output: out })
        event.smithing(Item.of(out, amount), 'kubejs:andesite_machine', ingredient).id('rift_realms:smithing_' + out.split(":")[1])
        if (amount > 1) {
            event.recipes.createMechanicalCrafting(Item.of(out, amount), ['AB'], { A: 'kubejs:andesite_machine', B: ingredient }).id('rift_realms:mechanical_crafting_' + out.split(":")[1])
        }
        else {
            event.recipes.createDeploying(out, ['kubejs:andesite_machine', ingredient]).id('rift_realms:deploying_' + out.split(":")[1])
        }
    }

    let copper = (out, ingredient, amount) => {
        event.remove({ output: out })
        event.smithing(Item.of(out, amount), 'kubejs:copper_machine', ingredient).id('rift_realms:smithing_' + out.split(":")[1])
        if (amount > 1) {
            event.recipes.createMechanicalCrafting(Item.of(out, amount), ['AB'], { A: 'kubejs:copper_machine', B: ingredient }).id('rift_realms:mechanical_crafting_' + out.split(":")[1])
        }
        else {
            event.recipes.createDeploying(out, ['kubejs:copper_machine', ingredient]).id('rift_realms:deploying_' + out.split(":")[1])
        }
    }

    let brass = (out, ingredient, amount) => {
        event.remove({ output: out })
        event.smithing(Item.of(out, amount), 'kubejs:brass_machine', ingredient).id('rift_realms:smithing_' + out.split(":")[1])
        if (amount > 1) {
            event.recipes.createMechanicalCrafting(Item.of(out, amount), ['AB'], { A: 'kubejs:brass_machine', B: ingredient }).id('rift_realms:mechanical_crafting_' + out.split(":")[1])
        }
        else {
            event.recipes.createDeploying(out, ['kubejs:brass_machine', ingredient]).id('rift_realms:deploying_' + out.split(":")[1])
        }
    }


    andesite('create:mechanical_press', 'minecraft:iron_block', 1)
    andesite('create:encased_fan', 'create:propeller', 1)
    andesite('create:clutch', 'minecraft:lever', 1)
    andesite('create:mechanical_harvester', 'minecraft:iron_ingot', 1)
    andesite('create:rope_pulley', 'supplementaries:rope', 1)
    andesite('create:encased_chain_drive', 'minecraft:chain', 8)
    andesite('create:gantry_carriage', 'create:gantry_shaft', 1)
    andesite('create:andesite_funnel', 'minecraft:dried_kelp', 4)
    andesite('create:portable_storage_interface', 'create:chute', 2)
    andesite('create:mechanical_plough', 'create:iron_sheet', 2)
    andesite('create:gearbox', 'create:cogwheel', 4)
    andesite('create:speedometer', 'minecraft:compass', 1)
    andesite('create:mechanical_mixer', 'create:whisk', 1)
    andesite('create:mechanical_piston', 'minecraft:piston', 1)
    andesite('create:mechanical_drill', 'thermal:drill_head', 1)
    andesite('create:millstone', 'create:large_cogwheel', 1)
    andesite('create:gearshift', 'minecraft:redstone', 1)
    andesite('sliceanddice:slicer', 'create:turntable', 1)
    andesite('create:contraption_controls', 'create:electron_tube', 1)
    andesite('create:mechanical_saw', 'thermal:saw_blade', 1)
    andesite('createaddition:rolling_mill', 'create:shaft', 1)
    andesite('create:deployer', 'create:brass_hand', 1)
    andesite('create:mechanical_roller', 'create:crushing_wheel', 1)
    andesite('thermal:device_tree_extractor', 'minecraft:bucket', 1)


    copper('create:spout', 'minecraft:dried_kelp', 1)
    copper('create:item_drain', 'minecraft:iron_bars', 2)
    copper('create_enchantment_industry:disenchanter', 'create:sand_paper', 1)
    copper('create_enchantment_industry:printer', 'minecraft:ink_sac', 1)
    copper('create:hose_pulley', 'supplementaries:rope', 1)
    copper('create:portable_fluid_interface', 'create:chute', 2)
    copper('create:steam_engine', 'minecraft:copper_block', 1)


    brass('create:brass_funnel', 'minecraft:dried_kelp', 4)
    brass('create:display_link', 'minecraft:redstone_torch', 4)
    brass('create:mechanical_arm', 'create:precision_mechanism', 1)
    brass('create:elevator_pulley', 'supplementaries:rope', 1)
    brass('create:redstone_link', 'minecraft:ender_pearl', 4)
    brass('create:mechanical_crafter', 'minecraft:crafting_table', 6)
    brass('create:rotation_speed_controller', 'create:electron_tube', 1)


    event.shaped(
        Item.of('kubejs:andesite_machine', 1), // arg 1: output
        [
            'ABC',
            'DED', // arg 2: the shape (array of strings)
            'CBA'
        ],
        {
            A: 'create:large_cogwheel',
            B: 'minecraft:iron_ingot',  //arg 3: the mapping object
            C: 'create:cogwheel',
            D: 'create:andesite_alloy',
            E: 'create:andesite_casing'
        }
    )

    event.shaped(
        Item.of('kubejs:copper_machine', 1), // arg 1: output
        [
            'ABA',
            'CEC', // arg 2: the shape (array of strings)
            'ADA'
        ],
        {
            A: 'create:copper_sheet',
            B: 'create:super_glue',  //arg 3: the mapping object
            C: 'thermal:cured_rubber',
            D: 'create:fluid_tank',
            E: 'create:copper_casing'
        }
    )

    event.shaped(
        Item.of('kubejs:brass_machine', 1), // arg 1: output
        [
            'ADA',
            'BEB', // arg 2: the shape (array of strings)
            'CFC'
        ],
        {
            A: 'create:electron_tube',
            B: 'create:brass_sheet',  //arg 3: the mapping object
            C: 'create:brass_ingot',
            D: 'createaddition:gold_spool',
            E: 'create:brass_casing',
            F: 'create:precision_mechanism'
        }
    )

    event.remove({ output: 'create:brass_hand' });
    event.shaped(
        Item.of('create:brass_hand', 1), // arg 1: output
        [
            ' A ',
            'BBB', // arg 2: the shape (array of strings)
            ' B '
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:copper_sheet'
        }
    )

    event.recipes.createCrushing(['create:crushed_raw_copper', Item.of('create:copper_nugget').withChance(0.5)], 'create:veridium')
    event.recipes.createCrushing(['create:crushed_raw_zinc', Item.of('create:zinc_nugget').withChance(0.5)], 'create:asurine')
    event.recipes.createCrushing(['minecraft:andesite', Item.of('minecraft:iron_nugget').withChance(0.5)], 'create:crimsite')
    event.recipes.createCrushing(['minecraft:andesite', Item.of('minecraft:gold_nugget').withChance(0.5)], 'create:ochrum')

    event.shapeless('create:gearbox', 'create:vertical_gearbox')

})
