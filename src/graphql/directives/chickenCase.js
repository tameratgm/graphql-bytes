import { SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

export default class ChickenCaseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const makeChicken = (value) => {
            let result = '';
            for (let i = 0; i < value.length; ++i) {
                if (i % 2 === 0) {
                    result += value[i].toUpperCase();
                } else {
                    result += value[i].toLowerCase();
                }
            }

            return result;
        };

        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === 'string') {
                return makeChicken(result);
            }
            return result;
        };
    }
}
