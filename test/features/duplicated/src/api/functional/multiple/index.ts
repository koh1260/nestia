/**
 * @packageDocumentation
 * @module api.functional.multiple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { IBbsArticle } from "./../../structures/IBbsArticle";

/**
 * @controller DuplicatedController.at()
 * @path GET /multiple/at
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at (
        connection: IConnection
    ): Promise<at.Output> {
    return  Fetcher.fetch(
            connection,
            at.ENCRYPTED,
            at.METHOD,
            at.path()
        );
}
export namespace at {
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/multiple/at";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string {
        return `/multiple/at`;
    }
}