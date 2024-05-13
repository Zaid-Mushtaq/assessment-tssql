// modules/plans.ts

import { relations } from "drizzle-orm";
import {
  sqliteTable,
  text,
  uniqueIndex,
  integer,
} from "drizzle-orm/sqlite-core";

const boolean = (col: string) => integer(col, { mode: "boolean" });
const timestamp = (col: string) => integer(col, { mode: "timestamp" });

export const plans = sqliteTable("plans", {
  id: integer("id").primaryKey().notNull(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  defaultUsers: integer("defaultUsers").notNull().default(1),
  pricePerUser: integer("pricePerUser").notNull().default(0),
  createdAt: timestamp("createdAt").notNull(),
  updatedAt: timestamp("updatedAt").notNull(),
});

export const subscriptions = sqliteTable("subscriptions", {
  // Define subscription table schema here
});

export const orders = sqliteTable("orders", {
  // Define orders table schema here
});

export const subscriptionActivations = sqliteTable("subscriptionActivations", {
  // Define subscriptionActivations table schema here
});

export const plansRelations = relations(plans, ({ one }) => ({
  // Define relations for plans here if needed
}));
