/**
 * @packageDocumentation
 * @module api.functional.method
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";

/**
 * @controller MethodController.head
 * @path HEAD /method/head
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function head(connection: IConnection): Promise<void> {
  return !!connection.simulate
    ? head.simulate(connection)
    : PlainFetcher.fetch(connection, {
        ...head.METADATA,
        path: head.path(),
      });
}
export namespace head {
  export const METADATA = {
    method: "HEAD",
    path: "/method/head",
    request: null,
    response: null,
    status: null,
  } as const;

  export const path = () => "/method/head";
  export const random = (g?: Partial<typia.IRandomGenerator>) =>
    typia.random<Primitive<void>>(g);
  export const simulate = (connection: IConnection): void => {
    return random(
      "object" === typeof connection.simulate && null !== connection.simulate
        ? connection.simulate
        : undefined,
    );
  };
}
