import gql from "graphql-tag";
import { ApolloCache } from "apollo-cache";
import { ApolloClient, NormalizedCacheObject, HttpLink, InMemoryCache } from "apollo-boost";
import { Resolvers } from "apollo-client";

import GameEngine from "./engine/GameEngine";
import { initialState, GameState } from "./state";

export const typeDefs = gql`
extend type Hero {
    xPos: Number!
    yPos: Number!
}

extend type Query {
    isLoggedIn: Boolean!
}
`

type ResolverFn = (
    parent: any,
    args: any,
    { cache }: { cache: ApolloCache<any> }
) => any;

interface ResolverMap {
    [field: string]: ResolverFn;
}

interface GameResolvers extends Resolvers {
}

const resolvers = {};

const cache = new InMemoryCache()

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: "http://localhost:4000/graphql",
        headers: {
            authorization: localStorage.getItem("token"),
        },
    }),
    typeDefs,
    resolvers,
})

cache.writeData({
    data: {
        isLoggedIn: !!localStorage.getItem("token"),
        hero: { }
    }
})

client.subscribe({});
client.query({ query: "a"})

// const state = document.loadState();
const state = initialState()

const game = new GameEngine<GameState>({
    canvasID: "game-canvas",
    loader: {},
    scene: new Game(),
});
// game.store.setState(localStorage.getItem("koala-kingdom"));
// game.addScene(new Game())

// game.onUpdate();
game.start(initialState, (engine: GameEngine) => {
});

// TODO: --isolatedModules typescript flag shenanigans; not sure what this does
// but alot of tutorials show it; Blind copy pasta or legit reason?
export { }
