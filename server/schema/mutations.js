const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");
const God = mongoose.model("god");
const GodType = require("./god_type");

// this will be the where we will create all of the mutations for our application
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        // we are naming our filed - and therefore our mutation `newGod`
        newGod: {
            // we just specify the type we are mutating - in the case of making
            // a new God this will be the GodType
            type: GodType,
            args: {
                // the arguments required for this mutation
                name: { type: GraphQLString },
                type: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            // here we are just destructing our arguments
            resolve(parentValue, { name, type, description }) {
                return new God({ name, type, description }).save();
            }
        },
        updateGod: {
            type: GodType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                type: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parentValue, { id, name, type, description }) {
                const updateObj = {};

                if (id) updateObj.id = id;
                if (name) updateObj.name = name;
                if (type) updateObj.type = type;
                if (description) updateObj.description = description;

                return God.findOneAndUpdate(
                    { _id: id },
                    { $set: updateObj },
                    { new: true },
                    (err, god) => {
                        return god;
                    }
                );
            }
        },
        addGodRelative: {
            type: GodType,
            args: {
                godId: { type: new GraphQLNonNull(GraphQLID) },
                relativeId: { type: new GraphQLNonNull(GraphQLID) },
                relationship: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, { godId, relativeId, relationship }) {
                return God.addRelative(godId, relativeId, relationship);
            }
        },
    }
});

module.exports = mutation;