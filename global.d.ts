import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Address,Customer,Email,Invoice,LineItem,Phone,Product } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Address' | 'Customer' | 'Email' | 'Invoice' | 'LineItem' | 'Phone' | 'Product'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  address: Entity<Address>,
    customer: Entity<Customer>,
    email: Entity<Email>,
    invoice: Entity<Invoice>,
    lineItem: Entity<LineItem>,
    phone: Entity<Phone>,
    product: Entity<Product>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'address', hooks: EntityHooks<Address>): any
    addEntityHooks(entityName: 'customer', hooks: EntityHooks<Customer>): any
    addEntityHooks(entityName: 'email', hooks: EntityHooks<Email>): any
    addEntityHooks(entityName: 'invoice', hooks: EntityHooks<Invoice>): any
    addEntityHooks(entityName: 'lineItem', hooks: EntityHooks<LineItem>): any
    addEntityHooks(entityName: 'phone', hooks: EntityHooks<Phone>): any
    addEntityHooks(entityName: 'product', hooks: EntityHooks<Product>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
