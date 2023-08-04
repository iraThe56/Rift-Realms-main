JEIEvents.hideItems(e => {
    e.hide('#quark:shards')
    e.hide('mekanism:basic_combining_factory')
    e.hide('mekanism:advanced_combining_factory')
    e.hide('mekanism:elite_combining_factory')
    e.hide('mekanism:ultimate_combining_factory')
    e.hide('mekanism:combiner')
    e.hide('thermal:iron_plate')
    e.hide('thermal:copper_plate')
});
JEIEvents.addItems(e => {
    e.add(Item.of('quark:white_shard', { test: 123 }))
    console.info('hithis is running')
});

