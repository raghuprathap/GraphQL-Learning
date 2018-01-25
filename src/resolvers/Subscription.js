const newLink = {
    subscribe: (parent, args, context, info) => {
        return context.db.subscription.link(
            {
                where: {mutation_in: ['CREATED']}
            },
            info,
        )
    },
}

const newVote = {
    subscribe: (parent, args, context, info) => {
        return context.db.subscription.vote(
            {where: {mutation_in: ['CREATED']}},
            info,
        )
    },
}

module.exports = {
    newLink,
    newVote
}