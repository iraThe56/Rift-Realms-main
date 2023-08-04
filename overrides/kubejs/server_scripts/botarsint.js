ServerEvents.recipes(event => {
    event.recipes.botania.terra_plate("riftrealmscore:true_archwood",
        [
        'ars_nouveau:blue_archwood_wood',
        'ars_nouveau:green_archwood_wood',
        'ars_nouveau:red_archwood_wood',
        'ars_nouveau:purple_archwood_wood'
        ], 150000);


    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "item": "riftrealmscore:true_archwood"
            },
            {
                "tag": "forge:tools/knives"
            }
        ],
        "results": [
            {
                "item": "riftrealmscore:ars_nouveau_dimension"
            }
        ]
    })
}
)
