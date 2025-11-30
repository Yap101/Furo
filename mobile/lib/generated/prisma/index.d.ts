
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Api
 * 
 */
export type Api = $Result.DefaultSelection<Prisma.$ApiPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>
/**
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model PurchasedApi
 * 
 */
export type PurchasedApi = $Result.DefaultSelection<Prisma.$PurchasedApiPayload>
/**
 * Model UsageLog
 * 
 */
export type UsageLog = $Result.DefaultSelection<Prisma.$UsageLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apis
 * const apis = await prisma.api.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Apis
   * const apis = await prisma.api.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.api`: Exposes CRUD operations for the **Api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apis
    * const apis = await prisma.api.findMany()
    * ```
    */
  get api(): Prisma.ApiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchasedApi`: Exposes CRUD operations for the **PurchasedApi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchasedApis
    * const purchasedApis = await prisma.purchasedApi.findMany()
    * ```
    */
  get purchasedApi(): Prisma.PurchasedApiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageLog`: Exposes CRUD operations for the **UsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageLogs
    * const usageLogs = await prisma.usageLog.findMany()
    * ```
    */
  get usageLog(): Prisma.UsageLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Api: 'Api',
    ApiKey: 'ApiKey',
    Favorite: 'Favorite',
    Provider: 'Provider',
    Review: 'Review',
    Token: 'Token',
    PurchasedApi: 'PurchasedApi',
    UsageLog: 'UsageLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "api" | "apiKey" | "favorite" | "provider" | "review" | "token" | "purchasedApi" | "usageLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Api: {
        payload: Prisma.$ApiPayload<ExtArgs>
        fields: Prisma.ApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findFirst: {
            args: Prisma.ApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findMany: {
            args: Prisma.ApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          create: {
            args: Prisma.ApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          createMany: {
            args: Prisma.ApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          delete: {
            args: Prisma.ApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          update: {
            args: Prisma.ApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          deleteMany: {
            args: Prisma.ApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          upsert: {
            args: Prisma.ApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          aggregate: {
            args: Prisma.ApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi>
          }
          groupBy: {
            args: Prisma.ApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      PurchasedApi: {
        payload: Prisma.$PurchasedApiPayload<ExtArgs>
        fields: Prisma.PurchasedApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasedApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasedApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          findFirst: {
            args: Prisma.PurchasedApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasedApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          findMany: {
            args: Prisma.PurchasedApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>[]
          }
          create: {
            args: Prisma.PurchasedApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          createMany: {
            args: Prisma.PurchasedApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasedApiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>[]
          }
          delete: {
            args: Prisma.PurchasedApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          update: {
            args: Prisma.PurchasedApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          deleteMany: {
            args: Prisma.PurchasedApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasedApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchasedApiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>[]
          }
          upsert: {
            args: Prisma.PurchasedApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedApiPayload>
          }
          aggregate: {
            args: Prisma.PurchasedApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchasedApi>
          }
          groupBy: {
            args: Prisma.PurchasedApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasedApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasedApiCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasedApiCountAggregateOutputType> | number
          }
        }
      }
      UsageLog: {
        payload: Prisma.$UsageLogPayload<ExtArgs>
        fields: Prisma.UsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          findFirst: {
            args: Prisma.UsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          findMany: {
            args: Prisma.UsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          create: {
            args: Prisma.UsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          createMany: {
            args: Prisma.UsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          delete: {
            args: Prisma.UsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          update: {
            args: Prisma.UsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          deleteMany: {
            args: Prisma.UsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>[]
          }
          upsert: {
            args: Prisma.UsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageLogPayload>
          }
          aggregate: {
            args: Prisma.UsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageLog>
          }
          groupBy: {
            args: Prisma.UsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<UsageLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    api?: ApiOmit
    apiKey?: ApiKeyOmit
    favorite?: FavoriteOmit
    provider?: ProviderOmit
    review?: ReviewOmit
    token?: TokenOmit
    purchasedApi?: PurchasedApiOmit
    usageLog?: UsageLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApiCountOutputType
   */

  export type ApiCountOutputType = {
    Favorite: number
    Review: number
    Token: number
    UsageLog: number
    PurchasedApi: number
  }

  export type ApiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Favorite?: boolean | ApiCountOutputTypeCountFavoriteArgs
    Review?: boolean | ApiCountOutputTypeCountReviewArgs
    Token?: boolean | ApiCountOutputTypeCountTokenArgs
    UsageLog?: boolean | ApiCountOutputTypeCountUsageLogArgs
    PurchasedApi?: boolean | ApiCountOutputTypeCountPurchasedApiArgs
  }

  // Custom InputTypes
  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCountOutputType
     */
    select?: ApiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountUsageLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountPurchasedApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedApiWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    Api: number
    ApiKey: number
    Token: number
    PurchasedApi: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ProviderCountOutputTypeCountApiArgs
    ApiKey?: boolean | ProviderCountOutputTypeCountApiKeyArgs
    Token?: boolean | ProviderCountOutputTypeCountTokenArgs
    PurchasedApi?: boolean | ProviderCountOutputTypeCountPurchasedApiArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountPurchasedApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedApiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Api
   */

  export type AggregateApi = {
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  export type ApiAvgAggregateOutputType = {
    totalCalls: number | null
    averageResponseTime: number | null
    uptime: number | null
  }

  export type ApiSumAggregateOutputType = {
    totalCalls: number | null
    averageResponseTime: number | null
    uptime: number | null
  }

  export type ApiMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    description: string | null
    category: string | null
    endpoint: string | null
    publicPath: string | null
    method: string | null
    pricePerCall: string | null
    currency: string | null
    isActive: boolean | null
    totalCalls: number | null
    totalRevenue: string | null
    averageResponseTime: number | null
    uptime: number | null
    internalEndpoint: string | null
    isDirectRelay: boolean | null
    fallbackEndpoint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    description: string | null
    category: string | null
    endpoint: string | null
    publicPath: string | null
    method: string | null
    pricePerCall: string | null
    currency: string | null
    isActive: boolean | null
    totalCalls: number | null
    totalRevenue: string | null
    averageResponseTime: number | null
    uptime: number | null
    internalEndpoint: string | null
    isDirectRelay: boolean | null
    fallbackEndpoint: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ApiCountAggregateOutputType = {
    id: number
    providerId: number
    name: number
    description: number
    category: number
    endpoint: number
    publicPath: number
    method: number
    pricePerCall: number
    currency: number
    isActive: number
    totalCalls: number
    totalRevenue: number
    averageResponseTime: number
    uptime: number
    documentation: number
    headers: number
    queryParams: number
    internalEndpoint: number
    internalAuth: number
    relayConfiguration: number
    isDirectRelay: number
    fallbackEndpoint: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ApiAvgAggregateInputType = {
    totalCalls?: true
    averageResponseTime?: true
    uptime?: true
  }

  export type ApiSumAggregateInputType = {
    totalCalls?: true
    averageResponseTime?: true
    uptime?: true
  }

  export type ApiMinAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    description?: true
    category?: true
    endpoint?: true
    publicPath?: true
    method?: true
    pricePerCall?: true
    currency?: true
    isActive?: true
    totalCalls?: true
    totalRevenue?: true
    averageResponseTime?: true
    uptime?: true
    internalEndpoint?: true
    isDirectRelay?: true
    fallbackEndpoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiMaxAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    description?: true
    category?: true
    endpoint?: true
    publicPath?: true
    method?: true
    pricePerCall?: true
    currency?: true
    isActive?: true
    totalCalls?: true
    totalRevenue?: true
    averageResponseTime?: true
    uptime?: true
    internalEndpoint?: true
    isDirectRelay?: true
    fallbackEndpoint?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ApiCountAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    description?: true
    category?: true
    endpoint?: true
    publicPath?: true
    method?: true
    pricePerCall?: true
    currency?: true
    isActive?: true
    totalCalls?: true
    totalRevenue?: true
    averageResponseTime?: true
    uptime?: true
    documentation?: true
    headers?: true
    queryParams?: true
    internalEndpoint?: true
    internalAuth?: true
    relayConfiguration?: true
    isDirectRelay?: true
    fallbackEndpoint?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api to aggregate.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apis
    **/
    _count?: true | ApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiMaxAggregateInputType
  }

  export type GetApiAggregateType<T extends ApiAggregateArgs> = {
        [P in keyof T & keyof AggregateApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi[P]>
      : GetScalarType<T[P], AggregateApi[P]>
  }




  export type ApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithAggregationInput | ApiOrderByWithAggregationInput[]
    by: ApiScalarFieldEnum[] | ApiScalarFieldEnum
    having?: ApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCountAggregateInputType | true
    _avg?: ApiAvgAggregateInputType
    _sum?: ApiSumAggregateInputType
    _min?: ApiMinAggregateInputType
    _max?: ApiMaxAggregateInputType
  }

  export type ApiGroupByOutputType = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method: string
    pricePerCall: string
    currency: string
    isActive: boolean
    totalCalls: number
    totalRevenue: string
    averageResponseTime: number
    uptime: number
    documentation: JsonValue | null
    headers: JsonValue | null
    queryParams: JsonValue | null
    internalEndpoint: string | null
    internalAuth: JsonValue | null
    relayConfiguration: JsonValue | null
    isDirectRelay: boolean
    fallbackEndpoint: string | null
    createdAt: Date
    updatedAt: Date
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  type GetApiGroupByPayload<T extends ApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupByOutputType[P]>
        }
      >
    >


  export type ApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    endpoint?: boolean
    publicPath?: boolean
    method?: boolean
    pricePerCall?: boolean
    currency?: boolean
    isActive?: boolean
    totalCalls?: boolean
    totalRevenue?: boolean
    averageResponseTime?: boolean
    uptime?: boolean
    documentation?: boolean
    headers?: boolean
    queryParams?: boolean
    internalEndpoint?: boolean
    internalAuth?: boolean
    relayConfiguration?: boolean
    isDirectRelay?: boolean
    fallbackEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
    Favorite?: boolean | Api$FavoriteArgs<ExtArgs>
    Review?: boolean | Api$ReviewArgs<ExtArgs>
    Token?: boolean | Api$TokenArgs<ExtArgs>
    UsageLog?: boolean | Api$UsageLogArgs<ExtArgs>
    PurchasedApi?: boolean | Api$PurchasedApiArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    endpoint?: boolean
    publicPath?: boolean
    method?: boolean
    pricePerCall?: boolean
    currency?: boolean
    isActive?: boolean
    totalCalls?: boolean
    totalRevenue?: boolean
    averageResponseTime?: boolean
    uptime?: boolean
    documentation?: boolean
    headers?: boolean
    queryParams?: boolean
    internalEndpoint?: boolean
    internalAuth?: boolean
    relayConfiguration?: boolean
    isDirectRelay?: boolean
    fallbackEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    endpoint?: boolean
    publicPath?: boolean
    method?: boolean
    pricePerCall?: boolean
    currency?: boolean
    isActive?: boolean
    totalCalls?: boolean
    totalRevenue?: boolean
    averageResponseTime?: boolean
    uptime?: boolean
    documentation?: boolean
    headers?: boolean
    queryParams?: boolean
    internalEndpoint?: boolean
    internalAuth?: boolean
    relayConfiguration?: boolean
    isDirectRelay?: boolean
    fallbackEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectScalar = {
    id?: boolean
    providerId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    endpoint?: boolean
    publicPath?: boolean
    method?: boolean
    pricePerCall?: boolean
    currency?: boolean
    isActive?: boolean
    totalCalls?: boolean
    totalRevenue?: boolean
    averageResponseTime?: boolean
    uptime?: boolean
    documentation?: boolean
    headers?: boolean
    queryParams?: boolean
    internalEndpoint?: boolean
    internalAuth?: boolean
    relayConfiguration?: boolean
    isDirectRelay?: boolean
    fallbackEndpoint?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "name" | "description" | "category" | "endpoint" | "publicPath" | "method" | "pricePerCall" | "currency" | "isActive" | "totalCalls" | "totalRevenue" | "averageResponseTime" | "uptime" | "documentation" | "headers" | "queryParams" | "internalEndpoint" | "internalAuth" | "relayConfiguration" | "isDirectRelay" | "fallbackEndpoint" | "createdAt" | "updatedAt", ExtArgs["result"]["api"]>
  export type ApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
    Favorite?: boolean | Api$FavoriteArgs<ExtArgs>
    Review?: boolean | Api$ReviewArgs<ExtArgs>
    Token?: boolean | Api$TokenArgs<ExtArgs>
    UsageLog?: boolean | Api$UsageLogArgs<ExtArgs>
    PurchasedApi?: boolean | Api$PurchasedApiArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ApiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Api"
    objects: {
      Provider: Prisma.$ProviderPayload<ExtArgs>
      Favorite: Prisma.$FavoritePayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      Token: Prisma.$TokenPayload<ExtArgs>[]
      UsageLog: Prisma.$UsageLogPayload<ExtArgs>[]
      PurchasedApi: Prisma.$PurchasedApiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      name: string
      description: string
      category: string
      endpoint: string
      publicPath: string
      method: string
      pricePerCall: string
      currency: string
      isActive: boolean
      totalCalls: number
      totalRevenue: string
      averageResponseTime: number
      uptime: number
      documentation: Prisma.JsonValue | null
      headers: Prisma.JsonValue | null
      queryParams: Prisma.JsonValue | null
      internalEndpoint: string | null
      internalAuth: Prisma.JsonValue | null
      relayConfiguration: Prisma.JsonValue | null
      isDirectRelay: boolean
      fallbackEndpoint: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["api"]>
    composites: {}
  }

  type ApiGetPayload<S extends boolean | null | undefined | ApiDefaultArgs> = $Result.GetResult<Prisma.$ApiPayload, S>

  type ApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCountAggregateInputType | true
    }

  export interface ApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Api'], meta: { name: 'Api' } }
    /**
     * Find zero or one Api that matches the filter.
     * @param {ApiFindUniqueArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiFindUniqueArgs>(args: SelectSubset<T, ApiFindUniqueArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiFindUniqueOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiFindFirstArgs>(args?: SelectSubset<T, ApiFindFirstArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apis
     * const apis = await prisma.api.findMany()
     * 
     * // Get first 10 Apis
     * const apis = await prisma.api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiWithIdOnly = await prisma.api.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiFindManyArgs>(args?: SelectSubset<T, ApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api.
     * @param {ApiCreateArgs} args - Arguments to create a Api.
     * @example
     * // Create one Api
     * const Api = await prisma.api.create({
     *   data: {
     *     // ... data to create a Api
     *   }
     * })
     * 
     */
    create<T extends ApiCreateArgs>(args: SelectSubset<T, ApiCreateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apis.
     * @param {ApiCreateManyArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCreateManyArgs>(args?: SelectSubset<T, ApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apis and returns the data saved in the database.
     * @param {ApiCreateManyAndReturnArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api.
     * @param {ApiDeleteArgs} args - Arguments to delete one Api.
     * @example
     * // Delete one Api
     * const Api = await prisma.api.delete({
     *   where: {
     *     // ... filter to delete one Api
     *   }
     * })
     * 
     */
    delete<T extends ApiDeleteArgs>(args: SelectSubset<T, ApiDeleteArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api.
     * @param {ApiUpdateArgs} args - Arguments to update one Api.
     * @example
     * // Update one Api
     * const api = await prisma.api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUpdateArgs>(args: SelectSubset<T, ApiUpdateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apis.
     * @param {ApiDeleteManyArgs} args - Arguments to filter Apis to delete.
     * @example
     * // Delete a few Apis
     * const { count } = await prisma.api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiDeleteManyArgs>(args?: SelectSubset<T, ApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUpdateManyArgs>(args: SelectSubset<T, ApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis and returns the data updated in the database.
     * @param {ApiUpdateManyAndReturnArgs} args - Arguments to update many Apis.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api.
     * @param {ApiUpsertArgs} args - Arguments to update or create a Api.
     * @example
     * // Update or create a Api
     * const api = await prisma.api.upsert({
     *   create: {
     *     // ... data to create a Api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api we want to update
     *   }
     * })
     */
    upsert<T extends ApiUpsertArgs>(args: SelectSubset<T, ApiUpsertArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCountArgs} args - Arguments to filter Apis to count.
     * @example
     * // Count the number of Apis
     * const count = await prisma.api.count({
     *   where: {
     *     // ... the filter for the Apis we want to count
     *   }
     * })
    **/
    count<T extends ApiCountArgs>(
      args?: Subset<T, ApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiAggregateArgs>(args: Subset<T, ApiAggregateArgs>): Prisma.PrismaPromise<GetApiAggregateType<T>>

    /**
     * Group by Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiGroupByArgs['orderBy'] }
        : { orderBy?: ApiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Api model
   */
  readonly fields: ApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Favorite<T extends Api$FavoriteArgs<ExtArgs> = {}>(args?: Subset<T, Api$FavoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends Api$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Api$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Token<T extends Api$TokenArgs<ExtArgs> = {}>(args?: Subset<T, Api$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UsageLog<T extends Api$UsageLogArgs<ExtArgs> = {}>(args?: Subset<T, Api$UsageLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PurchasedApi<T extends Api$PurchasedApiArgs<ExtArgs> = {}>(args?: Subset<T, Api$PurchasedApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Api model
   */
  interface ApiFieldRefs {
    readonly id: FieldRef<"Api", 'String'>
    readonly providerId: FieldRef<"Api", 'String'>
    readonly name: FieldRef<"Api", 'String'>
    readonly description: FieldRef<"Api", 'String'>
    readonly category: FieldRef<"Api", 'String'>
    readonly endpoint: FieldRef<"Api", 'String'>
    readonly publicPath: FieldRef<"Api", 'String'>
    readonly method: FieldRef<"Api", 'String'>
    readonly pricePerCall: FieldRef<"Api", 'String'>
    readonly currency: FieldRef<"Api", 'String'>
    readonly isActive: FieldRef<"Api", 'Boolean'>
    readonly totalCalls: FieldRef<"Api", 'Int'>
    readonly totalRevenue: FieldRef<"Api", 'String'>
    readonly averageResponseTime: FieldRef<"Api", 'Int'>
    readonly uptime: FieldRef<"Api", 'Float'>
    readonly documentation: FieldRef<"Api", 'Json'>
    readonly headers: FieldRef<"Api", 'Json'>
    readonly queryParams: FieldRef<"Api", 'Json'>
    readonly internalEndpoint: FieldRef<"Api", 'String'>
    readonly internalAuth: FieldRef<"Api", 'Json'>
    readonly relayConfiguration: FieldRef<"Api", 'Json'>
    readonly isDirectRelay: FieldRef<"Api", 'Boolean'>
    readonly fallbackEndpoint: FieldRef<"Api", 'String'>
    readonly createdAt: FieldRef<"Api", 'DateTime'>
    readonly updatedAt: FieldRef<"Api", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Api findUnique
   */
  export type ApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findUniqueOrThrow
   */
  export type ApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findFirst
   */
  export type ApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findFirstOrThrow
   */
  export type ApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findMany
   */
  export type ApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Apis to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api create
   */
  export type ApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to create a Api.
     */
    data: XOR<ApiCreateInput, ApiUncheckedCreateInput>
  }

  /**
   * Api createMany
   */
  export type ApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Api createManyAndReturn
   */
  export type ApiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api update
   */
  export type ApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to update a Api.
     */
    data: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
    /**
     * Choose, which Api to update.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api updateMany
   */
  export type ApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
  }

  /**
   * Api updateManyAndReturn
   */
  export type ApiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api upsert
   */
  export type ApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The filter to search for the Api to update in case it exists.
     */
    where: ApiWhereUniqueInput
    /**
     * In case the Api found by the `where` argument doesn't exist, create a new Api with this data.
     */
    create: XOR<ApiCreateInput, ApiUncheckedCreateInput>
    /**
     * In case the Api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
  }

  /**
   * Api delete
   */
  export type ApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter which Api to delete.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api deleteMany
   */
  export type ApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apis to delete
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to delete.
     */
    limit?: number
  }

  /**
   * Api.Favorite
   */
  export type Api$FavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Api.Review
   */
  export type Api$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Api.Token
   */
  export type Api$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Api.UsageLog
   */
  export type Api$UsageLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    cursor?: UsageLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * Api.PurchasedApi
   */
  export type Api$PurchasedApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    where?: PurchasedApiWhereInput
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    cursor?: PurchasedApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedApiScalarFieldEnum | PurchasedApiScalarFieldEnum[]
  }

  /**
   * Api without action
   */
  export type ApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    rateLimit: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    rateLimit: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    keyHash: string | null
    lastUsed: Date | null
    isActive: boolean | null
    rateLimit: number | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    name: string | null
    keyHash: string | null
    lastUsed: Date | null
    isActive: boolean | null
    rateLimit: number | null
    createdAt: Date | null
    expiresAt: Date | null
    updatedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    providerId: number
    name: number
    keyHash: number
    lastUsed: number
    isActive: number
    permissions: number
    rateLimit: number
    createdAt: number
    expiresAt: number
    updatedAt: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    rateLimit?: true
  }

  export type ApiKeySumAggregateInputType = {
    rateLimit?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    keyHash?: true
    lastUsed?: true
    isActive?: true
    rateLimit?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    keyHash?: true
    lastUsed?: true
    isActive?: true
    rateLimit?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    providerId?: true
    name?: true
    keyHash?: true
    lastUsed?: true
    isActive?: true
    permissions?: true
    rateLimit?: true
    createdAt?: true
    expiresAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    providerId: string
    name: string
    keyHash: string
    lastUsed: Date | null
    isActive: boolean
    permissions: JsonValue | null
    rateLimit: number | null
    createdAt: Date
    expiresAt: Date | null
    updatedAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    keyHash?: boolean
    lastUsed?: boolean
    isActive?: boolean
    permissions?: boolean
    rateLimit?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    keyHash?: boolean
    lastUsed?: boolean
    isActive?: boolean
    permissions?: boolean
    rateLimit?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    name?: boolean
    keyHash?: boolean
    lastUsed?: boolean
    isActive?: boolean
    permissions?: boolean
    rateLimit?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    providerId?: boolean
    name?: boolean
    keyHash?: boolean
    lastUsed?: boolean
    isActive?: boolean
    permissions?: boolean
    rateLimit?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    updatedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "name" | "keyHash" | "lastUsed" | "isActive" | "permissions" | "rateLimit" | "createdAt" | "expiresAt" | "updatedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      Provider: Prisma.$ProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      name: string
      keyHash: string
      lastUsed: Date | null
      isActive: boolean
      permissions: Prisma.JsonValue | null
      rateLimit: number | null
      createdAt: Date
      expiresAt: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly providerId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly lastUsed: FieldRef<"ApiKey", 'DateTime'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly permissions: FieldRef<"ApiKey", 'Json'>
    readonly rateLimit: FieldRef<"ApiKey", 'Int'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    apiId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    apiId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    apiId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    apiId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    apiId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    apiId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    apiId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiId?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiId?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    apiId?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    apiId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "apiId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      apiId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly apiId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderAvgAggregateOutputType = {
    reputationScore: number | null
    totalCalls: number | null
  }

  export type ProviderSumAggregateOutputType = {
    reputationScore: number | null
    totalCalls: number | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    email: string | null
    name: string | null
    description: string | null
    website: string | null
    avatarUrl: string | null
    isActive: boolean | null
    reputationScore: number | null
    totalEarnings: string | null
    totalCalls: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    email: string | null
    name: string | null
    description: string | null
    website: string | null
    avatarUrl: string | null
    isActive: boolean | null
    reputationScore: number | null
    totalEarnings: string | null
    totalCalls: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    walletAddress: number
    email: number
    name: number
    description: number
    website: number
    avatarUrl: number
    isActive: number
    reputationScore: number
    totalEarnings: number
    totalCalls: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderAvgAggregateInputType = {
    reputationScore?: true
    totalCalls?: true
  }

  export type ProviderSumAggregateInputType = {
    reputationScore?: true
    totalCalls?: true
  }

  export type ProviderMinAggregateInputType = {
    id?: true
    walletAddress?: true
    email?: true
    name?: true
    description?: true
    website?: true
    avatarUrl?: true
    isActive?: true
    reputationScore?: true
    totalEarnings?: true
    totalCalls?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    email?: true
    name?: true
    description?: true
    website?: true
    avatarUrl?: true
    isActive?: true
    reputationScore?: true
    totalEarnings?: true
    totalCalls?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    walletAddress?: true
    email?: true
    name?: true
    description?: true
    website?: true
    avatarUrl?: true
    isActive?: true
    reputationScore?: true
    totalEarnings?: true
    totalCalls?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _avg?: ProviderAvgAggregateInputType
    _sum?: ProviderSumAggregateInputType
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    walletAddress: string
    email: string | null
    name: string | null
    description: string | null
    website: string | null
    avatarUrl: string | null
    isActive: boolean
    reputationScore: number
    totalEarnings: string
    totalCalls: number
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    email?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    reputationScore?: boolean
    totalEarnings?: boolean
    totalCalls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Api?: boolean | Provider$ApiArgs<ExtArgs>
    ApiKey?: boolean | Provider$ApiKeyArgs<ExtArgs>
    Token?: boolean | Provider$TokenArgs<ExtArgs>
    PurchasedApi?: boolean | Provider$PurchasedApiArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    email?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    reputationScore?: boolean
    totalEarnings?: boolean
    totalCalls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    email?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    reputationScore?: boolean
    totalEarnings?: boolean
    totalCalls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    email?: boolean
    name?: boolean
    description?: boolean
    website?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    reputationScore?: boolean
    totalEarnings?: boolean
    totalCalls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "email" | "name" | "description" | "website" | "avatarUrl" | "isActive" | "reputationScore" | "totalEarnings" | "totalCalls" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | Provider$ApiArgs<ExtArgs>
    ApiKey?: boolean | Provider$ApiKeyArgs<ExtArgs>
    Token?: boolean | Provider$TokenArgs<ExtArgs>
    PurchasedApi?: boolean | Provider$PurchasedApiArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>[]
      ApiKey: Prisma.$ApiKeyPayload<ExtArgs>[]
      Token: Prisma.$TokenPayload<ExtArgs>[]
      PurchasedApi: Prisma.$PurchasedApiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      email: string | null
      name: string | null
      description: string | null
      website: string | null
      avatarUrl: string | null
      isActive: boolean
      reputationScore: number
      totalEarnings: string
      totalCalls: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends Provider$ApiArgs<ExtArgs> = {}>(args?: Subset<T, Provider$ApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ApiKey<T extends Provider$ApiKeyArgs<ExtArgs> = {}>(args?: Subset<T, Provider$ApiKeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Token<T extends Provider$TokenArgs<ExtArgs> = {}>(args?: Subset<T, Provider$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PurchasedApi<T extends Provider$PurchasedApiArgs<ExtArgs> = {}>(args?: Subset<T, Provider$PurchasedApiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly walletAddress: FieldRef<"Provider", 'String'>
    readonly email: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly description: FieldRef<"Provider", 'String'>
    readonly website: FieldRef<"Provider", 'String'>
    readonly avatarUrl: FieldRef<"Provider", 'String'>
    readonly isActive: FieldRef<"Provider", 'Boolean'>
    readonly reputationScore: FieldRef<"Provider", 'Float'>
    readonly totalEarnings: FieldRef<"Provider", 'String'>
    readonly totalCalls: FieldRef<"Provider", 'Int'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.Api
   */
  export type Provider$ApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    cursor?: ApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Provider.ApiKey
   */
  export type Provider$ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Provider.Token
   */
  export type Provider$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Provider.PurchasedApi
   */
  export type Provider$PurchasedApiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    where?: PurchasedApiWhereInput
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    cursor?: PurchasedApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedApiScalarFieldEnum | PurchasedApiScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
    helpfulCount: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
    helpfulCount: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    reviewerAddress: string | null
    rating: number | null
    comment: string | null
    isVerified: boolean | null
    helpfulCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    reviewerAddress: string | null
    rating: number | null
    comment: string | null
    isVerified: boolean | null
    helpfulCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    apiId: number
    reviewerAddress: number
    rating: number
    comment: number
    isVerified: number
    helpfulCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
    helpfulCount?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
    helpfulCount?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    apiId?: true
    reviewerAddress?: true
    rating?: true
    comment?: true
    isVerified?: true
    helpfulCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    apiId?: true
    reviewerAddress?: true
    rating?: true
    comment?: true
    isVerified?: true
    helpfulCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    apiId?: true
    reviewerAddress?: true
    rating?: true
    comment?: true
    isVerified?: true
    helpfulCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    apiId: string
    reviewerAddress: string
    rating: number
    comment: string | null
    isVerified: boolean
    helpfulCount: number
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    reviewerAddress?: boolean
    rating?: boolean
    comment?: boolean
    isVerified?: boolean
    helpfulCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    reviewerAddress?: boolean
    rating?: boolean
    comment?: boolean
    isVerified?: boolean
    helpfulCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    reviewerAddress?: boolean
    rating?: boolean
    comment?: boolean
    isVerified?: boolean
    helpfulCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    apiId?: boolean
    reviewerAddress?: boolean
    rating?: boolean
    comment?: boolean
    isVerified?: boolean
    helpfulCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "reviewerAddress" | "rating" | "comment" | "isVerified" | "helpfulCount" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      reviewerAddress: string
      rating: number
      comment: string | null
      isVerified: boolean
      helpfulCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly apiId: FieldRef<"Review", 'String'>
    readonly reviewerAddress: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly isVerified: FieldRef<"Review", 'Boolean'>
    readonly helpfulCount: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    providerId: string | null
    developerAddress: string | null
    tokenHash: string | null
    isUsed: boolean | null
    usedAt: Date | null
    expiresAt: Date | null
    lastValidAfter: Date | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    providerId: string | null
    developerAddress: string | null
    tokenHash: string | null
    isUsed: boolean | null
    usedAt: Date | null
    expiresAt: Date | null
    lastValidAfter: Date | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    apiId: number
    providerId: number
    developerAddress: number
    tokenHash: number
    isUsed: number
    usedAt: number
    expiresAt: number
    lastValidAfter: number
    requestMetadata: number
    createdAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    tokenHash?: true
    isUsed?: true
    usedAt?: true
    expiresAt?: true
    lastValidAfter?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    tokenHash?: true
    isUsed?: true
    usedAt?: true
    expiresAt?: true
    lastValidAfter?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    tokenHash?: true
    isUsed?: true
    usedAt?: true
    expiresAt?: true
    lastValidAfter?: true
    requestMetadata?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    apiId: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed: boolean
    usedAt: Date | null
    expiresAt: Date
    lastValidAfter: Date
    requestMetadata: JsonValue | null
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    tokenHash?: boolean
    isUsed?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    lastValidAfter?: boolean
    requestMetadata?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
    UsageLog?: boolean | Token$UsageLogArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    tokenHash?: boolean
    isUsed?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    lastValidAfter?: boolean
    requestMetadata?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    tokenHash?: boolean
    isUsed?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    lastValidAfter?: boolean
    requestMetadata?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    tokenHash?: boolean
    isUsed?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    lastValidAfter?: boolean
    requestMetadata?: boolean
    createdAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "providerId" | "developerAddress" | "tokenHash" | "isUsed" | "usedAt" | "expiresAt" | "lastValidAfter" | "requestMetadata" | "createdAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
    UsageLog?: boolean | Token$UsageLogArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>
      Provider: Prisma.$ProviderPayload<ExtArgs>
      UsageLog: Prisma.$UsageLogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      providerId: string
      developerAddress: string
      tokenHash: string
      isUsed: boolean
      usedAt: Date | null
      expiresAt: Date
      lastValidAfter: Date
      requestMetadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    UsageLog<T extends Token$UsageLogArgs<ExtArgs> = {}>(args?: Subset<T, Token$UsageLogArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly apiId: FieldRef<"Token", 'String'>
    readonly providerId: FieldRef<"Token", 'String'>
    readonly developerAddress: FieldRef<"Token", 'String'>
    readonly tokenHash: FieldRef<"Token", 'String'>
    readonly isUsed: FieldRef<"Token", 'Boolean'>
    readonly usedAt: FieldRef<"Token", 'DateTime'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly lastValidAfter: FieldRef<"Token", 'DateTime'>
    readonly requestMetadata: FieldRef<"Token", 'Json'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.UsageLog
   */
  export type Token$UsageLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    where?: UsageLogWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model PurchasedApi
   */

  export type AggregatePurchasedApi = {
    _count: PurchasedApiCountAggregateOutputType | null
    _min: PurchasedApiMinAggregateOutputType | null
    _max: PurchasedApiMaxAggregateOutputType | null
  }

  export type PurchasedApiMinAggregateOutputType = {
    id: string | null
    apiId: string | null
    developerAddress: string | null
    providerId: string | null
    transactionHash: string | null
    paymentAmount: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PurchasedApiMaxAggregateOutputType = {
    id: string | null
    apiId: string | null
    developerAddress: string | null
    providerId: string | null
    transactionHash: string | null
    paymentAmount: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PurchasedApiCountAggregateOutputType = {
    id: number
    apiId: number
    developerAddress: number
    providerId: number
    transactionHash: number
    paymentAmount: number
    status: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PurchasedApiMinAggregateInputType = {
    id?: true
    apiId?: true
    developerAddress?: true
    providerId?: true
    transactionHash?: true
    paymentAmount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PurchasedApiMaxAggregateInputType = {
    id?: true
    apiId?: true
    developerAddress?: true
    providerId?: true
    transactionHash?: true
    paymentAmount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PurchasedApiCountAggregateInputType = {
    id?: true
    apiId?: true
    developerAddress?: true
    providerId?: true
    transactionHash?: true
    paymentAmount?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PurchasedApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedApi to aggregate.
     */
    where?: PurchasedApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedApis to fetch.
     */
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasedApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchasedApis
    **/
    _count?: true | PurchasedApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasedApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasedApiMaxAggregateInputType
  }

  export type GetPurchasedApiAggregateType<T extends PurchasedApiAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchasedApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchasedApi[P]>
      : GetScalarType<T[P], AggregatePurchasedApi[P]>
  }




  export type PurchasedApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedApiWhereInput
    orderBy?: PurchasedApiOrderByWithAggregationInput | PurchasedApiOrderByWithAggregationInput[]
    by: PurchasedApiScalarFieldEnum[] | PurchasedApiScalarFieldEnum
    having?: PurchasedApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasedApiCountAggregateInputType | true
    _min?: PurchasedApiMinAggregateInputType
    _max?: PurchasedApiMaxAggregateInputType
  }

  export type PurchasedApiGroupByOutputType = {
    id: string
    apiId: string
    developerAddress: string
    providerId: string
    transactionHash: string
    paymentAmount: string
    status: string
    expiresAt: Date
    createdAt: Date
    _count: PurchasedApiCountAggregateOutputType | null
    _min: PurchasedApiMinAggregateOutputType | null
    _max: PurchasedApiMaxAggregateOutputType | null
  }

  type GetPurchasedApiGroupByPayload<T extends PurchasedApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasedApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasedApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasedApiGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasedApiGroupByOutputType[P]>
        }
      >
    >


  export type PurchasedApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    developerAddress?: boolean
    providerId?: boolean
    transactionHash?: boolean
    paymentAmount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedApi"]>

  export type PurchasedApiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    developerAddress?: boolean
    providerId?: boolean
    transactionHash?: boolean
    paymentAmount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedApi"]>

  export type PurchasedApiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiId?: boolean
    developerAddress?: boolean
    providerId?: boolean
    transactionHash?: boolean
    paymentAmount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedApi"]>

  export type PurchasedApiSelectScalar = {
    id?: boolean
    apiId?: boolean
    developerAddress?: boolean
    providerId?: boolean
    transactionHash?: boolean
    paymentAmount?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PurchasedApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiId" | "developerAddress" | "providerId" | "transactionHash" | "paymentAmount" | "status" | "expiresAt" | "createdAt", ExtArgs["result"]["purchasedApi"]>
  export type PurchasedApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type PurchasedApiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type PurchasedApiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $PurchasedApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchasedApi"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>
      Provider: Prisma.$ProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiId: string
      developerAddress: string
      providerId: string
      transactionHash: string
      paymentAmount: string
      status: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["purchasedApi"]>
    composites: {}
  }

  type PurchasedApiGetPayload<S extends boolean | null | undefined | PurchasedApiDefaultArgs> = $Result.GetResult<Prisma.$PurchasedApiPayload, S>

  type PurchasedApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasedApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasedApiCountAggregateInputType | true
    }

  export interface PurchasedApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchasedApi'], meta: { name: 'PurchasedApi' } }
    /**
     * Find zero or one PurchasedApi that matches the filter.
     * @param {PurchasedApiFindUniqueArgs} args - Arguments to find a PurchasedApi
     * @example
     * // Get one PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasedApiFindUniqueArgs>(args: SelectSubset<T, PurchasedApiFindUniqueArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchasedApi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasedApiFindUniqueOrThrowArgs} args - Arguments to find a PurchasedApi
     * @example
     * // Get one PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasedApiFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasedApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchasedApi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiFindFirstArgs} args - Arguments to find a PurchasedApi
     * @example
     * // Get one PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasedApiFindFirstArgs>(args?: SelectSubset<T, PurchasedApiFindFirstArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchasedApi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiFindFirstOrThrowArgs} args - Arguments to find a PurchasedApi
     * @example
     * // Get one PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasedApiFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasedApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchasedApis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchasedApis
     * const purchasedApis = await prisma.purchasedApi.findMany()
     * 
     * // Get first 10 PurchasedApis
     * const purchasedApis = await prisma.purchasedApi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasedApiWithIdOnly = await prisma.purchasedApi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchasedApiFindManyArgs>(args?: SelectSubset<T, PurchasedApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchasedApi.
     * @param {PurchasedApiCreateArgs} args - Arguments to create a PurchasedApi.
     * @example
     * // Create one PurchasedApi
     * const PurchasedApi = await prisma.purchasedApi.create({
     *   data: {
     *     // ... data to create a PurchasedApi
     *   }
     * })
     * 
     */
    create<T extends PurchasedApiCreateArgs>(args: SelectSubset<T, PurchasedApiCreateArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchasedApis.
     * @param {PurchasedApiCreateManyArgs} args - Arguments to create many PurchasedApis.
     * @example
     * // Create many PurchasedApis
     * const purchasedApi = await prisma.purchasedApi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasedApiCreateManyArgs>(args?: SelectSubset<T, PurchasedApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchasedApis and returns the data saved in the database.
     * @param {PurchasedApiCreateManyAndReturnArgs} args - Arguments to create many PurchasedApis.
     * @example
     * // Create many PurchasedApis
     * const purchasedApi = await prisma.purchasedApi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchasedApis and only return the `id`
     * const purchasedApiWithIdOnly = await prisma.purchasedApi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasedApiCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasedApiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchasedApi.
     * @param {PurchasedApiDeleteArgs} args - Arguments to delete one PurchasedApi.
     * @example
     * // Delete one PurchasedApi
     * const PurchasedApi = await prisma.purchasedApi.delete({
     *   where: {
     *     // ... filter to delete one PurchasedApi
     *   }
     * })
     * 
     */
    delete<T extends PurchasedApiDeleteArgs>(args: SelectSubset<T, PurchasedApiDeleteArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchasedApi.
     * @param {PurchasedApiUpdateArgs} args - Arguments to update one PurchasedApi.
     * @example
     * // Update one PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasedApiUpdateArgs>(args: SelectSubset<T, PurchasedApiUpdateArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchasedApis.
     * @param {PurchasedApiDeleteManyArgs} args - Arguments to filter PurchasedApis to delete.
     * @example
     * // Delete a few PurchasedApis
     * const { count } = await prisma.purchasedApi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasedApiDeleteManyArgs>(args?: SelectSubset<T, PurchasedApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasedApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchasedApis
     * const purchasedApi = await prisma.purchasedApi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasedApiUpdateManyArgs>(args: SelectSubset<T, PurchasedApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasedApis and returns the data updated in the database.
     * @param {PurchasedApiUpdateManyAndReturnArgs} args - Arguments to update many PurchasedApis.
     * @example
     * // Update many PurchasedApis
     * const purchasedApi = await prisma.purchasedApi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchasedApis and only return the `id`
     * const purchasedApiWithIdOnly = await prisma.purchasedApi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchasedApiUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchasedApiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchasedApi.
     * @param {PurchasedApiUpsertArgs} args - Arguments to update or create a PurchasedApi.
     * @example
     * // Update or create a PurchasedApi
     * const purchasedApi = await prisma.purchasedApi.upsert({
     *   create: {
     *     // ... data to create a PurchasedApi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchasedApi we want to update
     *   }
     * })
     */
    upsert<T extends PurchasedApiUpsertArgs>(args: SelectSubset<T, PurchasedApiUpsertArgs<ExtArgs>>): Prisma__PurchasedApiClient<$Result.GetResult<Prisma.$PurchasedApiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchasedApis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiCountArgs} args - Arguments to filter PurchasedApis to count.
     * @example
     * // Count the number of PurchasedApis
     * const count = await prisma.purchasedApi.count({
     *   where: {
     *     // ... the filter for the PurchasedApis we want to count
     *   }
     * })
    **/
    count<T extends PurchasedApiCountArgs>(
      args?: Subset<T, PurchasedApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasedApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchasedApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchasedApiAggregateArgs>(args: Subset<T, PurchasedApiAggregateArgs>): Prisma.PrismaPromise<GetPurchasedApiAggregateType<T>>

    /**
     * Group by PurchasedApi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedApiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchasedApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasedApiGroupByArgs['orderBy'] }
        : { orderBy?: PurchasedApiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchasedApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasedApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchasedApi model
   */
  readonly fields: PurchasedApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchasedApi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasedApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchasedApi model
   */
  interface PurchasedApiFieldRefs {
    readonly id: FieldRef<"PurchasedApi", 'String'>
    readonly apiId: FieldRef<"PurchasedApi", 'String'>
    readonly developerAddress: FieldRef<"PurchasedApi", 'String'>
    readonly providerId: FieldRef<"PurchasedApi", 'String'>
    readonly transactionHash: FieldRef<"PurchasedApi", 'String'>
    readonly paymentAmount: FieldRef<"PurchasedApi", 'String'>
    readonly status: FieldRef<"PurchasedApi", 'String'>
    readonly expiresAt: FieldRef<"PurchasedApi", 'DateTime'>
    readonly createdAt: FieldRef<"PurchasedApi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchasedApi findUnique
   */
  export type PurchasedApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedApi to fetch.
     */
    where: PurchasedApiWhereUniqueInput
  }

  /**
   * PurchasedApi findUniqueOrThrow
   */
  export type PurchasedApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedApi to fetch.
     */
    where: PurchasedApiWhereUniqueInput
  }

  /**
   * PurchasedApi findFirst
   */
  export type PurchasedApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedApi to fetch.
     */
    where?: PurchasedApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedApis to fetch.
     */
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedApis.
     */
    cursor?: PurchasedApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedApis.
     */
    distinct?: PurchasedApiScalarFieldEnum | PurchasedApiScalarFieldEnum[]
  }

  /**
   * PurchasedApi findFirstOrThrow
   */
  export type PurchasedApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedApi to fetch.
     */
    where?: PurchasedApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedApis to fetch.
     */
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedApis.
     */
    cursor?: PurchasedApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedApis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedApis.
     */
    distinct?: PurchasedApiScalarFieldEnum | PurchasedApiScalarFieldEnum[]
  }

  /**
   * PurchasedApi findMany
   */
  export type PurchasedApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedApis to fetch.
     */
    where?: PurchasedApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedApis to fetch.
     */
    orderBy?: PurchasedApiOrderByWithRelationInput | PurchasedApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchasedApis.
     */
    cursor?: PurchasedApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedApis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedApis.
     */
    skip?: number
    distinct?: PurchasedApiScalarFieldEnum | PurchasedApiScalarFieldEnum[]
  }

  /**
   * PurchasedApi create
   */
  export type PurchasedApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchasedApi.
     */
    data: XOR<PurchasedApiCreateInput, PurchasedApiUncheckedCreateInput>
  }

  /**
   * PurchasedApi createMany
   */
  export type PurchasedApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchasedApis.
     */
    data: PurchasedApiCreateManyInput | PurchasedApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchasedApi createManyAndReturn
   */
  export type PurchasedApiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * The data used to create many PurchasedApis.
     */
    data: PurchasedApiCreateManyInput | PurchasedApiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchasedApi update
   */
  export type PurchasedApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchasedApi.
     */
    data: XOR<PurchasedApiUpdateInput, PurchasedApiUncheckedUpdateInput>
    /**
     * Choose, which PurchasedApi to update.
     */
    where: PurchasedApiWhereUniqueInput
  }

  /**
   * PurchasedApi updateMany
   */
  export type PurchasedApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchasedApis.
     */
    data: XOR<PurchasedApiUpdateManyMutationInput, PurchasedApiUncheckedUpdateManyInput>
    /**
     * Filter which PurchasedApis to update
     */
    where?: PurchasedApiWhereInput
    /**
     * Limit how many PurchasedApis to update.
     */
    limit?: number
  }

  /**
   * PurchasedApi updateManyAndReturn
   */
  export type PurchasedApiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * The data used to update PurchasedApis.
     */
    data: XOR<PurchasedApiUpdateManyMutationInput, PurchasedApiUncheckedUpdateManyInput>
    /**
     * Filter which PurchasedApis to update
     */
    where?: PurchasedApiWhereInput
    /**
     * Limit how many PurchasedApis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchasedApi upsert
   */
  export type PurchasedApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchasedApi to update in case it exists.
     */
    where: PurchasedApiWhereUniqueInput
    /**
     * In case the PurchasedApi found by the `where` argument doesn't exist, create a new PurchasedApi with this data.
     */
    create: XOR<PurchasedApiCreateInput, PurchasedApiUncheckedCreateInput>
    /**
     * In case the PurchasedApi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasedApiUpdateInput, PurchasedApiUncheckedUpdateInput>
  }

  /**
   * PurchasedApi delete
   */
  export type PurchasedApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
    /**
     * Filter which PurchasedApi to delete.
     */
    where: PurchasedApiWhereUniqueInput
  }

  /**
   * PurchasedApi deleteMany
   */
  export type PurchasedApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedApis to delete
     */
    where?: PurchasedApiWhereInput
    /**
     * Limit how many PurchasedApis to delete.
     */
    limit?: number
  }

  /**
   * PurchasedApi without action
   */
  export type PurchasedApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedApi
     */
    select?: PurchasedApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedApi
     */
    omit?: PurchasedApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedApiInclude<ExtArgs> | null
  }


  /**
   * Model UsageLog
   */

  export type AggregateUsageLog = {
    _count: UsageLogCountAggregateOutputType | null
    _avg: UsageLogAvgAggregateOutputType | null
    _sum: UsageLogSumAggregateOutputType | null
    _min: UsageLogMinAggregateOutputType | null
    _max: UsageLogMaxAggregateOutputType | null
  }

  export type UsageLogAvgAggregateOutputType = {
    responseStatus: number | null
    responseTime: number | null
    responseSize: number | null
  }

  export type UsageLogSumAggregateOutputType = {
    responseStatus: number | null
    responseTime: number | null
    responseSize: number | null
  }

  export type UsageLogMinAggregateOutputType = {
    id: string | null
    tokenId: string | null
    apiId: string | null
    providerId: string | null
    developerAddress: string | null
    requestBody: string | null
    responseStatus: number | null
    responseTime: number | null
    responseSize: number | null
    errorMessage: string | null
    success: boolean | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageLogMaxAggregateOutputType = {
    id: string | null
    tokenId: string | null
    apiId: string | null
    providerId: string | null
    developerAddress: string | null
    requestBody: string | null
    responseStatus: number | null
    responseTime: number | null
    responseSize: number | null
    errorMessage: string | null
    success: boolean | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageLogCountAggregateOutputType = {
    id: number
    tokenId: number
    apiId: number
    providerId: number
    developerAddress: number
    requestHeaders: number
    requestParams: number
    requestBody: number
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage: number
    success: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type UsageLogAvgAggregateInputType = {
    responseStatus?: true
    responseTime?: true
    responseSize?: true
  }

  export type UsageLogSumAggregateInputType = {
    responseStatus?: true
    responseTime?: true
    responseSize?: true
  }

  export type UsageLogMinAggregateInputType = {
    id?: true
    tokenId?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    requestBody?: true
    responseStatus?: true
    responseTime?: true
    responseSize?: true
    errorMessage?: true
    success?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageLogMaxAggregateInputType = {
    id?: true
    tokenId?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    requestBody?: true
    responseStatus?: true
    responseTime?: true
    responseSize?: true
    errorMessage?: true
    success?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageLogCountAggregateInputType = {
    id?: true
    tokenId?: true
    apiId?: true
    providerId?: true
    developerAddress?: true
    requestHeaders?: true
    requestParams?: true
    requestBody?: true
    responseStatus?: true
    responseTime?: true
    responseSize?: true
    errorMessage?: true
    success?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type UsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLog to aggregate.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageLogs
    **/
    _count?: true | UsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageLogMaxAggregateInputType
  }

  export type GetUsageLogAggregateType<T extends UsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageLog[P]>
      : GetScalarType<T[P], AggregateUsageLog[P]>
  }




  export type UsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageLogWhereInput
    orderBy?: UsageLogOrderByWithAggregationInput | UsageLogOrderByWithAggregationInput[]
    by: UsageLogScalarFieldEnum[] | UsageLogScalarFieldEnum
    having?: UsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageLogCountAggregateInputType | true
    _avg?: UsageLogAvgAggregateInputType
    _sum?: UsageLogSumAggregateInputType
    _min?: UsageLogMinAggregateInputType
    _max?: UsageLogMaxAggregateInputType
  }

  export type UsageLogGroupByOutputType = {
    id: string
    tokenId: string
    apiId: string
    providerId: string
    developerAddress: string
    requestHeaders: JsonValue | null
    requestParams: JsonValue | null
    requestBody: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage: string | null
    success: boolean
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: UsageLogCountAggregateOutputType | null
    _avg: UsageLogAvgAggregateOutputType | null
    _sum: UsageLogSumAggregateOutputType | null
    _min: UsageLogMinAggregateOutputType | null
    _max: UsageLogMaxAggregateOutputType | null
  }

  type GetUsageLogGroupByPayload<T extends UsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], UsageLogGroupByOutputType[P]>
        }
      >
    >


  export type UsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    requestHeaders?: boolean
    requestParams?: boolean
    requestBody?: boolean
    responseStatus?: boolean
    responseTime?: boolean
    responseSize?: boolean
    errorMessage?: boolean
    success?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    requestHeaders?: boolean
    requestParams?: boolean
    requestBody?: boolean
    responseStatus?: boolean
    responseTime?: boolean
    responseSize?: boolean
    errorMessage?: boolean
    success?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    requestHeaders?: boolean
    requestParams?: boolean
    requestBody?: boolean
    responseStatus?: boolean
    responseTime?: boolean
    responseSize?: boolean
    errorMessage?: boolean
    success?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageLog"]>

  export type UsageLogSelectScalar = {
    id?: boolean
    tokenId?: boolean
    apiId?: boolean
    providerId?: boolean
    developerAddress?: boolean
    requestHeaders?: boolean
    requestParams?: boolean
    requestBody?: boolean
    responseStatus?: boolean
    responseTime?: boolean
    responseSize?: boolean
    errorMessage?: boolean
    success?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type UsageLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "apiId" | "providerId" | "developerAddress" | "requestHeaders" | "requestParams" | "requestBody" | "responseStatus" | "responseTime" | "responseSize" | "errorMessage" | "success" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["usageLog"]>
  export type UsageLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type UsageLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type UsageLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Api?: boolean | ApiDefaultArgs<ExtArgs>
    Token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $UsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageLog"
    objects: {
      Api: Prisma.$ApiPayload<ExtArgs>
      Token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: string
      apiId: string
      providerId: string
      developerAddress: string
      requestHeaders: Prisma.JsonValue | null
      requestParams: Prisma.JsonValue | null
      requestBody: string | null
      responseStatus: number
      responseTime: number
      responseSize: number
      errorMessage: string | null
      success: boolean
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["usageLog"]>
    composites: {}
  }

  type UsageLogGetPayload<S extends boolean | null | undefined | UsageLogDefaultArgs> = $Result.GetResult<Prisma.$UsageLogPayload, S>

  type UsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageLogCountAggregateInputType | true
    }

  export interface UsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageLog'], meta: { name: 'UsageLog' } }
    /**
     * Find zero or one UsageLog that matches the filter.
     * @param {UsageLogFindUniqueArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageLogFindUniqueArgs>(args: SelectSubset<T, UsageLogFindUniqueArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageLogFindUniqueOrThrowArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindFirstArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageLogFindFirstArgs>(args?: SelectSubset<T, UsageLogFindFirstArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindFirstOrThrowArgs} args - Arguments to find a UsageLog
     * @example
     * // Get one UsageLog
     * const usageLog = await prisma.usageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageLogs
     * const usageLogs = await prisma.usageLog.findMany()
     * 
     * // Get first 10 UsageLogs
     * const usageLogs = await prisma.usageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageLogFindManyArgs>(args?: SelectSubset<T, UsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageLog.
     * @param {UsageLogCreateArgs} args - Arguments to create a UsageLog.
     * @example
     * // Create one UsageLog
     * const UsageLog = await prisma.usageLog.create({
     *   data: {
     *     // ... data to create a UsageLog
     *   }
     * })
     * 
     */
    create<T extends UsageLogCreateArgs>(args: SelectSubset<T, UsageLogCreateArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageLogs.
     * @param {UsageLogCreateManyArgs} args - Arguments to create many UsageLogs.
     * @example
     * // Create many UsageLogs
     * const usageLog = await prisma.usageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageLogCreateManyArgs>(args?: SelectSubset<T, UsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageLogs and returns the data saved in the database.
     * @param {UsageLogCreateManyAndReturnArgs} args - Arguments to create many UsageLogs.
     * @example
     * // Create many UsageLogs
     * const usageLog = await prisma.usageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageLogs and only return the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageLog.
     * @param {UsageLogDeleteArgs} args - Arguments to delete one UsageLog.
     * @example
     * // Delete one UsageLog
     * const UsageLog = await prisma.usageLog.delete({
     *   where: {
     *     // ... filter to delete one UsageLog
     *   }
     * })
     * 
     */
    delete<T extends UsageLogDeleteArgs>(args: SelectSubset<T, UsageLogDeleteArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageLog.
     * @param {UsageLogUpdateArgs} args - Arguments to update one UsageLog.
     * @example
     * // Update one UsageLog
     * const usageLog = await prisma.usageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageLogUpdateArgs>(args: SelectSubset<T, UsageLogUpdateArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageLogs.
     * @param {UsageLogDeleteManyArgs} args - Arguments to filter UsageLogs to delete.
     * @example
     * // Delete a few UsageLogs
     * const { count } = await prisma.usageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageLogDeleteManyArgs>(args?: SelectSubset<T, UsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageLogs
     * const usageLog = await prisma.usageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageLogUpdateManyArgs>(args: SelectSubset<T, UsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageLogs and returns the data updated in the database.
     * @param {UsageLogUpdateManyAndReturnArgs} args - Arguments to update many UsageLogs.
     * @example
     * // Update many UsageLogs
     * const usageLog = await prisma.usageLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageLogs and only return the `id`
     * const usageLogWithIdOnly = await prisma.usageLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageLogUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageLog.
     * @param {UsageLogUpsertArgs} args - Arguments to update or create a UsageLog.
     * @example
     * // Update or create a UsageLog
     * const usageLog = await prisma.usageLog.upsert({
     *   create: {
     *     // ... data to create a UsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageLog we want to update
     *   }
     * })
     */
    upsert<T extends UsageLogUpsertArgs>(args: SelectSubset<T, UsageLogUpsertArgs<ExtArgs>>): Prisma__UsageLogClient<$Result.GetResult<Prisma.$UsageLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogCountArgs} args - Arguments to filter UsageLogs to count.
     * @example
     * // Count the number of UsageLogs
     * const count = await prisma.usageLog.count({
     *   where: {
     *     // ... the filter for the UsageLogs we want to count
     *   }
     * })
    **/
    count<T extends UsageLogCountArgs>(
      args?: Subset<T, UsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageLogAggregateArgs>(args: Subset<T, UsageLogAggregateArgs>): Prisma.PrismaPromise<GetUsageLogAggregateType<T>>

    /**
     * Group by UsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageLogGroupByArgs['orderBy'] }
        : { orderBy?: UsageLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageLog model
   */
  readonly fields: UsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageLog model
   */
  interface UsageLogFieldRefs {
    readonly id: FieldRef<"UsageLog", 'String'>
    readonly tokenId: FieldRef<"UsageLog", 'String'>
    readonly apiId: FieldRef<"UsageLog", 'String'>
    readonly providerId: FieldRef<"UsageLog", 'String'>
    readonly developerAddress: FieldRef<"UsageLog", 'String'>
    readonly requestHeaders: FieldRef<"UsageLog", 'Json'>
    readonly requestParams: FieldRef<"UsageLog", 'Json'>
    readonly requestBody: FieldRef<"UsageLog", 'String'>
    readonly responseStatus: FieldRef<"UsageLog", 'Int'>
    readonly responseTime: FieldRef<"UsageLog", 'Int'>
    readonly responseSize: FieldRef<"UsageLog", 'Int'>
    readonly errorMessage: FieldRef<"UsageLog", 'String'>
    readonly success: FieldRef<"UsageLog", 'Boolean'>
    readonly ipAddress: FieldRef<"UsageLog", 'String'>
    readonly userAgent: FieldRef<"UsageLog", 'String'>
    readonly createdAt: FieldRef<"UsageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageLog findUnique
   */
  export type UsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog findUniqueOrThrow
   */
  export type UsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog findFirst
   */
  export type UsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLogs.
     */
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog findFirstOrThrow
   */
  export type UsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLog to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageLogs.
     */
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog findMany
   */
  export type UsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter, which UsageLogs to fetch.
     */
    where?: UsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageLogs to fetch.
     */
    orderBy?: UsageLogOrderByWithRelationInput | UsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageLogs.
     */
    cursor?: UsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageLogs.
     */
    skip?: number
    distinct?: UsageLogScalarFieldEnum | UsageLogScalarFieldEnum[]
  }

  /**
   * UsageLog create
   */
  export type UsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageLog.
     */
    data: XOR<UsageLogCreateInput, UsageLogUncheckedCreateInput>
  }

  /**
   * UsageLog createMany
   */
  export type UsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageLogs.
     */
    data: UsageLogCreateManyInput | UsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageLog createManyAndReturn
   */
  export type UsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * The data used to create many UsageLogs.
     */
    data: UsageLogCreateManyInput | UsageLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageLog update
   */
  export type UsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageLog.
     */
    data: XOR<UsageLogUpdateInput, UsageLogUncheckedUpdateInput>
    /**
     * Choose, which UsageLog to update.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog updateMany
   */
  export type UsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageLogs.
     */
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyInput>
    /**
     * Filter which UsageLogs to update
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to update.
     */
    limit?: number
  }

  /**
   * UsageLog updateManyAndReturn
   */
  export type UsageLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * The data used to update UsageLogs.
     */
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyInput>
    /**
     * Filter which UsageLogs to update
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageLog upsert
   */
  export type UsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageLog to update in case it exists.
     */
    where: UsageLogWhereUniqueInput
    /**
     * In case the UsageLog found by the `where` argument doesn't exist, create a new UsageLog with this data.
     */
    create: XOR<UsageLogCreateInput, UsageLogUncheckedCreateInput>
    /**
     * In case the UsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageLogUpdateInput, UsageLogUncheckedUpdateInput>
  }

  /**
   * UsageLog delete
   */
  export type UsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
    /**
     * Filter which UsageLog to delete.
     */
    where: UsageLogWhereUniqueInput
  }

  /**
   * UsageLog deleteMany
   */
  export type UsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageLogs to delete
     */
    where?: UsageLogWhereInput
    /**
     * Limit how many UsageLogs to delete.
     */
    limit?: number
  }

  /**
   * UsageLog without action
   */
  export type UsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageLog
     */
    select?: UsageLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageLog
     */
    omit?: UsageLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    name: 'name',
    description: 'description',
    category: 'category',
    endpoint: 'endpoint',
    publicPath: 'publicPath',
    method: 'method',
    pricePerCall: 'pricePerCall',
    currency: 'currency',
    isActive: 'isActive',
    totalCalls: 'totalCalls',
    totalRevenue: 'totalRevenue',
    averageResponseTime: 'averageResponseTime',
    uptime: 'uptime',
    documentation: 'documentation',
    headers: 'headers',
    queryParams: 'queryParams',
    internalEndpoint: 'internalEndpoint',
    internalAuth: 'internalAuth',
    relayConfiguration: 'relayConfiguration',
    isDirectRelay: 'isDirectRelay',
    fallbackEndpoint: 'fallbackEndpoint',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ApiScalarFieldEnum = (typeof ApiScalarFieldEnum)[keyof typeof ApiScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    name: 'name',
    keyHash: 'keyHash',
    lastUsed: 'lastUsed',
    isActive: 'isActive',
    permissions: 'permissions',
    rateLimit: 'rateLimit',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    updatedAt: 'updatedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    apiId: 'apiId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    email: 'email',
    name: 'name',
    description: 'description',
    website: 'website',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    reputationScore: 'reputationScore',
    totalEarnings: 'totalEarnings',
    totalCalls: 'totalCalls',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    reviewerAddress: 'reviewerAddress',
    rating: 'rating',
    comment: 'comment',
    isVerified: 'isVerified',
    helpfulCount: 'helpfulCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    providerId: 'providerId',
    developerAddress: 'developerAddress',
    tokenHash: 'tokenHash',
    isUsed: 'isUsed',
    usedAt: 'usedAt',
    expiresAt: 'expiresAt',
    lastValidAfter: 'lastValidAfter',
    requestMetadata: 'requestMetadata',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const PurchasedApiScalarFieldEnum: {
    id: 'id',
    apiId: 'apiId',
    developerAddress: 'developerAddress',
    providerId: 'providerId',
    transactionHash: 'transactionHash',
    paymentAmount: 'paymentAmount',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PurchasedApiScalarFieldEnum = (typeof PurchasedApiScalarFieldEnum)[keyof typeof PurchasedApiScalarFieldEnum]


  export const UsageLogScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    apiId: 'apiId',
    providerId: 'providerId',
    developerAddress: 'developerAddress',
    requestHeaders: 'requestHeaders',
    requestParams: 'requestParams',
    requestBody: 'requestBody',
    responseStatus: 'responseStatus',
    responseTime: 'responseTime',
    responseSize: 'responseSize',
    errorMessage: 'errorMessage',
    success: 'success',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type UsageLogScalarFieldEnum = (typeof UsageLogScalarFieldEnum)[keyof typeof UsageLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ApiWhereInput = {
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    id?: StringFilter<"Api"> | string
    providerId?: StringFilter<"Api"> | string
    name?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    category?: StringFilter<"Api"> | string
    endpoint?: StringFilter<"Api"> | string
    publicPath?: StringFilter<"Api"> | string
    method?: StringFilter<"Api"> | string
    pricePerCall?: StringFilter<"Api"> | string
    currency?: StringFilter<"Api"> | string
    isActive?: BoolFilter<"Api"> | boolean
    totalCalls?: IntFilter<"Api"> | number
    totalRevenue?: StringFilter<"Api"> | string
    averageResponseTime?: IntFilter<"Api"> | number
    uptime?: FloatFilter<"Api"> | number
    documentation?: JsonNullableFilter<"Api">
    headers?: JsonNullableFilter<"Api">
    queryParams?: JsonNullableFilter<"Api">
    internalEndpoint?: StringNullableFilter<"Api"> | string | null
    internalAuth?: JsonNullableFilter<"Api">
    relayConfiguration?: JsonNullableFilter<"Api">
    isDirectRelay?: BoolFilter<"Api"> | boolean
    fallbackEndpoint?: StringNullableFilter<"Api"> | string | null
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    Favorite?: FavoriteListRelationFilter
    Review?: ReviewListRelationFilter
    Token?: TokenListRelationFilter
    UsageLog?: UsageLogListRelationFilter
    PurchasedApi?: PurchasedApiListRelationFilter
  }

  export type ApiOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    endpoint?: SortOrder
    publicPath?: SortOrder
    method?: SortOrder
    pricePerCall?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    totalCalls?: SortOrder
    totalRevenue?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
    documentation?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    queryParams?: SortOrderInput | SortOrder
    internalEndpoint?: SortOrderInput | SortOrder
    internalAuth?: SortOrderInput | SortOrder
    relayConfiguration?: SortOrderInput | SortOrder
    isDirectRelay?: SortOrder
    fallbackEndpoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Provider?: ProviderOrderByWithRelationInput
    Favorite?: FavoriteOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    Token?: TokenOrderByRelationAggregateInput
    UsageLog?: UsageLogOrderByRelationAggregateInput
    PurchasedApi?: PurchasedApiOrderByRelationAggregateInput
  }

  export type ApiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicPath?: string
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    providerId?: StringFilter<"Api"> | string
    name?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    category?: StringFilter<"Api"> | string
    endpoint?: StringFilter<"Api"> | string
    method?: StringFilter<"Api"> | string
    pricePerCall?: StringFilter<"Api"> | string
    currency?: StringFilter<"Api"> | string
    isActive?: BoolFilter<"Api"> | boolean
    totalCalls?: IntFilter<"Api"> | number
    totalRevenue?: StringFilter<"Api"> | string
    averageResponseTime?: IntFilter<"Api"> | number
    uptime?: FloatFilter<"Api"> | number
    documentation?: JsonNullableFilter<"Api">
    headers?: JsonNullableFilter<"Api">
    queryParams?: JsonNullableFilter<"Api">
    internalEndpoint?: StringNullableFilter<"Api"> | string | null
    internalAuth?: JsonNullableFilter<"Api">
    relayConfiguration?: JsonNullableFilter<"Api">
    isDirectRelay?: BoolFilter<"Api"> | boolean
    fallbackEndpoint?: StringNullableFilter<"Api"> | string | null
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    Favorite?: FavoriteListRelationFilter
    Review?: ReviewListRelationFilter
    Token?: TokenListRelationFilter
    UsageLog?: UsageLogListRelationFilter
    PurchasedApi?: PurchasedApiListRelationFilter
  }, "id" | "publicPath">

  export type ApiOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    endpoint?: SortOrder
    publicPath?: SortOrder
    method?: SortOrder
    pricePerCall?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    totalCalls?: SortOrder
    totalRevenue?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
    documentation?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    queryParams?: SortOrderInput | SortOrder
    internalEndpoint?: SortOrderInput | SortOrder
    internalAuth?: SortOrderInput | SortOrder
    relayConfiguration?: SortOrderInput | SortOrder
    isDirectRelay?: SortOrder
    fallbackEndpoint?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ApiCountOrderByAggregateInput
    _avg?: ApiAvgOrderByAggregateInput
    _max?: ApiMaxOrderByAggregateInput
    _min?: ApiMinOrderByAggregateInput
    _sum?: ApiSumOrderByAggregateInput
  }

  export type ApiScalarWhereWithAggregatesInput = {
    AND?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    OR?: ApiScalarWhereWithAggregatesInput[]
    NOT?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Api"> | string
    providerId?: StringWithAggregatesFilter<"Api"> | string
    name?: StringWithAggregatesFilter<"Api"> | string
    description?: StringWithAggregatesFilter<"Api"> | string
    category?: StringWithAggregatesFilter<"Api"> | string
    endpoint?: StringWithAggregatesFilter<"Api"> | string
    publicPath?: StringWithAggregatesFilter<"Api"> | string
    method?: StringWithAggregatesFilter<"Api"> | string
    pricePerCall?: StringWithAggregatesFilter<"Api"> | string
    currency?: StringWithAggregatesFilter<"Api"> | string
    isActive?: BoolWithAggregatesFilter<"Api"> | boolean
    totalCalls?: IntWithAggregatesFilter<"Api"> | number
    totalRevenue?: StringWithAggregatesFilter<"Api"> | string
    averageResponseTime?: IntWithAggregatesFilter<"Api"> | number
    uptime?: FloatWithAggregatesFilter<"Api"> | number
    documentation?: JsonNullableWithAggregatesFilter<"Api">
    headers?: JsonNullableWithAggregatesFilter<"Api">
    queryParams?: JsonNullableWithAggregatesFilter<"Api">
    internalEndpoint?: StringNullableWithAggregatesFilter<"Api"> | string | null
    internalAuth?: JsonNullableWithAggregatesFilter<"Api">
    relayConfiguration?: JsonNullableWithAggregatesFilter<"Api">
    isDirectRelay?: BoolWithAggregatesFilter<"Api"> | boolean
    fallbackEndpoint?: StringNullableWithAggregatesFilter<"Api"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Api"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Api"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    providerId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    permissions?: JsonNullableFilter<"ApiKey">
    rateLimit?: IntNullableFilter<"ApiKey"> | number | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    isActive?: SortOrder
    permissions?: SortOrderInput | SortOrder
    rateLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    Provider?: ProviderOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    providerId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    permissions?: JsonNullableFilter<"ApiKey">
    rateLimit?: IntNullableFilter<"ApiKey"> | number | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    lastUsed?: SortOrderInput | SortOrder
    isActive?: SortOrder
    permissions?: SortOrderInput | SortOrder
    rateLimit?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    providerId?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    lastUsed?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    permissions?: JsonNullableWithAggregatesFilter<"ApiKey">
    rateLimit?: IntNullableWithAggregatesFilter<"ApiKey"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    apiId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    createdAt?: SortOrder
    Api?: ApiOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_apiId?: FavoriteUserIdApiIdCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: StringFilter<"Favorite"> | string
    apiId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id" | "userId_apiId">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorite"> | string
    userId?: StringWithAggregatesFilter<"Favorite"> | string
    apiId?: StringWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    walletAddress?: StringFilter<"Provider"> | string
    email?: StringNullableFilter<"Provider"> | string | null
    name?: StringNullableFilter<"Provider"> | string | null
    description?: StringNullableFilter<"Provider"> | string | null
    website?: StringNullableFilter<"Provider"> | string | null
    avatarUrl?: StringNullableFilter<"Provider"> | string | null
    isActive?: BoolFilter<"Provider"> | boolean
    reputationScore?: FloatFilter<"Provider"> | number
    totalEarnings?: StringFilter<"Provider"> | string
    totalCalls?: IntFilter<"Provider"> | number
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    Api?: ApiListRelationFilter
    ApiKey?: ApiKeyListRelationFilter
    Token?: TokenListRelationFilter
    PurchasedApi?: PurchasedApiListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    reputationScore?: SortOrder
    totalEarnings?: SortOrder
    totalCalls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Api?: ApiOrderByRelationAggregateInput
    ApiKey?: ApiKeyOrderByRelationAggregateInput
    Token?: TokenOrderByRelationAggregateInput
    PurchasedApi?: PurchasedApiOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    email?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    name?: StringNullableFilter<"Provider"> | string | null
    description?: StringNullableFilter<"Provider"> | string | null
    website?: StringNullableFilter<"Provider"> | string | null
    avatarUrl?: StringNullableFilter<"Provider"> | string | null
    isActive?: BoolFilter<"Provider"> | boolean
    reputationScore?: FloatFilter<"Provider"> | number
    totalEarnings?: StringFilter<"Provider"> | string
    totalCalls?: IntFilter<"Provider"> | number
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    Api?: ApiListRelationFilter
    ApiKey?: ApiKeyListRelationFilter
    Token?: TokenListRelationFilter
    PurchasedApi?: PurchasedApiListRelationFilter
  }, "id" | "walletAddress" | "email">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    reputationScore?: SortOrder
    totalEarnings?: SortOrder
    totalCalls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _avg?: ProviderAvgOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
    _sum?: ProviderSumOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    walletAddress?: StringWithAggregatesFilter<"Provider"> | string
    email?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    name?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    description?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    website?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    isActive?: BoolWithAggregatesFilter<"Provider"> | boolean
    reputationScore?: FloatWithAggregatesFilter<"Provider"> | number
    totalEarnings?: StringWithAggregatesFilter<"Provider"> | string
    totalCalls?: IntWithAggregatesFilter<"Provider"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    apiId?: StringFilter<"Review"> | string
    reviewerAddress?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isVerified?: BoolFilter<"Review"> | boolean
    helpfulCount?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    reviewerAddress?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    helpfulCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Api?: ApiOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiId_reviewerAddress?: ReviewApiIdReviewerAddressCompoundUniqueInput
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    apiId?: StringFilter<"Review"> | string
    reviewerAddress?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isVerified?: BoolFilter<"Review"> | boolean
    helpfulCount?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id" | "apiId_reviewerAddress">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    reviewerAddress?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    helpfulCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    apiId?: StringWithAggregatesFilter<"Review"> | string
    reviewerAddress?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Review"> | boolean
    helpfulCount?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    apiId?: StringFilter<"Token"> | string
    providerId?: StringFilter<"Token"> | string
    developerAddress?: StringFilter<"Token"> | string
    tokenHash?: StringFilter<"Token"> | string
    isUsed?: BoolFilter<"Token"> | boolean
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    lastValidAfter?: DateTimeFilter<"Token"> | Date | string
    requestMetadata?: JsonNullableFilter<"Token">
    createdAt?: DateTimeFilter<"Token"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    UsageLog?: XOR<UsageLogNullableScalarRelationFilter, UsageLogWhereInput> | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    tokenHash?: SortOrder
    isUsed?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastValidAfter?: SortOrder
    requestMetadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Api?: ApiOrderByWithRelationInput
    Provider?: ProviderOrderByWithRelationInput
    UsageLog?: UsageLogOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    apiId?: StringFilter<"Token"> | string
    providerId?: StringFilter<"Token"> | string
    developerAddress?: StringFilter<"Token"> | string
    isUsed?: BoolFilter<"Token"> | boolean
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    lastValidAfter?: DateTimeFilter<"Token"> | Date | string
    requestMetadata?: JsonNullableFilter<"Token">
    createdAt?: DateTimeFilter<"Token"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    UsageLog?: XOR<UsageLogNullableScalarRelationFilter, UsageLogWhereInput> | null
  }, "id" | "tokenHash">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    tokenHash?: SortOrder
    isUsed?: SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastValidAfter?: SortOrder
    requestMetadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    apiId?: StringWithAggregatesFilter<"Token"> | string
    providerId?: StringWithAggregatesFilter<"Token"> | string
    developerAddress?: StringWithAggregatesFilter<"Token"> | string
    tokenHash?: StringWithAggregatesFilter<"Token"> | string
    isUsed?: BoolWithAggregatesFilter<"Token"> | boolean
    usedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    lastValidAfter?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    requestMetadata?: JsonNullableWithAggregatesFilter<"Token">
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type PurchasedApiWhereInput = {
    AND?: PurchasedApiWhereInput | PurchasedApiWhereInput[]
    OR?: PurchasedApiWhereInput[]
    NOT?: PurchasedApiWhereInput | PurchasedApiWhereInput[]
    id?: StringFilter<"PurchasedApi"> | string
    apiId?: StringFilter<"PurchasedApi"> | string
    developerAddress?: StringFilter<"PurchasedApi"> | string
    providerId?: StringFilter<"PurchasedApi"> | string
    transactionHash?: StringFilter<"PurchasedApi"> | string
    paymentAmount?: StringFilter<"PurchasedApi"> | string
    status?: StringFilter<"PurchasedApi"> | string
    expiresAt?: DateTimeFilter<"PurchasedApi"> | Date | string
    createdAt?: DateTimeFilter<"PurchasedApi"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }

  export type PurchasedApiOrderByWithRelationInput = {
    id?: SortOrder
    apiId?: SortOrder
    developerAddress?: SortOrder
    providerId?: SortOrder
    transactionHash?: SortOrder
    paymentAmount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    Api?: ApiOrderByWithRelationInput
    Provider?: ProviderOrderByWithRelationInput
  }

  export type PurchasedApiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchasedApiWhereInput | PurchasedApiWhereInput[]
    OR?: PurchasedApiWhereInput[]
    NOT?: PurchasedApiWhereInput | PurchasedApiWhereInput[]
    apiId?: StringFilter<"PurchasedApi"> | string
    developerAddress?: StringFilter<"PurchasedApi"> | string
    providerId?: StringFilter<"PurchasedApi"> | string
    transactionHash?: StringFilter<"PurchasedApi"> | string
    paymentAmount?: StringFilter<"PurchasedApi"> | string
    status?: StringFilter<"PurchasedApi"> | string
    expiresAt?: DateTimeFilter<"PurchasedApi"> | Date | string
    createdAt?: DateTimeFilter<"PurchasedApi"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
  }, "id">

  export type PurchasedApiOrderByWithAggregationInput = {
    id?: SortOrder
    apiId?: SortOrder
    developerAddress?: SortOrder
    providerId?: SortOrder
    transactionHash?: SortOrder
    paymentAmount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PurchasedApiCountOrderByAggregateInput
    _max?: PurchasedApiMaxOrderByAggregateInput
    _min?: PurchasedApiMinOrderByAggregateInput
  }

  export type PurchasedApiScalarWhereWithAggregatesInput = {
    AND?: PurchasedApiScalarWhereWithAggregatesInput | PurchasedApiScalarWhereWithAggregatesInput[]
    OR?: PurchasedApiScalarWhereWithAggregatesInput[]
    NOT?: PurchasedApiScalarWhereWithAggregatesInput | PurchasedApiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchasedApi"> | string
    apiId?: StringWithAggregatesFilter<"PurchasedApi"> | string
    developerAddress?: StringWithAggregatesFilter<"PurchasedApi"> | string
    providerId?: StringWithAggregatesFilter<"PurchasedApi"> | string
    transactionHash?: StringWithAggregatesFilter<"PurchasedApi"> | string
    paymentAmount?: StringWithAggregatesFilter<"PurchasedApi"> | string
    status?: StringWithAggregatesFilter<"PurchasedApi"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PurchasedApi"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchasedApi"> | Date | string
  }

  export type UsageLogWhereInput = {
    AND?: UsageLogWhereInput | UsageLogWhereInput[]
    OR?: UsageLogWhereInput[]
    NOT?: UsageLogWhereInput | UsageLogWhereInput[]
    id?: StringFilter<"UsageLog"> | string
    tokenId?: StringFilter<"UsageLog"> | string
    apiId?: StringFilter<"UsageLog"> | string
    providerId?: StringFilter<"UsageLog"> | string
    developerAddress?: StringFilter<"UsageLog"> | string
    requestHeaders?: JsonNullableFilter<"UsageLog">
    requestParams?: JsonNullableFilter<"UsageLog">
    requestBody?: StringNullableFilter<"UsageLog"> | string | null
    responseStatus?: IntFilter<"UsageLog"> | number
    responseTime?: IntFilter<"UsageLog"> | number
    responseSize?: IntFilter<"UsageLog"> | number
    errorMessage?: StringNullableFilter<"UsageLog"> | string | null
    success?: BoolFilter<"UsageLog"> | boolean
    ipAddress?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type UsageLogOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    requestHeaders?: SortOrderInput | SortOrder
    requestParams?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    success?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Api?: ApiOrderByWithRelationInput
    Token?: TokenOrderByWithRelationInput
  }

  export type UsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenId?: string
    AND?: UsageLogWhereInput | UsageLogWhereInput[]
    OR?: UsageLogWhereInput[]
    NOT?: UsageLogWhereInput | UsageLogWhereInput[]
    apiId?: StringFilter<"UsageLog"> | string
    providerId?: StringFilter<"UsageLog"> | string
    developerAddress?: StringFilter<"UsageLog"> | string
    requestHeaders?: JsonNullableFilter<"UsageLog">
    requestParams?: JsonNullableFilter<"UsageLog">
    requestBody?: StringNullableFilter<"UsageLog"> | string | null
    responseStatus?: IntFilter<"UsageLog"> | number
    responseTime?: IntFilter<"UsageLog"> | number
    responseSize?: IntFilter<"UsageLog"> | number
    errorMessage?: StringNullableFilter<"UsageLog"> | string | null
    success?: BoolFilter<"UsageLog"> | boolean
    ipAddress?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
    Api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
    Token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id" | "tokenId">

  export type UsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    requestHeaders?: SortOrderInput | SortOrder
    requestParams?: SortOrderInput | SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    success?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsageLogCountOrderByAggregateInput
    _avg?: UsageLogAvgOrderByAggregateInput
    _max?: UsageLogMaxOrderByAggregateInput
    _min?: UsageLogMinOrderByAggregateInput
    _sum?: UsageLogSumOrderByAggregateInput
  }

  export type UsageLogScalarWhereWithAggregatesInput = {
    AND?: UsageLogScalarWhereWithAggregatesInput | UsageLogScalarWhereWithAggregatesInput[]
    OR?: UsageLogScalarWhereWithAggregatesInput[]
    NOT?: UsageLogScalarWhereWithAggregatesInput | UsageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageLog"> | string
    tokenId?: StringWithAggregatesFilter<"UsageLog"> | string
    apiId?: StringWithAggregatesFilter<"UsageLog"> | string
    providerId?: StringWithAggregatesFilter<"UsageLog"> | string
    developerAddress?: StringWithAggregatesFilter<"UsageLog"> | string
    requestHeaders?: JsonNullableWithAggregatesFilter<"UsageLog">
    requestParams?: JsonNullableWithAggregatesFilter<"UsageLog">
    requestBody?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    responseStatus?: IntWithAggregatesFilter<"UsageLog"> | number
    responseTime?: IntWithAggregatesFilter<"UsageLog"> | number
    responseSize?: IntWithAggregatesFilter<"UsageLog"> | number
    errorMessage?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    success?: BoolWithAggregatesFilter<"UsageLog"> | boolean
    ipAddress?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UsageLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageLog"> | Date | string
  }

  export type ApiCreateInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiCreateManyInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ApiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
    Provider: ProviderCreateNestedOneWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id: string
    providerId: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id: string
    providerId: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id: string
    userId: string
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutFavoriteInput
  }

  export type FavoriteUncheckedCreateInput = {
    id: string
    userId: string
    apiId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id: string
    userId: string
    apiId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyCreateNestedManyWithoutProviderInput
    Token?: TokenCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiUncheckedCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutProviderInput
    Token?: TokenUncheckedCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUpdateManyWithoutProviderNestedInput
    Token?: TokenUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUncheckedUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutProviderNestedInput
    Token?: TokenUncheckedUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api: ApiCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id: string
    apiId: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id: string
    apiId: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutTokenInput
    Provider: ProviderCreateNestedOneWithoutTokenInput
    UsageLog?: UsageLogCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id: string
    apiId: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    UsageLog?: UsageLogUncheckedCreateNestedOneWithoutTokenInput
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutTokenNestedInput
    Provider?: ProviderUpdateOneRequiredWithoutTokenNestedInput
    UsageLog?: UsageLogUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsageLog?: UsageLogUncheckedUpdateOneWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    id: string
    apiId: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiCreateInput = {
    id: string
    developerAddress: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutPurchasedApiInput
    Provider: ProviderCreateNestedOneWithoutPurchasedApiInput
  }

  export type PurchasedApiUncheckedCreateInput = {
    id: string
    apiId: string
    developerAddress: string
    providerId: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PurchasedApiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutPurchasedApiNestedInput
    Provider?: ProviderUpdateOneRequiredWithoutPurchasedApiNestedInput
  }

  export type PurchasedApiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiCreateManyInput = {
    id: string
    apiId: string
    developerAddress: string
    providerId: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PurchasedApiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogCreateInput = {
    id: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutUsageLogInput
    Token: TokenCreateNestedOneWithoutUsageLogInput
  }

  export type UsageLogUncheckedCreateInput = {
    id: string
    tokenId: string
    apiId: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutUsageLogNestedInput
    Token?: TokenUpdateOneRequiredWithoutUsageLogNestedInput
  }

  export type UsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogCreateManyInput = {
    id: string
    tokenId: string
    apiId: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type UsageLogListRelationFilter = {
    every?: UsageLogWhereInput
    some?: UsageLogWhereInput
    none?: UsageLogWhereInput
  }

  export type PurchasedApiListRelationFilter = {
    every?: PurchasedApiWhereInput
    some?: PurchasedApiWhereInput
    none?: PurchasedApiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasedApiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    endpoint?: SortOrder
    publicPath?: SortOrder
    method?: SortOrder
    pricePerCall?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    totalCalls?: SortOrder
    totalRevenue?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
    documentation?: SortOrder
    headers?: SortOrder
    queryParams?: SortOrder
    internalEndpoint?: SortOrder
    internalAuth?: SortOrder
    relayConfiguration?: SortOrder
    isDirectRelay?: SortOrder
    fallbackEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiAvgOrderByAggregateInput = {
    totalCalls?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
  }

  export type ApiMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    endpoint?: SortOrder
    publicPath?: SortOrder
    method?: SortOrder
    pricePerCall?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    totalCalls?: SortOrder
    totalRevenue?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
    internalEndpoint?: SortOrder
    isDirectRelay?: SortOrder
    fallbackEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    endpoint?: SortOrder
    publicPath?: SortOrder
    method?: SortOrder
    pricePerCall?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    totalCalls?: SortOrder
    totalRevenue?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
    internalEndpoint?: SortOrder
    isDirectRelay?: SortOrder
    fallbackEndpoint?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiSumOrderByAggregateInput = {
    totalCalls?: SortOrder
    averageResponseTime?: SortOrder
    uptime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    lastUsed?: SortOrder
    isActive?: SortOrder
    permissions?: SortOrder
    rateLimit?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    rateLimit?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    lastUsed?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    lastUsed?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    rateLimit?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ApiScalarRelationFilter = {
    is?: ApiWhereInput
    isNot?: ApiWhereInput
  }

  export type FavoriteUserIdApiIdCompoundUniqueInput = {
    userId: string
    apiId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiListRelationFilter = {
    every?: ApiWhereInput
    some?: ApiWhereInput
    none?: ApiWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ApiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    reputationScore?: SortOrder
    totalEarnings?: SortOrder
    totalCalls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAvgOrderByAggregateInput = {
    reputationScore?: SortOrder
    totalCalls?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    reputationScore?: SortOrder
    totalEarnings?: SortOrder
    totalCalls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    email?: SortOrder
    name?: SortOrder
    description?: SortOrder
    website?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    reputationScore?: SortOrder
    totalEarnings?: SortOrder
    totalCalls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSumOrderByAggregateInput = {
    reputationScore?: SortOrder
    totalCalls?: SortOrder
  }

  export type ReviewApiIdReviewerAddressCompoundUniqueInput = {
    apiId: string
    reviewerAddress: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    reviewerAddress?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isVerified?: SortOrder
    helpfulCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
    helpfulCount?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    reviewerAddress?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isVerified?: SortOrder
    helpfulCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    reviewerAddress?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    isVerified?: SortOrder
    helpfulCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
    helpfulCount?: SortOrder
  }

  export type UsageLogNullableScalarRelationFilter = {
    is?: UsageLogWhereInput | null
    isNot?: UsageLogWhereInput | null
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    tokenHash?: SortOrder
    isUsed?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    lastValidAfter?: SortOrder
    requestMetadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    tokenHash?: SortOrder
    isUsed?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    lastValidAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    tokenHash?: SortOrder
    isUsed?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    lastValidAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedApiCountOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    developerAddress?: SortOrder
    providerId?: SortOrder
    transactionHash?: SortOrder
    paymentAmount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedApiMaxOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    developerAddress?: SortOrder
    providerId?: SortOrder
    transactionHash?: SortOrder
    paymentAmount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedApiMinOrderByAggregateInput = {
    id?: SortOrder
    apiId?: SortOrder
    developerAddress?: SortOrder
    providerId?: SortOrder
    transactionHash?: SortOrder
    paymentAmount?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type UsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    requestHeaders?: SortOrder
    requestParams?: SortOrder
    requestBody?: SortOrder
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
    errorMessage?: SortOrder
    success?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogAvgOrderByAggregateInput = {
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
  }

  export type UsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    requestBody?: SortOrder
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
    errorMessage?: SortOrder
    success?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    apiId?: SortOrder
    providerId?: SortOrder
    developerAddress?: SortOrder
    requestBody?: SortOrder
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
    errorMessage?: SortOrder
    success?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageLogSumOrderByAggregateInput = {
    responseStatus?: SortOrder
    responseTime?: SortOrder
    responseSize?: SortOrder
  }

  export type ProviderCreateNestedOneWithoutApiInput = {
    create?: XOR<ProviderCreateWithoutApiInput, ProviderUncheckedCreateWithoutApiInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApiInput
    connect?: ProviderWhereUniqueInput
  }

  export type FavoriteCreateNestedManyWithoutApiInput = {
    create?: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput> | FavoriteCreateWithoutApiInput[] | FavoriteUncheckedCreateWithoutApiInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApiInput | FavoriteCreateOrConnectWithoutApiInput[]
    createMany?: FavoriteCreateManyApiInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutApiInput = {
    create?: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput> | ReviewCreateWithoutApiInput[] | ReviewUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApiInput | ReviewCreateOrConnectWithoutApiInput[]
    createMany?: ReviewCreateManyApiInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutApiInput = {
    create?: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput> | TokenCreateWithoutApiInput[] | TokenUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutApiInput | TokenCreateOrConnectWithoutApiInput[]
    createMany?: TokenCreateManyApiInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UsageLogCreateNestedManyWithoutApiInput = {
    create?: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput> | UsageLogCreateWithoutApiInput[] | UsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiInput | UsageLogCreateOrConnectWithoutApiInput[]
    createMany?: UsageLogCreateManyApiInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type PurchasedApiCreateNestedManyWithoutApiInput = {
    create?: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput> | PurchasedApiCreateWithoutApiInput[] | PurchasedApiUncheckedCreateWithoutApiInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutApiInput | PurchasedApiCreateOrConnectWithoutApiInput[]
    createMany?: PurchasedApiCreateManyApiInputEnvelope
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput> | FavoriteCreateWithoutApiInput[] | FavoriteUncheckedCreateWithoutApiInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApiInput | FavoriteCreateOrConnectWithoutApiInput[]
    createMany?: FavoriteCreateManyApiInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput> | ReviewCreateWithoutApiInput[] | ReviewUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApiInput | ReviewCreateOrConnectWithoutApiInput[]
    createMany?: ReviewCreateManyApiInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput> | TokenCreateWithoutApiInput[] | TokenUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutApiInput | TokenCreateOrConnectWithoutApiInput[]
    createMany?: TokenCreateManyApiInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type UsageLogUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput> | UsageLogCreateWithoutApiInput[] | UsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiInput | UsageLogCreateOrConnectWithoutApiInput[]
    createMany?: UsageLogCreateManyApiInputEnvelope
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
  }

  export type PurchasedApiUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput> | PurchasedApiCreateWithoutApiInput[] | PurchasedApiUncheckedCreateWithoutApiInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutApiInput | PurchasedApiCreateOrConnectWithoutApiInput[]
    createMany?: PurchasedApiCreateManyApiInputEnvelope
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProviderUpdateOneRequiredWithoutApiNestedInput = {
    create?: XOR<ProviderCreateWithoutApiInput, ProviderUncheckedCreateWithoutApiInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApiInput
    upsert?: ProviderUpsertWithoutApiInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutApiInput, ProviderUpdateWithoutApiInput>, ProviderUncheckedUpdateWithoutApiInput>
  }

  export type FavoriteUpdateManyWithoutApiNestedInput = {
    create?: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput> | FavoriteCreateWithoutApiInput[] | FavoriteUncheckedCreateWithoutApiInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApiInput | FavoriteCreateOrConnectWithoutApiInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutApiInput | FavoriteUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: FavoriteCreateManyApiInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutApiInput | FavoriteUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutApiInput | FavoriteUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutApiNestedInput = {
    create?: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput> | ReviewCreateWithoutApiInput[] | ReviewUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApiInput | ReviewCreateOrConnectWithoutApiInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutApiInput | ReviewUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ReviewCreateManyApiInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutApiInput | ReviewUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutApiInput | ReviewUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutApiNestedInput = {
    create?: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput> | TokenCreateWithoutApiInput[] | TokenUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutApiInput | TokenCreateOrConnectWithoutApiInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutApiInput | TokenUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: TokenCreateManyApiInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutApiInput | TokenUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutApiInput | TokenUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UsageLogUpdateManyWithoutApiNestedInput = {
    create?: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput> | UsageLogCreateWithoutApiInput[] | UsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiInput | UsageLogCreateOrConnectWithoutApiInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutApiInput | UsageLogUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UsageLogCreateManyApiInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutApiInput | UsageLogUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutApiInput | UsageLogUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type PurchasedApiUpdateManyWithoutApiNestedInput = {
    create?: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput> | PurchasedApiCreateWithoutApiInput[] | PurchasedApiUncheckedCreateWithoutApiInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutApiInput | PurchasedApiCreateOrConnectWithoutApiInput[]
    upsert?: PurchasedApiUpsertWithWhereUniqueWithoutApiInput | PurchasedApiUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: PurchasedApiCreateManyApiInputEnvelope
    set?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    disconnect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    delete?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    update?: PurchasedApiUpdateWithWhereUniqueWithoutApiInput | PurchasedApiUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: PurchasedApiUpdateManyWithWhereWithoutApiInput | PurchasedApiUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput> | FavoriteCreateWithoutApiInput[] | FavoriteUncheckedCreateWithoutApiInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutApiInput | FavoriteCreateOrConnectWithoutApiInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutApiInput | FavoriteUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: FavoriteCreateManyApiInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutApiInput | FavoriteUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutApiInput | FavoriteUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput> | ReviewCreateWithoutApiInput[] | ReviewUncheckedCreateWithoutApiInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutApiInput | ReviewCreateOrConnectWithoutApiInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutApiInput | ReviewUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: ReviewCreateManyApiInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutApiInput | ReviewUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutApiInput | ReviewUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput> | TokenCreateWithoutApiInput[] | TokenUncheckedCreateWithoutApiInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutApiInput | TokenCreateOrConnectWithoutApiInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutApiInput | TokenUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: TokenCreateManyApiInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutApiInput | TokenUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutApiInput | TokenUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type UsageLogUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput> | UsageLogCreateWithoutApiInput[] | UsageLogUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UsageLogCreateOrConnectWithoutApiInput | UsageLogCreateOrConnectWithoutApiInput[]
    upsert?: UsageLogUpsertWithWhereUniqueWithoutApiInput | UsageLogUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UsageLogCreateManyApiInputEnvelope
    set?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    disconnect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    delete?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    connect?: UsageLogWhereUniqueInput | UsageLogWhereUniqueInput[]
    update?: UsageLogUpdateWithWhereUniqueWithoutApiInput | UsageLogUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UsageLogUpdateManyWithWhereWithoutApiInput | UsageLogUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
  }

  export type PurchasedApiUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput> | PurchasedApiCreateWithoutApiInput[] | PurchasedApiUncheckedCreateWithoutApiInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutApiInput | PurchasedApiCreateOrConnectWithoutApiInput[]
    upsert?: PurchasedApiUpsertWithWhereUniqueWithoutApiInput | PurchasedApiUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: PurchasedApiCreateManyApiInputEnvelope
    set?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    disconnect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    delete?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    update?: PurchasedApiUpdateWithWhereUniqueWithoutApiInput | PurchasedApiUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: PurchasedApiUpdateManyWithWhereWithoutApiInput | PurchasedApiUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutApiKeyInput = {
    create?: XOR<ProviderCreateWithoutApiKeyInput, ProviderUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApiKeyInput
    connect?: ProviderWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProviderUpdateOneRequiredWithoutApiKeyNestedInput = {
    create?: XOR<ProviderCreateWithoutApiKeyInput, ProviderUncheckedCreateWithoutApiKeyInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApiKeyInput
    upsert?: ProviderUpsertWithoutApiKeyInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutApiKeyInput, ProviderUpdateWithoutApiKeyInput>, ProviderUncheckedUpdateWithoutApiKeyInput>
  }

  export type ApiCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<ApiCreateWithoutFavoriteInput, ApiUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: ApiCreateOrConnectWithoutFavoriteInput
    connect?: ApiWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<ApiCreateWithoutFavoriteInput, ApiUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: ApiCreateOrConnectWithoutFavoriteInput
    upsert?: ApiUpsertWithoutFavoriteInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutFavoriteInput, ApiUpdateWithoutFavoriteInput>, ApiUncheckedUpdateWithoutFavoriteInput>
  }

  export type ApiCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput> | ApiKeyCreateWithoutProviderInput[] | ApiKeyUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProviderInput | ApiKeyCreateOrConnectWithoutProviderInput[]
    createMany?: ApiKeyCreateManyProviderInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutProviderInput = {
    create?: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput> | TokenCreateWithoutProviderInput[] | TokenUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutProviderInput | TokenCreateOrConnectWithoutProviderInput[]
    createMany?: TokenCreateManyProviderInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PurchasedApiCreateNestedManyWithoutProviderInput = {
    create?: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput> | PurchasedApiCreateWithoutProviderInput[] | PurchasedApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutProviderInput | PurchasedApiCreateOrConnectWithoutProviderInput[]
    createMany?: PurchasedApiCreateManyProviderInputEnvelope
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
  }

  export type ApiUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput> | ApiKeyCreateWithoutProviderInput[] | ApiKeyUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProviderInput | ApiKeyCreateOrConnectWithoutProviderInput[]
    createMany?: ApiKeyCreateManyProviderInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput> | TokenCreateWithoutProviderInput[] | TokenUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutProviderInput | TokenCreateOrConnectWithoutProviderInput[]
    createMany?: TokenCreateManyProviderInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PurchasedApiUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput> | PurchasedApiCreateWithoutProviderInput[] | PurchasedApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutProviderInput | PurchasedApiCreateOrConnectWithoutProviderInput[]
    createMany?: PurchasedApiCreateManyProviderInputEnvelope
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
  }

  export type ApiUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutProviderInput | ApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutProviderInput | ApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutProviderInput | ApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput> | ApiKeyCreateWithoutProviderInput[] | ApiKeyUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProviderInput | ApiKeyCreateOrConnectWithoutProviderInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutProviderInput | ApiKeyUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiKeyCreateManyProviderInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutProviderInput | ApiKeyUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutProviderInput | ApiKeyUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutProviderNestedInput = {
    create?: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput> | TokenCreateWithoutProviderInput[] | TokenUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutProviderInput | TokenCreateOrConnectWithoutProviderInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutProviderInput | TokenUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: TokenCreateManyProviderInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutProviderInput | TokenUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutProviderInput | TokenUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PurchasedApiUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput> | PurchasedApiCreateWithoutProviderInput[] | PurchasedApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutProviderInput | PurchasedApiCreateOrConnectWithoutProviderInput[]
    upsert?: PurchasedApiUpsertWithWhereUniqueWithoutProviderInput | PurchasedApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PurchasedApiCreateManyProviderInputEnvelope
    set?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    disconnect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    delete?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    update?: PurchasedApiUpdateWithWhereUniqueWithoutProviderInput | PurchasedApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PurchasedApiUpdateManyWithWhereWithoutProviderInput | PurchasedApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
  }

  export type ApiUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutProviderInput | ApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutProviderInput | ApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutProviderInput | ApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput> | ApiKeyCreateWithoutProviderInput[] | ApiKeyUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutProviderInput | ApiKeyCreateOrConnectWithoutProviderInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutProviderInput | ApiKeyUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiKeyCreateManyProviderInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutProviderInput | ApiKeyUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutProviderInput | ApiKeyUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput> | TokenCreateWithoutProviderInput[] | TokenUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutProviderInput | TokenCreateOrConnectWithoutProviderInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutProviderInput | TokenUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: TokenCreateManyProviderInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutProviderInput | TokenUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutProviderInput | TokenUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PurchasedApiUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput> | PurchasedApiCreateWithoutProviderInput[] | PurchasedApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: PurchasedApiCreateOrConnectWithoutProviderInput | PurchasedApiCreateOrConnectWithoutProviderInput[]
    upsert?: PurchasedApiUpsertWithWhereUniqueWithoutProviderInput | PurchasedApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: PurchasedApiCreateManyProviderInputEnvelope
    set?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    disconnect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    delete?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    connect?: PurchasedApiWhereUniqueInput | PurchasedApiWhereUniqueInput[]
    update?: PurchasedApiUpdateWithWhereUniqueWithoutProviderInput | PurchasedApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: PurchasedApiUpdateManyWithWhereWithoutProviderInput | PurchasedApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
  }

  export type ApiCreateNestedOneWithoutReviewInput = {
    create?: XOR<ApiCreateWithoutReviewInput, ApiUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ApiCreateOrConnectWithoutReviewInput
    connect?: ApiWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<ApiCreateWithoutReviewInput, ApiUncheckedCreateWithoutReviewInput>
    connectOrCreate?: ApiCreateOrConnectWithoutReviewInput
    upsert?: ApiUpsertWithoutReviewInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutReviewInput, ApiUpdateWithoutReviewInput>, ApiUncheckedUpdateWithoutReviewInput>
  }

  export type ApiCreateNestedOneWithoutTokenInput = {
    create?: XOR<ApiCreateWithoutTokenInput, ApiUncheckedCreateWithoutTokenInput>
    connectOrCreate?: ApiCreateOrConnectWithoutTokenInput
    connect?: ApiWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutTokenInput = {
    create?: XOR<ProviderCreateWithoutTokenInput, ProviderUncheckedCreateWithoutTokenInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutTokenInput
    connect?: ProviderWhereUniqueInput
  }

  export type UsageLogCreateNestedOneWithoutTokenInput = {
    create?: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsageLogCreateOrConnectWithoutTokenInput
    connect?: UsageLogWhereUniqueInput
  }

  export type UsageLogUncheckedCreateNestedOneWithoutTokenInput = {
    create?: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsageLogCreateOrConnectWithoutTokenInput
    connect?: UsageLogWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<ApiCreateWithoutTokenInput, ApiUncheckedCreateWithoutTokenInput>
    connectOrCreate?: ApiCreateOrConnectWithoutTokenInput
    upsert?: ApiUpsertWithoutTokenInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutTokenInput, ApiUpdateWithoutTokenInput>, ApiUncheckedUpdateWithoutTokenInput>
  }

  export type ProviderUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<ProviderCreateWithoutTokenInput, ProviderUncheckedCreateWithoutTokenInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutTokenInput
    upsert?: ProviderUpsertWithoutTokenInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutTokenInput, ProviderUpdateWithoutTokenInput>, ProviderUncheckedUpdateWithoutTokenInput>
  }

  export type UsageLogUpdateOneWithoutTokenNestedInput = {
    create?: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsageLogCreateOrConnectWithoutTokenInput
    upsert?: UsageLogUpsertWithoutTokenInput
    disconnect?: UsageLogWhereInput | boolean
    delete?: UsageLogWhereInput | boolean
    connect?: UsageLogWhereUniqueInput
    update?: XOR<XOR<UsageLogUpdateToOneWithWhereWithoutTokenInput, UsageLogUpdateWithoutTokenInput>, UsageLogUncheckedUpdateWithoutTokenInput>
  }

  export type UsageLogUncheckedUpdateOneWithoutTokenNestedInput = {
    create?: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UsageLogCreateOrConnectWithoutTokenInput
    upsert?: UsageLogUpsertWithoutTokenInput
    disconnect?: UsageLogWhereInput | boolean
    delete?: UsageLogWhereInput | boolean
    connect?: UsageLogWhereUniqueInput
    update?: XOR<XOR<UsageLogUpdateToOneWithWhereWithoutTokenInput, UsageLogUpdateWithoutTokenInput>, UsageLogUncheckedUpdateWithoutTokenInput>
  }

  export type ApiCreateNestedOneWithoutPurchasedApiInput = {
    create?: XOR<ApiCreateWithoutPurchasedApiInput, ApiUncheckedCreateWithoutPurchasedApiInput>
    connectOrCreate?: ApiCreateOrConnectWithoutPurchasedApiInput
    connect?: ApiWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutPurchasedApiInput = {
    create?: XOR<ProviderCreateWithoutPurchasedApiInput, ProviderUncheckedCreateWithoutPurchasedApiInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPurchasedApiInput
    connect?: ProviderWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutPurchasedApiNestedInput = {
    create?: XOR<ApiCreateWithoutPurchasedApiInput, ApiUncheckedCreateWithoutPurchasedApiInput>
    connectOrCreate?: ApiCreateOrConnectWithoutPurchasedApiInput
    upsert?: ApiUpsertWithoutPurchasedApiInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutPurchasedApiInput, ApiUpdateWithoutPurchasedApiInput>, ApiUncheckedUpdateWithoutPurchasedApiInput>
  }

  export type ProviderUpdateOneRequiredWithoutPurchasedApiNestedInput = {
    create?: XOR<ProviderCreateWithoutPurchasedApiInput, ProviderUncheckedCreateWithoutPurchasedApiInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutPurchasedApiInput
    upsert?: ProviderUpsertWithoutPurchasedApiInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutPurchasedApiInput, ProviderUpdateWithoutPurchasedApiInput>, ProviderUncheckedUpdateWithoutPurchasedApiInput>
  }

  export type ApiCreateNestedOneWithoutUsageLogInput = {
    create?: XOR<ApiCreateWithoutUsageLogInput, ApiUncheckedCreateWithoutUsageLogInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUsageLogInput
    connect?: ApiWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutUsageLogInput = {
    create?: XOR<TokenCreateWithoutUsageLogInput, TokenUncheckedCreateWithoutUsageLogInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUsageLogInput
    connect?: TokenWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutUsageLogNestedInput = {
    create?: XOR<ApiCreateWithoutUsageLogInput, ApiUncheckedCreateWithoutUsageLogInput>
    connectOrCreate?: ApiCreateOrConnectWithoutUsageLogInput
    upsert?: ApiUpsertWithoutUsageLogInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutUsageLogInput, ApiUpdateWithoutUsageLogInput>, ApiUncheckedUpdateWithoutUsageLogInput>
  }

  export type TokenUpdateOneRequiredWithoutUsageLogNestedInput = {
    create?: XOR<TokenCreateWithoutUsageLogInput, TokenUncheckedCreateWithoutUsageLogInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUsageLogInput
    upsert?: TokenUpsertWithoutUsageLogInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutUsageLogInput, TokenUpdateWithoutUsageLogInput>, TokenUncheckedUpdateWithoutUsageLogInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProviderCreateWithoutApiInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    ApiKey?: ApiKeyCreateNestedManyWithoutProviderInput
    Token?: TokenCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutApiInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutProviderInput
    Token?: TokenUncheckedCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutApiInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutApiInput, ProviderUncheckedCreateWithoutApiInput>
  }

  export type FavoriteCreateWithoutApiInput = {
    id: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteUncheckedCreateWithoutApiInput = {
    id: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutApiInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput>
  }

  export type FavoriteCreateManyApiInputEnvelope = {
    data: FavoriteCreateManyApiInput | FavoriteCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutApiInput = {
    id: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ReviewUncheckedCreateWithoutApiInput = {
    id: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ReviewCreateOrConnectWithoutApiInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput>
  }

  export type ReviewCreateManyApiInputEnvelope = {
    data: ReviewCreateManyApiInput | ReviewCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutApiInput = {
    id: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    Provider: ProviderCreateNestedOneWithoutTokenInput
    UsageLog?: UsageLogCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutApiInput = {
    id: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    UsageLog?: UsageLogUncheckedCreateNestedOneWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutApiInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput>
  }

  export type TokenCreateManyApiInputEnvelope = {
    data: TokenCreateManyApiInput | TokenCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type UsageLogCreateWithoutApiInput = {
    id: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    Token: TokenCreateNestedOneWithoutUsageLogInput
  }

  export type UsageLogUncheckedCreateWithoutApiInput = {
    id: string
    tokenId: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogCreateOrConnectWithoutApiInput = {
    where: UsageLogWhereUniqueInput
    create: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput>
  }

  export type UsageLogCreateManyApiInputEnvelope = {
    data: UsageLogCreateManyApiInput | UsageLogCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedApiCreateWithoutApiInput = {
    id: string
    developerAddress: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    Provider: ProviderCreateNestedOneWithoutPurchasedApiInput
  }

  export type PurchasedApiUncheckedCreateWithoutApiInput = {
    id: string
    developerAddress: string
    providerId: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PurchasedApiCreateOrConnectWithoutApiInput = {
    where: PurchasedApiWhereUniqueInput
    create: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput>
  }

  export type PurchasedApiCreateManyApiInputEnvelope = {
    data: PurchasedApiCreateManyApiInput | PurchasedApiCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutApiInput = {
    update: XOR<ProviderUpdateWithoutApiInput, ProviderUncheckedUpdateWithoutApiInput>
    create: XOR<ProviderCreateWithoutApiInput, ProviderUncheckedCreateWithoutApiInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutApiInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutApiInput, ProviderUncheckedUpdateWithoutApiInput>
  }

  export type ProviderUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUpdateManyWithoutProviderNestedInput
    Token?: TokenUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutProviderNestedInput
    Token?: TokenUncheckedUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type FavoriteUpsertWithWhereUniqueWithoutApiInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutApiInput, FavoriteUncheckedUpdateWithoutApiInput>
    create: XOR<FavoriteCreateWithoutApiInput, FavoriteUncheckedCreateWithoutApiInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutApiInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutApiInput, FavoriteUncheckedUpdateWithoutApiInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutApiInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutApiInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: StringFilter<"Favorite"> | string
    userId?: StringFilter<"Favorite"> | string
    apiId?: StringFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutApiInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutApiInput, ReviewUncheckedUpdateWithoutApiInput>
    create: XOR<ReviewCreateWithoutApiInput, ReviewUncheckedCreateWithoutApiInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutApiInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutApiInput, ReviewUncheckedUpdateWithoutApiInput>
  }

  export type ReviewUpdateManyWithWhereWithoutApiInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutApiInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    apiId?: StringFilter<"Review"> | string
    reviewerAddress?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    isVerified?: BoolFilter<"Review"> | boolean
    helpfulCount?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutApiInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutApiInput, TokenUncheckedUpdateWithoutApiInput>
    create: XOR<TokenCreateWithoutApiInput, TokenUncheckedCreateWithoutApiInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutApiInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutApiInput, TokenUncheckedUpdateWithoutApiInput>
  }

  export type TokenUpdateManyWithWhereWithoutApiInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutApiInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    apiId?: StringFilter<"Token"> | string
    providerId?: StringFilter<"Token"> | string
    developerAddress?: StringFilter<"Token"> | string
    tokenHash?: StringFilter<"Token"> | string
    isUsed?: BoolFilter<"Token"> | boolean
    usedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    lastValidAfter?: DateTimeFilter<"Token"> | Date | string
    requestMetadata?: JsonNullableFilter<"Token">
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type UsageLogUpsertWithWhereUniqueWithoutApiInput = {
    where: UsageLogWhereUniqueInput
    update: XOR<UsageLogUpdateWithoutApiInput, UsageLogUncheckedUpdateWithoutApiInput>
    create: XOR<UsageLogCreateWithoutApiInput, UsageLogUncheckedCreateWithoutApiInput>
  }

  export type UsageLogUpdateWithWhereUniqueWithoutApiInput = {
    where: UsageLogWhereUniqueInput
    data: XOR<UsageLogUpdateWithoutApiInput, UsageLogUncheckedUpdateWithoutApiInput>
  }

  export type UsageLogUpdateManyWithWhereWithoutApiInput = {
    where: UsageLogScalarWhereInput
    data: XOR<UsageLogUpdateManyMutationInput, UsageLogUncheckedUpdateManyWithoutApiInput>
  }

  export type UsageLogScalarWhereInput = {
    AND?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
    OR?: UsageLogScalarWhereInput[]
    NOT?: UsageLogScalarWhereInput | UsageLogScalarWhereInput[]
    id?: StringFilter<"UsageLog"> | string
    tokenId?: StringFilter<"UsageLog"> | string
    apiId?: StringFilter<"UsageLog"> | string
    providerId?: StringFilter<"UsageLog"> | string
    developerAddress?: StringFilter<"UsageLog"> | string
    requestHeaders?: JsonNullableFilter<"UsageLog">
    requestParams?: JsonNullableFilter<"UsageLog">
    requestBody?: StringNullableFilter<"UsageLog"> | string | null
    responseStatus?: IntFilter<"UsageLog"> | number
    responseTime?: IntFilter<"UsageLog"> | number
    responseSize?: IntFilter<"UsageLog"> | number
    errorMessage?: StringNullableFilter<"UsageLog"> | string | null
    success?: BoolFilter<"UsageLog"> | boolean
    ipAddress?: StringNullableFilter<"UsageLog"> | string | null
    userAgent?: StringNullableFilter<"UsageLog"> | string | null
    createdAt?: DateTimeFilter<"UsageLog"> | Date | string
  }

  export type PurchasedApiUpsertWithWhereUniqueWithoutApiInput = {
    where: PurchasedApiWhereUniqueInput
    update: XOR<PurchasedApiUpdateWithoutApiInput, PurchasedApiUncheckedUpdateWithoutApiInput>
    create: XOR<PurchasedApiCreateWithoutApiInput, PurchasedApiUncheckedCreateWithoutApiInput>
  }

  export type PurchasedApiUpdateWithWhereUniqueWithoutApiInput = {
    where: PurchasedApiWhereUniqueInput
    data: XOR<PurchasedApiUpdateWithoutApiInput, PurchasedApiUncheckedUpdateWithoutApiInput>
  }

  export type PurchasedApiUpdateManyWithWhereWithoutApiInput = {
    where: PurchasedApiScalarWhereInput
    data: XOR<PurchasedApiUpdateManyMutationInput, PurchasedApiUncheckedUpdateManyWithoutApiInput>
  }

  export type PurchasedApiScalarWhereInput = {
    AND?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
    OR?: PurchasedApiScalarWhereInput[]
    NOT?: PurchasedApiScalarWhereInput | PurchasedApiScalarWhereInput[]
    id?: StringFilter<"PurchasedApi"> | string
    apiId?: StringFilter<"PurchasedApi"> | string
    developerAddress?: StringFilter<"PurchasedApi"> | string
    providerId?: StringFilter<"PurchasedApi"> | string
    transactionHash?: StringFilter<"PurchasedApi"> | string
    paymentAmount?: StringFilter<"PurchasedApi"> | string
    status?: StringFilter<"PurchasedApi"> | string
    expiresAt?: DateTimeFilter<"PurchasedApi"> | Date | string
    createdAt?: DateTimeFilter<"PurchasedApi"> | Date | string
  }

  export type ProviderCreateWithoutApiKeyInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiCreateNestedManyWithoutProviderInput
    Token?: TokenCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutApiKeyInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiUncheckedCreateNestedManyWithoutProviderInput
    Token?: TokenUncheckedCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutApiKeyInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutApiKeyInput, ProviderUncheckedCreateWithoutApiKeyInput>
  }

  export type ProviderUpsertWithoutApiKeyInput = {
    update: XOR<ProviderUpdateWithoutApiKeyInput, ProviderUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ProviderCreateWithoutApiKeyInput, ProviderUncheckedCreateWithoutApiKeyInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutApiKeyInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutApiKeyInput, ProviderUncheckedUpdateWithoutApiKeyInput>
  }

  export type ProviderUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateManyWithoutProviderNestedInput
    Token?: TokenUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUncheckedUpdateManyWithoutProviderNestedInput
    Token?: TokenUncheckedUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ApiCreateWithoutFavoriteInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutFavoriteInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutFavoriteInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutFavoriteInput, ApiUncheckedCreateWithoutFavoriteInput>
  }

  export type ApiUpsertWithoutFavoriteInput = {
    update: XOR<ApiUpdateWithoutFavoriteInput, ApiUncheckedUpdateWithoutFavoriteInput>
    create: XOR<ApiCreateWithoutFavoriteInput, ApiUncheckedCreateWithoutFavoriteInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutFavoriteInput, ApiUncheckedUpdateWithoutFavoriteInput>
  }

  export type ApiUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutFavoriteInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiCreateWithoutProviderInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutProviderInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutProviderInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput>
  }

  export type ApiCreateManyProviderInputEnvelope = {
    data: ApiCreateManyProviderInput | ApiCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutProviderInput = {
    id: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutProviderInput = {
    id: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutProviderInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput>
  }

  export type ApiKeyCreateManyProviderInputEnvelope = {
    data: ApiKeyCreateManyProviderInput | ApiKeyCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutProviderInput = {
    id: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutTokenInput
    UsageLog?: UsageLogCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutProviderInput = {
    id: string
    apiId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    UsageLog?: UsageLogUncheckedCreateNestedOneWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutProviderInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput>
  }

  export type TokenCreateManyProviderInputEnvelope = {
    data: TokenCreateManyProviderInput | TokenCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedApiCreateWithoutProviderInput = {
    id: string
    developerAddress: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutPurchasedApiInput
  }

  export type PurchasedApiUncheckedCreateWithoutProviderInput = {
    id: string
    apiId: string
    developerAddress: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PurchasedApiCreateOrConnectWithoutProviderInput = {
    where: PurchasedApiWhereUniqueInput
    create: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput>
  }

  export type PurchasedApiCreateManyProviderInputEnvelope = {
    data: PurchasedApiCreateManyProviderInput | PurchasedApiCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ApiUpsertWithWhereUniqueWithoutProviderInput = {
    where: ApiWhereUniqueInput
    update: XOR<ApiUpdateWithoutProviderInput, ApiUncheckedUpdateWithoutProviderInput>
    create: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput>
  }

  export type ApiUpdateWithWhereUniqueWithoutProviderInput = {
    where: ApiWhereUniqueInput
    data: XOR<ApiUpdateWithoutProviderInput, ApiUncheckedUpdateWithoutProviderInput>
  }

  export type ApiUpdateManyWithWhereWithoutProviderInput = {
    where: ApiScalarWhereInput
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyWithoutProviderInput>
  }

  export type ApiScalarWhereInput = {
    AND?: ApiScalarWhereInput | ApiScalarWhereInput[]
    OR?: ApiScalarWhereInput[]
    NOT?: ApiScalarWhereInput | ApiScalarWhereInput[]
    id?: StringFilter<"Api"> | string
    providerId?: StringFilter<"Api"> | string
    name?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    category?: StringFilter<"Api"> | string
    endpoint?: StringFilter<"Api"> | string
    publicPath?: StringFilter<"Api"> | string
    method?: StringFilter<"Api"> | string
    pricePerCall?: StringFilter<"Api"> | string
    currency?: StringFilter<"Api"> | string
    isActive?: BoolFilter<"Api"> | boolean
    totalCalls?: IntFilter<"Api"> | number
    totalRevenue?: StringFilter<"Api"> | string
    averageResponseTime?: IntFilter<"Api"> | number
    uptime?: FloatFilter<"Api"> | number
    documentation?: JsonNullableFilter<"Api">
    headers?: JsonNullableFilter<"Api">
    queryParams?: JsonNullableFilter<"Api">
    internalEndpoint?: StringNullableFilter<"Api"> | string | null
    internalAuth?: JsonNullableFilter<"Api">
    relayConfiguration?: JsonNullableFilter<"Api">
    isDirectRelay?: BoolFilter<"Api"> | boolean
    fallbackEndpoint?: StringNullableFilter<"Api"> | string | null
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutProviderInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutProviderInput, ApiKeyUncheckedUpdateWithoutProviderInput>
    create: XOR<ApiKeyCreateWithoutProviderInput, ApiKeyUncheckedCreateWithoutProviderInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutProviderInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutProviderInput, ApiKeyUncheckedUpdateWithoutProviderInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutProviderInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutProviderInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    providerId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    lastUsed?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    permissions?: JsonNullableFilter<"ApiKey">
    rateLimit?: IntNullableFilter<"ApiKey"> | number | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    updatedAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutProviderInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutProviderInput, TokenUncheckedUpdateWithoutProviderInput>
    create: XOR<TokenCreateWithoutProviderInput, TokenUncheckedCreateWithoutProviderInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutProviderInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutProviderInput, TokenUncheckedUpdateWithoutProviderInput>
  }

  export type TokenUpdateManyWithWhereWithoutProviderInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutProviderInput>
  }

  export type PurchasedApiUpsertWithWhereUniqueWithoutProviderInput = {
    where: PurchasedApiWhereUniqueInput
    update: XOR<PurchasedApiUpdateWithoutProviderInput, PurchasedApiUncheckedUpdateWithoutProviderInput>
    create: XOR<PurchasedApiCreateWithoutProviderInput, PurchasedApiUncheckedCreateWithoutProviderInput>
  }

  export type PurchasedApiUpdateWithWhereUniqueWithoutProviderInput = {
    where: PurchasedApiWhereUniqueInput
    data: XOR<PurchasedApiUpdateWithoutProviderInput, PurchasedApiUncheckedUpdateWithoutProviderInput>
  }

  export type PurchasedApiUpdateManyWithWhereWithoutProviderInput = {
    where: PurchasedApiScalarWhereInput
    data: XOR<PurchasedApiUpdateManyMutationInput, PurchasedApiUncheckedUpdateManyWithoutProviderInput>
  }

  export type ApiCreateWithoutReviewInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutReviewInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutReviewInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutReviewInput, ApiUncheckedCreateWithoutReviewInput>
  }

  export type ApiUpsertWithoutReviewInput = {
    update: XOR<ApiUpdateWithoutReviewInput, ApiUncheckedUpdateWithoutReviewInput>
    create: XOR<ApiCreateWithoutReviewInput, ApiUncheckedCreateWithoutReviewInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutReviewInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutReviewInput, ApiUncheckedUpdateWithoutReviewInput>
  }

  export type ApiUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiCreateWithoutTokenInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutTokenInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutTokenInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutTokenInput, ApiUncheckedCreateWithoutTokenInput>
  }

  export type ProviderCreateWithoutTokenInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutTokenInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiUncheckedCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutProviderInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutTokenInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutTokenInput, ProviderUncheckedCreateWithoutTokenInput>
  }

  export type UsageLogCreateWithoutTokenInput = {
    id: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutUsageLogInput
  }

  export type UsageLogUncheckedCreateWithoutTokenInput = {
    id: string
    apiId: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageLogCreateOrConnectWithoutTokenInput = {
    where: UsageLogWhereUniqueInput
    create: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
  }

  export type ApiUpsertWithoutTokenInput = {
    update: XOR<ApiUpdateWithoutTokenInput, ApiUncheckedUpdateWithoutTokenInput>
    create: XOR<ApiCreateWithoutTokenInput, ApiUncheckedCreateWithoutTokenInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutTokenInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutTokenInput, ApiUncheckedUpdateWithoutTokenInput>
  }

  export type ApiUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ProviderUpsertWithoutTokenInput = {
    update: XOR<ProviderUpdateWithoutTokenInput, ProviderUncheckedUpdateWithoutTokenInput>
    create: XOR<ProviderCreateWithoutTokenInput, ProviderUncheckedCreateWithoutTokenInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutTokenInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutTokenInput, ProviderUncheckedUpdateWithoutTokenInput>
  }

  export type ProviderUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUncheckedUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutProviderNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type UsageLogUpsertWithoutTokenInput = {
    update: XOR<UsageLogUpdateWithoutTokenInput, UsageLogUncheckedUpdateWithoutTokenInput>
    create: XOR<UsageLogCreateWithoutTokenInput, UsageLogUncheckedCreateWithoutTokenInput>
    where?: UsageLogWhereInput
  }

  export type UsageLogUpdateToOneWithWhereWithoutTokenInput = {
    where?: UsageLogWhereInput
    data: XOR<UsageLogUpdateWithoutTokenInput, UsageLogUncheckedUpdateWithoutTokenInput>
  }

  export type UsageLogUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutUsageLogNestedInput
  }

  export type UsageLogUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreateWithoutPurchasedApiInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutPurchasedApiInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    UsageLog?: UsageLogUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutPurchasedApiInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutPurchasedApiInput, ApiUncheckedCreateWithoutPurchasedApiInput>
  }

  export type ProviderCreateWithoutPurchasedApiInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyCreateNestedManyWithoutProviderInput
    Token?: TokenCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutPurchasedApiInput = {
    id: string
    walletAddress: string
    email?: string | null
    name?: string | null
    description?: string | null
    website?: string | null
    avatarUrl?: string | null
    isActive?: boolean
    reputationScore?: number
    totalEarnings?: string
    totalCalls?: number
    createdAt?: Date | string
    updatedAt: Date | string
    Api?: ApiUncheckedCreateNestedManyWithoutProviderInput
    ApiKey?: ApiKeyUncheckedCreateNestedManyWithoutProviderInput
    Token?: TokenUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutPurchasedApiInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutPurchasedApiInput, ProviderUncheckedCreateWithoutPurchasedApiInput>
  }

  export type ApiUpsertWithoutPurchasedApiInput = {
    update: XOR<ApiUpdateWithoutPurchasedApiInput, ApiUncheckedUpdateWithoutPurchasedApiInput>
    create: XOR<ApiCreateWithoutPurchasedApiInput, ApiUncheckedCreateWithoutPurchasedApiInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutPurchasedApiInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutPurchasedApiInput, ApiUncheckedUpdateWithoutPurchasedApiInput>
  }

  export type ApiUpdateWithoutPurchasedApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutPurchasedApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ProviderUpsertWithoutPurchasedApiInput = {
    update: XOR<ProviderUpdateWithoutPurchasedApiInput, ProviderUncheckedUpdateWithoutPurchasedApiInput>
    create: XOR<ProviderCreateWithoutPurchasedApiInput, ProviderUncheckedCreateWithoutPurchasedApiInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutPurchasedApiInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutPurchasedApiInput, ProviderUncheckedUpdateWithoutPurchasedApiInput>
  }

  export type ProviderUpdateWithoutPurchasedApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUpdateManyWithoutProviderNestedInput
    Token?: TokenUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutPurchasedApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reputationScore?: FloatFieldUpdateOperationsInput | number
    totalEarnings?: StringFieldUpdateOperationsInput | string
    totalCalls?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUncheckedUpdateManyWithoutProviderNestedInput
    ApiKey?: ApiKeyUncheckedUpdateManyWithoutProviderNestedInput
    Token?: TokenUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ApiCreateWithoutUsageLogInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Provider: ProviderCreateNestedOneWithoutApiInput
    Favorite?: FavoriteCreateNestedManyWithoutApiInput
    Review?: ReviewCreateNestedManyWithoutApiInput
    Token?: TokenCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutUsageLogInput = {
    id: string
    providerId: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutApiInput
    Review?: ReviewUncheckedCreateNestedManyWithoutApiInput
    Token?: TokenUncheckedCreateNestedManyWithoutApiInput
    PurchasedApi?: PurchasedApiUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutUsageLogInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutUsageLogInput, ApiUncheckedCreateWithoutUsageLogInput>
  }

  export type TokenCreateWithoutUsageLogInput = {
    id: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    Api: ApiCreateNestedOneWithoutTokenInput
    Provider: ProviderCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutUsageLogInput = {
    id: string
    apiId: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUsageLogInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUsageLogInput, TokenUncheckedCreateWithoutUsageLogInput>
  }

  export type ApiUpsertWithoutUsageLogInput = {
    update: XOR<ApiUpdateWithoutUsageLogInput, ApiUncheckedUpdateWithoutUsageLogInput>
    create: XOR<ApiCreateWithoutUsageLogInput, ApiUncheckedCreateWithoutUsageLogInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutUsageLogInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutUsageLogInput, ApiUncheckedUpdateWithoutUsageLogInput>
  }

  export type ApiUpdateWithoutUsageLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutApiNestedInput
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutUsageLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type TokenUpsertWithoutUsageLogInput = {
    update: XOR<TokenUpdateWithoutUsageLogInput, TokenUncheckedUpdateWithoutUsageLogInput>
    create: XOR<TokenCreateWithoutUsageLogInput, TokenUncheckedCreateWithoutUsageLogInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutUsageLogInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutUsageLogInput, TokenUncheckedUpdateWithoutUsageLogInput>
  }

  export type TokenUpdateWithoutUsageLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutTokenNestedInput
    Provider?: ProviderUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutUsageLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyApiInput = {
    id: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewCreateManyApiInput = {
    id: string
    reviewerAddress: string
    rating: number
    comment?: string | null
    isVerified?: boolean
    helpfulCount?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TokenCreateManyApiInput = {
    id: string
    providerId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UsageLogCreateManyApiInput = {
    id: string
    tokenId: string
    providerId: string
    developerAddress: string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: string | null
    responseStatus: number
    responseTime: number
    responseSize: number
    errorMessage?: string | null
    success?: boolean
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type PurchasedApiCreateManyApiInput = {
    id: string
    developerAddress: string
    providerId: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FavoriteUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerAddress?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    helpfulCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutTokenNestedInput
    UsageLog?: UsageLogUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsageLog?: UsageLogUncheckedUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateOneRequiredWithoutUsageLogNestedInput
  }

  export type UsageLogUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageLogUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    requestHeaders?: NullableJsonNullValueInput | InputJsonValue
    requestParams?: NullableJsonNullValueInput | InputJsonValue
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
    responseSize?: IntFieldUpdateOperationsInput | number
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    success?: BoolFieldUpdateOperationsInput | boolean
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Provider?: ProviderUpdateOneRequiredWithoutPurchasedApiNestedInput
  }

  export type PurchasedApiUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreateManyProviderInput = {
    id: string
    name: string
    description: string
    category: string
    endpoint: string
    publicPath: string
    method?: string
    pricePerCall: string
    currency?: string
    isActive?: boolean
    totalCalls?: number
    totalRevenue?: string
    averageResponseTime?: number
    uptime?: number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: boolean
    fallbackEndpoint?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ApiKeyCreateManyProviderInput = {
    id: string
    name: string
    keyHash: string
    lastUsed?: Date | string | null
    isActive?: boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: number | null
    createdAt?: Date | string
    expiresAt?: Date | string | null
    updatedAt?: Date | string
  }

  export type TokenCreateManyProviderInput = {
    id: string
    apiId: string
    developerAddress: string
    tokenHash: string
    isUsed?: boolean
    usedAt?: Date | string | null
    expiresAt: Date | string
    lastValidAfter: Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PurchasedApiCreateManyProviderInput = {
    id: string
    apiId: string
    developerAddress: string
    transactionHash: string
    paymentAmount: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ApiUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUpdateManyWithoutApiNestedInput
    Review?: ReviewUpdateManyWithoutApiNestedInput
    Token?: TokenUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Favorite?: FavoriteUncheckedUpdateManyWithoutApiNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutApiNestedInput
    Token?: TokenUncheckedUpdateManyWithoutApiNestedInput
    UsageLog?: UsageLogUncheckedUpdateManyWithoutApiNestedInput
    PurchasedApi?: PurchasedApiUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    publicPath?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    pricePerCall?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalCalls?: IntFieldUpdateOperationsInput | number
    totalRevenue?: StringFieldUpdateOperationsInput | string
    averageResponseTime?: IntFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    documentation?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    queryParams?: NullableJsonNullValueInput | InputJsonValue
    internalEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    internalAuth?: NullableJsonNullValueInput | InputJsonValue
    relayConfiguration?: NullableJsonNullValueInput | InputJsonValue
    isDirectRelay?: BoolFieldUpdateOperationsInput | boolean
    fallbackEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    lastUsed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    permissions?: NullableJsonNullValueInput | InputJsonValue
    rateLimit?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutTokenNestedInput
    UsageLog?: UsageLogUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UsageLog?: UsageLogUncheckedUpdateOneWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastValidAfter?: DateTimeFieldUpdateOperationsInput | Date | string
    requestMetadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Api?: ApiUpdateOneRequiredWithoutPurchasedApiNestedInput
  }

  export type PurchasedApiUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedApiUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
    developerAddress?: StringFieldUpdateOperationsInput | string
    transactionHash?: StringFieldUpdateOperationsInput | string
    paymentAmount?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}