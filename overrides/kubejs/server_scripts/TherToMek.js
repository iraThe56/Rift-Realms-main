ServerEvents.recipes(event => {
	event.recipes.thermal.crucible([Fluid.of('kubejs:impure_molten_osmium',72)], 'mekanism:raw_osmium')
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "superheated",
		"ingredients": [
			{
				"amount": 144,
				"fluid": "kubejs:impure_molten_osmium"
			},
			{
				"amount": 144,
				"fluid": "kubejs:nitric_acid"
			}
		],
		"results": [
			{
				"amount": 144,
				"fluid": "kubejs:molten_osmium"
			}
		]
	})
	event.recipes.thermal.chiller('mekanism:ingot_osmium', [Fluid.of('kubejs:molten_osmium', 144), 'thermal:chiller_ingot_cast'])
	event.custom({
		"type": "create:mixing",
		"heatRequirement": "superheated",
		"ingredients": [
			{
				"item": "thermal:niter_dust"
			},
			{
				"amount": 100,
				"fluid": "mekanism:sulfuric_acid"
			}
		],
		"results": [
			{
				"amount": 100,
				"fluid": "kubejs:nitric_acid"
			}
		]
	})

	event.custom({
		"type": "pneumaticcraft:heat_frame_cooling",
		"bonus_output": {
			"limit": 0.75,
			"multiplier": 0.01
		},
		"input": {
			"type": "pneumaticcraft:fluid",
			"amount": 144,
			"fluid": 'kubejs:molten_osmium'
		},
		"max_temp": 273,
		"result": {
			"item": 'mekanism:ingot_osmium'
		}
	})


	event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"item": "create:cinder_flour"
			},
			{
				"item": "minecraft:blaze_powder"
			},
			{
				"item": "thermal:sulfur_dust"
			},
			{
				"item": "thermal:sulfur_dust"
			}
		],
		"results": [
			{
				"item": 'kubejs:sulphurous_blend'
			}
		]
	})

	event.custom({
		"type": "create:compacting",
		"ingredients": [
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" },
			{ "item": "kubejs:sulphurous_blend" }
		],
		"results": [
			{
				"item": "kubejs:compacted_sulphurous_blend"
			}
		]
	})

	event.custom({
		"type": "create:mixing",
		"heatRequirement": "superheated",
		"ingredients": [
			{
				"item": "kubejs:compacted_sulphurous_blend"
			},
			{
				"amount": 1000,
				"fluid": "minecraft:water"
			}
		],
		"results": [
			{
				"amount": 100,
				"fluid": "mekanism:sulfuric_acid"
			}
		]
	})
	event.recipes.thermal.centrifuge([Item.of('minecraft:bone_meal').withChance(0.9), Item.of('thermal:niter_dust').withChance(0.1), Fluid.of('minecraft:water', 100)], 'thermal:compost')


}
)