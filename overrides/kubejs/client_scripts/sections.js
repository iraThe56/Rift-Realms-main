// for 1.18 pls use: onEvent("ponder.registry")
Ponder.registry((event) => {
    event
        .create("minecraft:cake")
        .scene("animate_section", "The cake is a lie.", "riftrealms:fusion_reactor", (scene, util) => {
            /**
             * Layer 0
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 0, z], Facing.DOWN);
                }
                /**
                 * Idle can be used to create animations.
                 */
                scene.idle(3);
            }

            /**
             * Layer 1
             */
            for (let z = 0; z < 5; z++) {
                for (let x = 0; x < 5; x++) {
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(3);
            }

            /**
             * Layer 2
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Layer 3
             */
            for (let z = 0; z < 5; z++) {
                for (let x = 0; x < 5; x++) {
                    scene.world.showSection([x, 3, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            /**
             * Layer 4
             */
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, 4, z], Facing.DOWN);
                    scene.idle(2);
                }
            }

            scene.text(30, "Fusion Reactor Controller", [2.5, 4.5, 2.5]);
            scene.idle(60);

            /**
             * hiding a section
             */
           /* scene.world.hideSection([0, 0, 0, 1, 4, 1], Facing.NORTH);*/

            scene.text(30, "3x Fusion Reactor Ports", [1, 1.5, 2.5]).colored(PonderPalette.MEDIUM);
            scene.idle(80);

            scene.text(30, "1x Laser Focus Matrix", [2.5, 2.5, 0.5]).colored(PonderPalette.MEDIUM);
            scene.idle(80);

            scene.text(30, "Gaseous Deuterium and Tritium are used as fuel and inserted through two reactor ports.", [1, 1.5, 2.5]).colored(PonderPalette.MEDIUM);
            scene.idle(80);

            scene.text(30, "Energy can be extracted on an output port", [2.5, 4.5, 3.5]).colored(PonderPalette.MEDIUM);
            scene.idle(80);

        });
});