ServerEvents.tags('item', event => {
    event.add('forge:dusts/salt', 'spelunkery:salt');
    event.add('forge:vines', 'minecraft:vine')
    event.add('forge:vines', 'swampier_swamps:swamp_vine')
    event.add('forge:vines', 'hexerei:willow_vines')
})

ServerEvents.recipes(event => {
    event.shapeless('minecraft:dirt', '#minecraft:dirt').id('rift_realms:dirt_conversion');
    event.shapeless('naturalist:glow_goop', 'minecraft:glow_ink_sac').id('rift_realms:glow_ink_sac_to_glow_goop');
    event.replaceInput(
      { input: 'minecraft:glow_ink_sac' },
      'minecraft:glow_ink_sac',
      'naturalist:glow_goop'
    )
    event.replaceInput(
        { input: 'minecraft:vine' },
        'minecraft:vine',
        '#forge:vines'
    )
    event.replaceInput(
      { input:'spelunkery:salt' }, // Arg 1: the filter
      'spelunkery:salt',            // Arg 2: the item to replace
      '#forge:dusts/salt'           // Arg 3: the item to replace it with
    )
    // Removing events for specific items
    event.remove({ output: 'enderstorage:ender_chest' });
    event.remove({ output: 'enderstorage:ender_pouch' });
    event.remove({ output: 'enderstorage:ender_tank' });
/*    event.remove({ output: 'create_enchantment_industry:disenchanter' });*/
    event.remove({ output: 'create_enchantment_industry:printer' });
    event.remove({ output: 'create_enchantment_industry:enchanting_guide' });
    event.remove({ output: 'create_enchantment_industry:experience_rotor' });
    event.remove({ output: 'iter_rpg:tormentor' });
 // Removing events for specific items
    event.remove({ id: 'heb:oak_slab_uncraft' });
    event.remove({ id: 'heb:spruce_slab_uncraft' });
    event.remove({ id: 'heb:birch_slab_uncraft' });
    event.remove({ id: 'heb:jungle_slab_uncraft' });
    event.remove({ id: 'heb:acacia_slab_uncraft' });
    event.remove({ id: 'heb:dark_oak_slab_uncraft' });
    event.remove({ id: 'heb:doritetobirch' });
    event.remove({ output: 'ars_nouveau:stable_warp_scroll' });
    event.remove({ output: 'supplementaries:cog_block' });
    event.shaped(
        Item.of('supplementaries:cog_block', 8), // arg 1: output
        [
            'DCD',
            'BAB', // arg 2: the shape (array of strings)
            'DCD'
        ],
        {
            A: 'minecraft:copper_block',
            B: 'create:cogwheel',
            C: 'create:large_cogwheel',
            D: 'minecraft:redstone'
        }
    )
    event.remove({ output: 'structurize:sceptergold' });
    event.shaped(
        Item.of('structurize:sceptergold', 1), // arg 1: output
        [
            '  A',
            ' B ', // arg 2: the shape (array of strings)
            'B  '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:stick'
        }
    )

    event.custom({
     type: 'farmersdelight:cutting',
     ingredients: [
        { item: 'minecraft:honeycomb_block' }
    ],
      tool: { tag: 'forge:tools/knives' },
      result: [
        { item: 'minecraft:honeycomb', count: 4 }
      ]
    })

})

