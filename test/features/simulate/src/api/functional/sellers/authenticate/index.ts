/**
 * @packageDocumentation
 * @module api.functional.sellers.authenticate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../../utils/NestiaSimulator";
import type { ISeller } from "./../../../structures/ISeller";

export * as password from "./password";

/**
 * Join as a seller.
 * 
 * @param input Information of yours
 * @return Information of newly joined seller
 * @setHeader authorization.token Authorization
 * 
 * @controller SellerAuthenticateController.join()
 * @path POST /sellers/authenticate/join
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function join(
    connection: IConnection,
    input: join.Input,
): Promise<join.Output> {
    const output: join.Output = !!connection.simulate
        ? await join.simulate(
              connection,
              input,
          )
        : await Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "text/plain",
                  },
              },
              join.ENCRYPTED,
              join.METHOD,
              join.path(),
              input,
          );

    // configure header(s)
    connection.headers ??= {};
    connection.headers.Authorization = output.authorization.token;

    return output;
}
export namespace join {
    export type Input = Primitive<ISeller.IJoin>;
    export type Output = Primitive<ISeller.IAuthorized>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/authenticate/join";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export const path = (): string => {
        return `/sellers/authenticate/join`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        input: join.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Log-in as a seller.
 * 
 * @param input Email and password
 * @return Information of the seller
 * @assignHeaders authorization
 * 
 * @controller SellerAuthenticateController.login()
 * @path POST /sellers/authenticate/login
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function login(
    connection: IConnection,
    input: login.Input,
): Promise<login.Output> {
    const output: login.Output = !!connection.simulate
        ? await login.simulate(
              connection,
              input,
          )
        : await Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "text/plain",
                  },
              },
              login.ENCRYPTED,
              login.METHOD,
              login.path(),
              input,
          );

    // configure header(s)
    connection.headers ??= {};
    Object.assign(connection.headers, output.authorization);

    return output;
}
export namespace login {
    export type Input = Primitive<ISeller.ILogin>;
    export type Output = Primitive<ISeller.IAuthorized>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/sellers/authenticate/login";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export const path = (): string => {
        return `/sellers/authenticate/login`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection,
        input: login.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path()
        });
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * Erase the seller by itself.
 * 
 * @controller SellerAuthenticateController.exit()
 * @path DELETE /sellers/authenticate/exit
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function exit(
    connection: IConnection,
): Promise<void> {
    return !!connection.simulate
        ? exit.simulate(
              connection,
          )
        : Fetcher.fetch(
              connection,
              exit.ENCRYPTED,
              exit.METHOD,
              exit.path(),
          );
}
export namespace exit {

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/sellers/authenticate/exit";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/sellers/authenticate/exit`;
    }
    export const simulate = async (
        _connection: IConnection,
    ): Promise<void> => {
    }
}