
ServerEvents.recipes(e => {
    //e.recipes.mekanism.smelting('ae2:silicon', 'minecraft:stone').replaceOutput('ae2:silicon', 'minecraft:stone');
   //e.remove({ type: 'mekanism:smelting', output: 'ae2:silicon' });
   // e.recipes.mekanismCombining('quark:white_shard', 'minecraft:apple', 'minecraft:gold_ingot')
   // e.remove({ type: 'mekanism:combining'});
    e.remove({ output: 'basic_combining_factory' });
    e.remove({ output: 'advanced_combining_factory' });
    e.remove({ output: 'elite_combining_factory' });
    e.remove({ output: 'mekanism:ultimate_combining_factory' });
    e.remove({ output: 'mekanism:combiner' });
    e.remove({ output: 'thermal:copper_plate' });
    e.remove({ not: { input: 'thermal:press_gear_die' }, input: '#thermal:crafting/dies' });
    e.remove({ output: 'thermal:iron_plate' });
    e.remove({ output: 'thermal:machine_frame' });
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_blasting' });
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_raw_smelting' });
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_blasting' });
    e.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_smelting' });
    e.remove({ id: 'create:blasting/ingot_osmium_compat_mekanism' });
    e.remove({ id: 'create:smelting/ingot_osmium_compat_mekanism' });
    e.remove({ id: 'create:splashing/mekanism/crushed_osmium_ore' });
    e.remove({ output: 'ars_nouveau:ritual_scrying' });
   /* e.remove({ output: 'tinyredstone:silicon' })
    e.remove({ output: 'tinyredstone:silicon_compound' })*/
})