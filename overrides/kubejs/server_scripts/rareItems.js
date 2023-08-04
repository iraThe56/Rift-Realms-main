ItemEvents.foodEaten(event => {
    const { item, player } = event
    if (item == 'occultism:datura') {
        event.player.data.ftbquests.addProgress('56206907E5C40DB0', 1)
    }
})