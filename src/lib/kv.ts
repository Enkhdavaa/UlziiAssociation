/// <reference lib="deno.unstable" />

export interface Book {
  id: string;
  title: string;
}

export interface LeadRegistration {
  id: string;
  eventId: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  book: string;
  date: string;
  time: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  time: string;
}

const DEFAULT_EVENTS: Event[] = [
  {
    id: "Monthly Mongolian Story Telling - May",
    title: "Monthly Mongolian Story Telling",
    date: "May 15, 2026",
    location: "Eindhoven Library",
    description:
      "Join us for a monthly story telling session featuring Mongolian tales.",
    time: "11:00 AM - 12:00 PM",
  },
];

const DEFAULT_BOOKS: Book[] = [
  { id: "secret-history", title: "The Secret History of the Mongols" },
  { id: "blue-sky", title: "The Blue Sky" },
  { id: "wolf-totem", title: "Wolf Totem" },
];

let _kv: Deno.Kv | null = null;

async function getKv(): Promise<Deno.Kv> {
  if (!_kv) _kv = await Deno.openKv();
  return _kv;
}

export async function getEvents(): Promise<Event[]> {
  const kv = await getKv();
  const events: Event[] = [];
  for await (const entry of kv.list<Event>({ prefix: ["events"] })) {
    events.push(entry.value);
  }
  const isStale = events.length === 0 || events.some((ev) => !ev.time);
  if (isStale) {
    for (const ev of DEFAULT_EVENTS) {
      await kv.set(["events", ev.id], ev);
    }
    return DEFAULT_EVENTS;
  }
  return events;
}

export async function getEvent(id: string): Promise<Event | null> {
  const kv = await getKv();
  const entry = await kv.get<Event>(["events", id]);
  return entry.value;
}

export async function saveEvent(event: Event): Promise<void> {
  const kv = await getKv();
  await kv.set(["events", event.id], event);
}

export async function getBooks(): Promise<Book[]> {
  const kv = await getKv();
  const books: Book[] = [];
  for await (const entry of kv.list<Book>({ prefix: ["books"] })) {
    books.push(entry.value);
  }
  if (books.length === 0) {
    await seedBooks(DEFAULT_BOOKS);
    return DEFAULT_BOOKS;
  }
  return books;
}

export async function seedBooks(books: Book[]): Promise<void> {
  const kv = await getKv();
  for (const book of books) {
    await kv.set(["books", book.id], book);
  }
}

export async function saveLead(
  data: Omit<LeadRegistration, "id" | "createdAt">,
): Promise<LeadRegistration> {
  const kv = await getKv();
  const id = crypto.randomUUID();
  const lead: LeadRegistration = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
  };
  await kv.set(["leads", data.eventId, id], lead);
  return lead;
}

export async function getLeads(eventId: string): Promise<LeadRegistration[]> {
  const kv = await getKv();
  const results: LeadRegistration[] = [];
  for await (const entry of kv.list<LeadRegistration>({
    prefix: ["leads", eventId],
  })) {
    results.push(entry.value);
  }
  return results;
}

export async function getAllLeads(): Promise<LeadRegistration[]> {
  const kv = await getKv();
  const results: LeadRegistration[] = [];
  for await (const entry of kv.list<LeadRegistration>({ prefix: ["leads"] })) {
    results.push(entry.value);
  }
  return results;
}

export async function updateLead(lead: LeadRegistration): Promise<void> {
  const kv = await getKv();
  await kv.set(["leads", lead.eventId, lead.id], lead);
}

export async function deleteLead(eventId: string, id: string): Promise<void> {
  const kv = await getKv();
  await kv.delete(["leads", eventId, id]);
}

export async function deleteEvent(id: string): Promise<void> {
  const kv = await getKv();
  await kv.delete(["events", id]);
}

export async function saveBook(book: Book): Promise<void> {
  const kv = await getKv();
  await kv.set(["books", book.id], book);
}

export async function deleteBook(id: string): Promise<void> {
  const kv = await getKv();
  await kv.delete(["books", id]);
}
