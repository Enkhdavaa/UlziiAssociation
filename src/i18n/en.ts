const en = {
  // nav
  "nav.home": "Home",
  "nav.events": "Events",
  "nav.library": "Library",
  "nav.support": "Support",
  "nav.contact": "Contact",
  "nav.signIn": "Sign in",
  "nav.signOut": "Sign out",
  "nav.menu": "Menu",

  // footer
  "footer.about":
    "A non-profit organization dedicated to supporting the Mongolian community.",
  "footer.quickLinks": "Quick Links",
  "footer.followUs": "Follow Us",
  "footer.rights": "All Rights Reserved.",
  "footer.privacy": "Privacy Policy",

  // home
  "home.eyebrow": "Mongolia & Netherlands",
  "home.headline": "Building bridges between two cultures",
  "home.sub":
    "The Ulzii Association is a non-profit connecting people from Mongolia and the Netherlands through cultural exchange, collaboration, and community.",
  "home.ctaEvents": "Upcoming Events",
  "home.ctaContact": "Get in Touch",
  "home.mission": "Mission",
  "home.missionText":
    "Founded in 2008, we serve as a bridge between Mongolia and the Netherlands — open to everyone who shares our vision and welcomes collaboration.",
  "home.values": "Values",
  "home.valuesText":
    "Respect, integrity, and collaboration are at our core. We believe in the power of diversity and strive to create an inclusive space for all members.",
  "home.board": "Board Members",
  "home.boardText":
    "Our board brings experience and expertise to guide our initiatives and keep us true to our mission and values.",

  // events page
  "events.heading": "Upcoming Events",
  "events.empty": "No upcoming events at the moment.",
  "events.emptyFollowUs": "Follow us on",
  "events.emptyOr": "to stay updated, or",
  "events.emptyGetInTouch": "get in touch",
  "events.emptyEnd": "if you'd like to organize one.",
  "events.successBanner": "Thank you! Your registration has been received.",

  // event card
  "eventCard.volunteer": "Volunteer as a storyteller",
  "eventCard.leadTaken": "Storyteller slot is filled for this event.",

  // lead / volunteer form
  "lead.back": "Storytelling Events",
  "lead.takenTitle": "Storyteller Reserved",
  "lead.takenBody": "This event already has a storyteller for this session.",
  "lead.takenTrack": "Track the",
  "lead.takenEventsLink": "events page",
  "lead.takenTrackRest": "— new storytelling events will occur soon.",
  "lead.takenBack": "Back to Events",
  "lead.formTitle": "Volunteer: Register as Storyteller",
  "lead.introText":
    "We'd love to have you as our storyteller for this session! Here's what to expect:",
  "lead.introBullet1":
    "You'll lead an hour-long storytelling, play, or workshop with the kids.",
  "lead.introBullet2a":
    "Bring your own book, or reserve one from Ulzii using the",
  "lead.introBullet2b": "Select a Book",
  "lead.introBullet2c": "section below.",
  "lead.introNote": "This registration is for this one session only.",
  "lead.selectBook": "Select a Book *",
  "lead.ownBook": "Bring my own book",
  "lead.name": "Full Name *",
  "lead.email": "Email Address *",
  "lead.phone": "Phone Number *",
  "lead.whyMessage": "Why do you want to be the storyteller? (Optional)",
  "lead.terms":
    "I confirm that I will attend this event. If I am unable to attend, I will contact you.",
  "lead.cancel": "Cancel",
  "lead.submit": "Register as Storyteller",

  // books page
  "books.heading": "Library",
  "books.sub":
    "All books below were donated by our community. Request a book and we will arrange for you to pick it up — completely free.",
  "books.availableOnly": "Available only",
  "books.statusAvailable": "Available",
  "books.statusInUse": "In use",
  "books.statusReserved": "Reserved",
  "books.requestBtn": "Request this book",
  "books.reservedNote": "Someone has already requested this book.",
  "books.inUseNote":
    "This book is currently in use. Check back when the status changes to Available.",
  "books.emptyBefore": "No books available at the moment. Check back soon, or",
  "books.emptyDonate": "donate a book",
  "books.emptyAfter": "to get us started!",
  "books.available": "available",
  "books.total": "total",
  "books.showing": "Showing",
  "books.of": "of",
  "books.books": "books",
  "books.modalRequestPrefix": "Request",
  "books.modalName": "Full Name *",
  "books.modalEmail": "Email Address *",
  "books.modalMessage": "Message (Optional)",
  "books.modalPlaceholder": "Anything you'd like us to know…",
  "books.modalCancel": "Cancel",
  "books.modalSubmit": "Send Request",
  "books.requestSuccess": "Request sent! We will contact you soon.",
  "books.requestError": "Something went wrong. Please try again.",
  "books.networkError": "Network error. Please try again.",

  // contact page
  "contact.heading": "Get in Touch",
  "contact.intro":
    "Have a question, idea, or just want to say hello? We'd love to hear from you. Fill in the form or reach us directly.",
  "contact.emailLabel": "Your Email",
  "contact.emailPlaceholder": "you@example.com",
  "contact.messageLabel": "Message",
  "contact.messagePlaceholder": "Write your message here…",
  "contact.submit": "Send Message",
  "contact.success":
    "Your message has been sent. We will get back to you soon.",
  "contact.error": "Something went wrong. Please try again.",
  "contact.networkError": "Network error. Please try again.",

  // support page
  "support.title": "Support Our Mission",
  "support.subtitle":
    "Every book matters. Help us bring more stories and learning opportunities to children, adults, and everyone in our community.",
  "support.donateBooks": "Donate Books",
  "support.donateBooksDesc":
    "Have books you no longer need? Pass them on and give them a new life in the hands of anyone.",
  "support.library": "Book Library",
  "support.libraryDesc":
    "Browse our collection of donated books and request one for free — no cost, just good reading.",

  // donate books page
  "donate.heading": "Donate a Book",
  "donate.sub":
    "Thank you for wanting to share your books with our community. Every donation helps anyone discover the joy of reading.",
  "donate.step1Title": "Contact us",
  "donate.step1Desc":
    "Send us a message with the book title, language, and condition.",
  "donate.step2Title": "Arrange handover",
  "donate.step2Desc":
    "We will agree on a convenient time and place to collect the book.",
  "donate.step3Title": "We add it to the library",
  "donate.step3Desc":
    "Your book is listed in our collection and made available to those who need it.",
  "donate.cta": "Get in Touch",
} as const;

export default en;
export type Translations = Record<keyof typeof en, string>;
