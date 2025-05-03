# Alma - Teaching Made Wonderfully Simple

> **For teachers who focus on what truly matters.**

Alma is an AI-powered teaching assistant designed to help educators reclaim their time and energy. By automating administrative tasks and providing intelligent support, Alma allows teachers to focus on what they do best—nurturing minds, igniting curiosity, and cultivating the next generation of thinkers.

---

## The Educational Entropy Problem

The modern educator faces a paradox: tasked with inspiring students, yet bogged down by administrative demands—lesson planning, documentation, and parent communication—that drain their energy. This systemic inefficiency doesn’t just inconvenience teachers; it undermines the core purpose of education by diverting focus from human connection and knowledge transfer.

Alma intervenes by managing these tasks with intelligent systems, redirecting teacher energy toward its highest purpose: amplifying wisdom through meaningful student engagement.

> "The right technology doesn’t replace teaching wisdom—it amplifies it."  
> — Alf Viktor, Founder

---

## Core Capabilities

Alma simplifies teaching workflows, giving educators more time for what matters. Here’s how:

- **Smart Teaching Assistant**: Automate admin tasks and provide instant curriculum insights.
- **Lesson Ideas & Activities**: Generate fresh, standards-aligned activities on demand.
- **Tools Designed for Teachers**: Streamline lesson creation, differentiation workflows, and documentation.
- **Easier Admin Tasks**: Reduce the burden of repetitive documentation.
- **Easy Parent Communication**: Craft clear, professional messages in your voice, effortlessly.

Currently tailored for Norwegian primary schools, Alma leverages retrieval-augmented generation (RAG) over the full Norwegian curriculum for precise, trustworthy support.

---

## Tech Stack

Alma is built with a modern, scalable stack to deliver a seamless experience:

| **Component**           | **Choice**               | **Purpose**                                                                 |
|-------------------------|--------------------------|-----------------------------------------------------------------------------|
| **Frontend**            | Next.js                  | Beginner-friendly framework with seamless Vercel deployment.                |
| **UI Components**       | Morphic’s UI (optional Radix Themes) | Clean, modern interface with optional polish.                   |
| **Text Editing**        | Tiptap                   | Lightweight, customizable editor for lesson planning.                       |
| **Authentication**      | Clerk                    | Secure, scalable user management integrated with Next.js.                   |
| **Backend Logic**       | Orchestra                | Multi-agent workflows for complex tasks like lesson planning.               |
| **Language Model**      | Grok (via xAI API)       | Real-time data and strong performance for AI-driven features.               |
| **RAG**                 | Ragie.ai                 | Curriculum-specific data for relevant, accurate responses.                  |
| **Database**            | Upstash Redis            | Fast, serverless key-value store for caching and data management.           |
| **Hosting**             | Vercel                   | Optimized for Next.js with serverless functions and edge caching.           |

---

## Quick Start

Get Alma running locally or deployed on Vercel with these steps:

1. **Fork the Morphic Repository**:  
   Fork [Morphic](https://github.com/miurla/morphic) to your GitHub account.

2. **Clone Your Fork**:  
   ```bash
   git clone https://github.com/your-username/morphic.git
   cd morphic
   ```

3. **Install Dependencies**:  
   ```bash
   npm install
   ```

4. **Configure Environment Variables**:  
   - Copy `.env.example` to `.env.local`.  
   - Add API keys for Grok, Ragie.ai, Clerk, and Upstash Redis.

5. **Run Locally**:  
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

6. **Deploy to Vercel**:  
   ```bash
   vercel --prod
   ```

---

## Contributing

We welcome forward-thinking educators and developers to shape Alma’s future:
- Fork the repository and submit pull requests.
- Share feedback or join our waitlist at [alma@example.com](mailto:alma@example.com).

---

## License

Alma is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Inspired by educators like Alf Viktor’s mother, whose use of AI to reclaim creative energy shaped Alma.
- Built on the [Morphic](https://github.com/miurla/morphic) open-source project.

---

## Join the Educational Evolution

We’re inviting a select cohort of Norwegian primary school teachers to co-create Alma. Sign up at [alma@example.com](mailto:alma@example.com) or join the waitlist.

**Zero One Labs LLC**  
*We create tools for those who see the future and want to live in it now.*