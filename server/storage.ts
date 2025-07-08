import { 
  users, 
  contacts, 
  newsletterSubscriptions, 
  leadMagnetSubmissions,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type Newsletter,
  type InsertNewsletter,
  type LeadMagnet,
  type InsertLeadMagnet
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
  createLeadMagnetSubmission(leadMagnet: InsertLeadMagnet): Promise<LeadMagnet>;
  getContacts(): Promise<Contact[]>;
  getNewsletterSubscriptions(): Promise<Newsletter[]>;
  getLeadMagnetSubmissions(): Promise<LeadMagnet[]>;
}

import { db } from "./db";
import { eq } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return newContact;
  }

  async createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter> {
    const [subscription] = await db
      .insert(newsletterSubscriptions)
      .values(newsletter)
      .returning();
    return subscription;
  }

  async createLeadMagnetSubmission(leadMagnet: InsertLeadMagnet): Promise<LeadMagnet> {
    const [submission] = await db
      .insert(leadMagnetSubmissions)
      .values(leadMagnet)
      .returning();
    return submission;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getNewsletterSubscriptions(): Promise<Newsletter[]> {
    return await db.select().from(newsletterSubscriptions);
  }

  async getLeadMagnetSubmissions(): Promise<LeadMagnet[]> {
    return await db.select().from(leadMagnetSubmissions);
  }
}

export const storage = new DatabaseStorage();
