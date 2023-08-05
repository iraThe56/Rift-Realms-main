JEIEvents.hideItems(e => {
    e.hide('mekanism:basic_combining_factory')
    e.hide('mekanism:advanced_combining_factory')
    e.hide('mekanism:elite_combining_factory')
    e.hide('mekanism:ultimate_combining_factory')
    e.hide('mekanism:combiner')
    e.hide('kubejs:incomplete_silicon_press')
    e.hide('#thermal:dynamos');
    e.hide('kubejs:ars_portal_icon');
    e.hide('kubejs:incomplete_andesite_machine');
    e.hide('kubejs:incomplete_copper_machine');
    e.hide('kubejs:incomplete_brass_machine');
    e.hide('ars_nouveau:stable_warp_scroll');
    e.hide('ars_nouveau:ritual_flight');
});

JEIEvents.information(event => {
    event.addItem('kubejs:jelly_sedative', "A potent hypnotic, use at your own risk")
})