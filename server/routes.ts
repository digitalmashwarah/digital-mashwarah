import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema, insertLeadMagnetSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Contact submission error:", error);
      res.status(400).json({ success: false, error: "Invalid contact data" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const newsletterData = insertNewsletterSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(newsletterData);
      res.json({ success: true, subscription });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ success: false, error: "Invalid email or already subscribed" });
    }
  });

  // Lead magnet submission
  app.post("/api/lead-magnet", async (req: Request, res: Response) => {
    try {
      const leadMagnetData = insertLeadMagnetSchema.parse(req.body);
      const submission = await storage.createLeadMagnetSubmission(leadMagnetData);
      res.json({ success: true, submission });
    } catch (error) {
      console.error("Lead magnet submission error:", error);
      res.status(400).json({ success: false, error: "Invalid email data" });
    }
  });

  // Get all contacts (admin route)
  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ contacts });
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "Failed to retrieve contacts" });
    }
  });

  // Get newsletter subscriptions (admin route)
  app.get("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json({ subscriptions });
    } catch (error) {
      console.error("Get newsletter subscriptions error:", error);
      res.status(500).json({ error: "Failed to retrieve subscriptions" });
    }
  });

  // Get lead magnet submissions (admin route)
  app.get("/api/lead-magnet", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getLeadMagnetSubmissions();
      res.json({ submissions });
    } catch (error) {
      console.error("Get lead magnet submissions error:", error);
      res.status(500).json({ error: "Failed to retrieve submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
